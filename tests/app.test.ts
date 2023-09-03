import { test, expect } from '@playwright/test';

test('renders the greeting message and content is centered', async ({ page }) => {
  // Navigate to your application's URL
  await page.goto('http://localhost:3000'); // Adjust the URL as needed

  // Wait for the page to load and render
  await page.waitForSelector('h1');

  // Get the text content of the h1 element
  const greetingText = await page.textContent('h1');

  // Perform your test assertion for the greeting message
  expect(greetingText).toBe('Hello, Himeko.');

  // Check that the body element has the expected styles for centering
  const body = await page.$('body');
  const bodyStyles = await body?.evaluate((el) => {
    const { display, alignItems, justifyContent } = getComputedStyle(el);
    return { display, alignItems, justifyContent };
  });

  // Verify that the styles are as expected
  expect(bodyStyles?.display).toBe('flex');
  expect(bodyStyles?.alignItems).toBe('center');
  expect(bodyStyles?.justifyContent).toBe('center');

  // You can add more specific tests here as needed
});