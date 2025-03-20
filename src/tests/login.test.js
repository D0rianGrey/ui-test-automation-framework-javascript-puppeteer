const puppeteer = require('puppeteer');
const browserConfig = require('../config/browser.config');
const LoginPage = require('../pages/LoginPage');

let browser;
let page;
let loginPage;

describe('Тесты авторизации на SauceDemo', () => {
  beforeAll(async () => {
    // Запускаем браузер перед всеми тестами
    browser = await puppeteer.launch(browserConfig.launch);
  });

  beforeEach(async () => {
    // Создаем новую страницу перед каждым тестом
    page = await browser.newPage();
    loginPage = new LoginPage(page);
  });

  afterEach(async () => {
    // Закрываем страницу после каждого теста
    await page.close();
  });

  afterAll(async () => {
    // Закрываем браузер после всех тестов
    await browser.close();
  });

  test('Успешный вход с корректными данными', async () => {
    await loginPage.login(process.env.STANDARD_USER, process.env.PASSWORD);
    
    // Проверяем, что мы перешли на главную страницу после успешного входа
    const currentUrl = page.url();
    expect(currentUrl).toContain('/inventory.html');
  });

  test('Ошибка при входе с заблокированным пользователем', async () => {
    await loginPage.login(process.env.LOCKED_OUT_USER, process.env.PASSWORD);
    
    // Проверяем текст ошибки
    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toContain('Sorry, this user has been locked out');
  });
});