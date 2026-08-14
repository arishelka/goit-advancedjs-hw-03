# Image search (goit-advancedjs-hw-03)

Застосунок пошуку зображень за ключовим словом через публічний API
[Pixabay](https://pixabay.com/api/docs/) з переглядом великої версії зображення
в модальному вікні.

## Стек

- [Vite](https://vitejs.dev/) — збірка проєкту
- [Axios](https://axios-http.com/) — HTTP-запити
- [iziToast](https://izitoast.marcelodolza.com/) — нотифікації
- [SimpleLightbox](https://simplelightbox.com/) — модальне вікно галереї
- [css-loader](https://github.com/vineethtrv/css-loader) — індикатор
  завантаження (чистий CSS, клас `.loader` у `src/css/styles.css`)

## Запуск

1. Встанови залежності:

   ```bash
   npm install
   ```

2. Отримай особистий ключ доступу на
   [pixabay.com/api/docs](https://pixabay.com/api/docs/) і встав його у
   константу `API_KEY` у файлі [`src/js/pixabay-api.js`](src/js/pixabay-api.js).

3. Запусти дев-сервер:

   ```bash
   npm run dev
   ```

4. Продакшн-збірка (у теку `dist`):

   ```bash
   npm run build
   ```

## Структура

```
src/
├── css/
│   └── styles.css          # стилі сторінки та індикатора завантаження
├── img/
├── js/
│   ├── pixabay-api.js      # getImagesByQuery(query) — HTTP-запит
│   └── render-functions.js # createGallery, clearGallery, showLoader, hideLoader
├── index.html
└── main.js                 # уся логіка роботи застосунку
```

## Деплой

Пуш у гілку `main` запускає workflow
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), який збирає
проєкт і публікує теку `dist` на GitHub Pages.

> У налаштуваннях репозиторію: **Settings → Pages → Source → GitHub Actions**,
> а також **Settings → Actions → General → Workflow permissions → Read and
> write permissions**.
