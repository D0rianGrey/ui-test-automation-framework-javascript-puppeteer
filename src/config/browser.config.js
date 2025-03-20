module.exports = {
    launch: {
      headless: false,  // false - для визуального наблюдения, true - для запуска в фоновом режиме
      defaultViewport: null,
      args: ['--start-maximized'],  // максимизировать окно браузера
      slowMo: 10,  // замедление в мс для более наглядной демонстрации
    },
    browserContext: 'default',
  };