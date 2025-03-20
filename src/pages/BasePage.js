class BasePage {
    constructor(page) {
        this.page = page;
    }

    // Метод для перехода на страницу
    async navigate(url) {
        await this.page.goto(url, { waitUntil: 'networkidle2' });
    }

    // Метод для получения заголовка страницы
    async getTitle() {
        return await this.page.title();
    }

    // Метод для ожидания элемента
    async waitForElement(selector, timeout = 10000) {
        await this.page.waitForSelector(selector, { visible: true, timeout });
    }

    // Метод для клика по элементу
    async click(selector) {
        await this.waitForElement(selector);
        await this.page.click(selector);
    }

    // Метод для ввода текста
    async typeText(selector, text) {
        await this.waitForElement(selector);
        await this.page.type(selector, text);
    }

    // Метод для получения текста элемента
    async getText(selector) {
        await this.waitForElement(selector);
        return await this.page.$eval(selector, element => element.textContent);
    }
}

module.exports = BasePage;