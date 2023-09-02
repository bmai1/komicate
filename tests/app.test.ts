import { test, expect } from '@playwright/test';

test('renders the greeting message', async ({ page }) => {
  // Navigate to your application's URL
  await page.goto('http://localhost:3000'); // Adjust the URL as needed

  // Wait for the page to load and render
  await page.waitForSelector('h1');

  // Get the text content of the h1 element
  const greetingText = await page.textContent('h1');

  // Perform your test assertion
  expect(greetingText).toBe('Hello, Himeko.');
});