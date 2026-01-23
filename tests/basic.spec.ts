import { test, expect } from '@playwright/test';

test.describe('The Internet Herokuapp', () => {

    test.beforeEach(async ({ page }) => {
        // открываем главную страницу
        await page.goto('/');
    });

    test('Page title contains "the internet"', async ({ page }) => {
        // Проверка заголовка
        await expect(page).toHaveTitle(/the internet/i);
    });

    test('Navigation to Login Page', async ({ page }) => {
        // Выбираем форму аутентификации
        await page.getByText('Form Authentication').click();

        // Проверяем, что URL содержит /login
        await expect(page).toHaveURL(/.*login/);

        // Проверяем, что на странице есть текст "Login Page"
        await expect(page.getByRole('heading', { name: 'Login Page' })).toBeVisible();
    });
    test('Successful Login', async ({ page }) => {
        // 1. Переходим на страницу логина
        await page.goto('/login');

        // 2. Вводим логин и пароль
        await page.getByLabel('Username').fill('tomsmith');
        await page.getByLabel('Password').fill('SuperSecretPassword!');

        // 3. Нажимаем Login
        await page.getByRole('button', { name: /Login/i }).click();

        // 4. Проверяем результат
        // Сообщение имеет id="flash", проверим его видимость и текст
        const flashMessage = page.locator('#flash');
        await expect(flashMessage).toBeVisible();
        await expect(flashMessage).toContainText('You logged into a secure area!');
    });
});