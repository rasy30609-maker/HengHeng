from telegram import Update

from telegram.ext import ApplicationBuilder, CommandHandler, MessageHandler, ContextTypes, filters

import yt_dlp

import os

BOT_TOKEN = '7628196948:AAF_NYVWz1SGTew6ZYC2IonxjqJZ5ItK_-c'  # ប្ដូរជា Token ពិតរបស់អ្នក

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):

    await update.message.reply_text("សួស្តី! សូមផ្ញើលីងវីដេអូ TikTok មកខ្ញុំ។")

async def download_tiktok(update: Update, context: ContextTypes.DEFAULT_TYPE):

    url = update.message.text.strip()

    if "tiktok.com" not in url:

        await update.message.reply_text("សូមផ្ញើតែលីងវីដេអូពី TikTok ប៉ុណ្ណោះ។")

        return

    await update.message.reply_text("កំពុងទាញយកវីដេអូ TikTok...")

    try:

        ydl_opts = {

            'outtmpl': 'tiktok.%(ext)s',

            'format': 'mp4',

            'noplaylist': True,

        }

        with yt_dlp.YoutubeDL(ydl_opts) as ydl:

            info = ydl.extract_info(url, download=True)

            filename = ydl.prepare_filename(info)

        await update.message.reply_video(video=open(filename, 'rb'), caption="បង្កើតឡើងដោយ : @HENGHENG25")

        os.remove(filename)

    except Exception as e:

        await update.message.reply_text(f"បញ្ហាកើតឡើង: {str(e)}")

app = ApplicationBuilder().token(BOT_TOKEN).build()

app.add_handler(CommandHandler('start', start))

app.add_handler(MessageHandler(filters.TEXT & ~filters.COMMAND, download_tiktok))

if __name__ == '__main__':

    app.run_polling()
