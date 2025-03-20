const BasePage = require('./BasePage');

class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    
    // Селекторы элементов страницы логина
    this.usernameInput = '#user-name';
    this.passwordInput = '#password';
    this.loginButton = '#login-button';
    this.errorMessage = '[data-test="error"]';
  }

  // Метод для входа
  async login(username, password) {
    await this.navigate(process.env.BASE_URL);
    await this.typeText(this.usernameInput, username);
    await this.typeText(this.passwordInput, password);
    await this.click(this.loginButton);
  }

  // Метод для получения текста ошибки
  async getErrorMessage() {
    await this.waitForElement(this.errorMessage);
    return await this.getText(this.errorMessage);
  }
}

module.exports = LoginPage;