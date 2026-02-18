import { test, expect } from '@playwright/test';
import { loginData } from './loginData.js';

async function login(page: any, user: string, pass: string) {
    await page.goto('/login');
    await page.getByLabel('Username').fill(user);
    await page.getByLabel('Password').fill(pass);
    await page.getByRole('button').click();
}

// Данные для логина
// const loginData = [
//    { user: 'tomsmith', pass: 'SuperSecretPassword!', expected: 'secure area' },
//    { user: 'invalidUser', pass: 'invalidPass', expected: 'invalid' }
// ];

test.describe('Advanced Interactions and Data-Driven Tests', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test('Handle Checkboxes', async ({ page }) => {
        await page.goto('/checkboxes');
        const checkbox1 = page.getByRole('checkbox').first();
        const checkbox2 = page.getByRole('checkbox').last();

        await checkbox1.check();
        await expect(checkbox1).toBeChecked();

        await checkbox2.uncheck();
        await expect(checkbox2).not.toBeChecked();
    });

    test('Handle Dropdown', async ({ page }) => {
        await page.goto('/dropdown');
        const dropdown = page.locator('#dropdown');

        await dropdown.selectOption('1'); // значение
        await expect(dropdown).toHaveValue('1');

        await dropdown.selectOption({ label: 'Option 2' }); // текст
        const selectedOption = page.locator('#dropdown option[selected]');
        await expect(selectedOption).toHaveText('Option 2');
    });

    test('File Upload', async ({ page }) => {
        await page.goto('/upload');

        // путь
        await page.setInputFiles('#file-upload', 'example.txt');
        await page.getByRole('button', { name: 'Upload' }).click();

        await expect(page.locator('h3')).toHaveText('File Uploaded!');
        await expect(page.locator('#uploaded-files')).toContainText('example.txt');
    });

    test('Handle Modal', async ({ page }) => {
        await page.goto('/entry_ad');
        const modal = page.locator('.modal');
        await expect(modal).toBeVisible();
        await page.locator('.modal-footer p').click(); // Закрыть модалку
        await expect(modal).not.toBeVisible();
    });

    test('File Download', async ({ page }) => {
        await page.goto('/download');
        const downloadPromise = page.waitForEvent('download');
        await page.locator('text=some-file.txt').first().click();
        const download = await downloadPromise;
        expect(download.suggestedFilename()).toBe('some-file.txt');
    });


    for (const data of loginData) {
        test(`Data-Driven Login: ${data.user}`, async ({ page }) => {
            await login(page, data.user, data.pass);

            const message = page.locator('#flash');
            await expect(message).toContainText(data.expected);
        });
    }
});

