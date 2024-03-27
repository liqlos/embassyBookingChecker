import { test, expect } from '@playwright/test';
import TelegramBot from 'node-telegram-bot-api';
import dotenv from 'dotenv';
dotenv.config();

const TELEGRAM_TOKEN: string | undefined = process.env.TELEGRAM_TOKEN;
const CHAT_ID: string | undefined = process.env.CHAT_ID;
const EMBASSY_EMAIL: string | undefined = process.env.EMBASSY_EMAIL;
const EMBASSY_PASSWORD: string | undefined = process.env.EMBASSY_PASSWORD;

const bot = new TelegramBot(TELEGRAM_TOKEN);

function sendTelegramMessage(message: string): void {
   bot.sendMessage(CHAT_ID, message);
}

test.use({ headless: true });
    
test('has appointments', async ({ page }) => {
  await page.goto('https://prenotami.esteri.it');

  await page.getByRole('textbox', { name: 'Email' }).fill(EMBASSY_EMAIL);
  await page.getByRole('textbox', { name: 'Password' }).fill(EMBASSY_PASSWORD);
  await page.getByRole('button', { name: 'AVANTI' }).click();


  await page.goto('https://prenotami.esteri.it/Services/Booking/1251');
  await expect(page).toHaveURL('https://prenotami.esteri.it/Services/Booking/1251')

  sendTelegramMessage("Hey! Check the embassy booking quickly https://prenotami.esteri.it/Services/Booking/1251 🟢");

  await page.goto('https://prenotami.esteri.it/Services/Booking/1258');
  await expect(page).toHaveURL('https://prenotami.esteri.it/Services/Booking/1258')

  sendTelegramMessage("Hey! Check the embassy booking quickly https://prenotami.esteri.it/Services/Booking/1258 🟢");
});
