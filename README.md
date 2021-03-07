// Create React App

1. npx create-react-app имя-папки-проекта или npx create-react-app . (в текущей
   папке, должна быть пустой)
2. npm install --save-dev prop-types

3. npm install --save gh-pages

// Стилизация

4. npm install --save-dev prettier husky lint-staged
5. Cоздаем файлы .prettier, .huskyrc, .lintstagedrc (ESLint)

   Файлы настроек https://github.com/goitacademy/react-lint-config

6. Настройка в VSC:

   - { "files.autoSave": "onFocusChange", "editor.formatOnSave": true, }

   - settings -> codeActionsOnSave -> settings.json

     "editor.codeActionsOnSave": { "source.fixAll.eslint": true }

7. npm install modern-normalize
8. npm install node-sass --save

// Деплой

Доки https://create-react-app.dev/docs/deployment#github-pages

9. В package.json добавляем

   "homepage": "https://имя-пользователя.github.io/имя-репо", "scripts": {
   "predeploy": "npm run build", "deploy": "gh-pages -d build",}

10. npm run deploy

// Настройка абсолютного импорта

11. Назначение папки, относительно которой задается путь
    https://create-react-app.dev/docs/importing-a-component/#absolute-imports
