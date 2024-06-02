<h1 align="center">CRM-frontend</h1>

<div align="center">
  <img alt="ESLint" src="https://img.shields.io/badge/ESLint-%234b32c3?style=flat&logo=eslint">
  <img alt="Prettier" src="https://img.shields.io/badge/Prettier-%233658a5?style=flat&logo=prettier">
</div>

## Описание

Клиентская часть CRM-системы.

Возможности:

- Регистрироваться в системе;
- Входить в систему и выходить из нее;
- Просматривать список клиентов;
- Фильтровать и сортировать клиентов;
- Получать данные конкретного клиента;
- Добавлять новых клиентов;
- Изменять и удалять записи клиентов.

## Запуск

**Примечание:** для полноценной работы требуется REST API сервер. Перейдите по
ссылке и следуйте инструкции по запуску.

1. Клонируйте репозиторий

   ```
   git clone https://github.com/daniilgrigorev01/crm-frontend.git &&
   cd crm-frontend
   ```

2. Установите зависимости

   ```
   pnpm install --frozen-lockfile
   ```

3. Соберите и запустите приложение

   ```
   pnpm run build &&
   pnpm run preview
   ```

4. Перейдите по ссылке

   ```
   http://localhost:3000
   ```

## Технологии

- [TypeScript](https://www.typescriptlang.org/)
- [Nuxt](https://nuxt.com/)
- [Pinia](https://pinia.vuejs.org/)
- [TailwindCSS](https://tailwindcss.com/)

## Лицензия

См. файл [LICENSE.md](LICENSE.md)
