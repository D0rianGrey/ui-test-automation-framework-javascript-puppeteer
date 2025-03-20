module.exports = {
    testTimeout: 30000,  // увеличиваем таймаут теста до 30 секунд
    testMatch: ['**/tests/**/*.test.js'],  // шаблон для поиска тестовых файлов
    reporters: [
      'default',
      [
        'jest-html-reporter',
        {
          pageTitle: 'UI Test Report',
          outputPath: './reports/test-report.html',
          includeFailureMsg: true,
          includeSuiteFailure: true,
        },
      ],
    ],
    setupFilesAfterEnv: ['./src/config/jest.setup.js'],  // настройки, которые выполняются перед каждым тестом
  };