# Kilimanjaro

## Описание
Одностраничный сайт, собранный с помощью **Webpack**.  
Используются **Pug** для шаблонов и **SCSS** для стилей.  
Готовая сборка сохраняется в папку `dist`.

## Демо
Сайт доступен по адресу: [https://tishunator.github.io/kilimanjaro/](https://tishunator.github.io/kilimanjaro/)

## Макет

Верстка выполнена по макету в **Pixel Perfect**.  
Макет доступен по ссылке: [Figma — Kilimanjaro](https://www.figma.com/design/lSpbvibD8HCKris2d0wq4S/Kilimanjaro?node-id=0-204&t=gcKFYCXTzW2sKNpF-1)

---

##  Установка и запуск

1. **Клонировать репозиторий**
   ```bash
   git clone https://github.com/tishunator/kilimanjaro.git
2. Перейти в папку проекта
cd kilimanjaro

3. Установить зависимости
npm install

4. Запустить проект в режиме разработки
npm run dev

5. Собрать проект для продакшена
npm run build

**Стек**
HTML (через Pug)  
SCSS  
JavaScript (ES6+)  
Webpack  
CopyWebpackPlugin, MiniCssExtractPlugin, HtmlWebpackPlugin


**Скрипты в package.json**   
<pre> ```json { "scripts": { "dev": "webpack serve", "build": "webpack --mode production" } } ``` </pre>


