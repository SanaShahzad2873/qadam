# Qadam — by Sana Shahzad

A cinematic, story-led website for the Qadam khussa brand — now with your real logo and 3D khussa model integrated.

## ⚠️ Why double-clicking index.html shows nothing

This is a React + Vite project, not a plain static site. `index.html` loads `/src/main.jsx` as an ES module and expects a dev server to compile it on the fly. Opening the file directly (`file://...`) blocks module loading and you'll see a blank page — that's expected, not a bug. You must run it through a server (see below).

## Run it locally

1. Install [Node.js](https://nodejs.org) (v18 or newer) if you don't have it.
2. Open a terminal in this folder and run:

```bash
npm install
npm run dev
```

3. Open the URL it prints (usually `http://localhost:5173`) in your browser.

That's it — you do NOT open `index.html` directly, ever, for this project.

## Your assets

- **Logo**: your uploaded logo is at `src/assets/logo.png`, used in the Navbar, the intro screen, and as the favicon.
- **3D model**: your uploaded `.glb` was compressed from 56.8 MB → 1.95 MB (Draco compression, no visible quality loss) and placed at `public/models/khussa.glb`. It's auto-centered and auto-scaled in `src/components/Khussa3D.jsx`, so it should appear correctly sized regardless of how it was originally modeled. If it looks off, adjust the `1.6` target-size number in that file.

## WhatsApp ordering

The Order page (`src/pages/Order.jsx` + `src/components/WhatsAppOrderForm.jsx`) builds a pre-filled message and opens:

```
https://wa.me/923123207029
```

To change the number, edit `WHATSAPP_NUMBER` in `src/components/WhatsAppOrderForm.jsx`, and the links in `src/components/Footer.jsx` and `src/pages/Contact.jsx`.

## Structure

```
src/
  assets/       logo.png
  components/   Navbar, Footer, IntroScreen, Khussa3D, DustParticles, WhatsAppOrderForm
  pages/        Home, OurStory, TheCraft, Collections, MadeForYou, Order, Journal, Contact
  index.css     design tokens (colors, fonts) + animations
public/
  models/khussa.glb   your compressed 3D model
  favicon.png         your logo, used as favicon
```

## Design tokens

| Token   | Hex       |
|---------|-----------|
| ink     | #0B0B0B   |
| gold    | #C8A35D   |
| cream   | #F8F4ED   |
| brown   | #5A4635   |

Fonts: Playfair Display / Cinzel (display), Cormorant Garamond (body/Urdu poetry), Poppins (UI labels).

## Deploying it for real (so it's a live website)

Running it locally only shows it on your own computer. To get a real link you can share:

1. Run `npm run build` — this creates a `dist/` folder with the finished site.
2. Upload that `dist/` folder to a free static host like [Netlify](https://netlify.com) (drag-and-drop the folder onto their dashboard) or [Vercel](https://vercel.com).
3. You'll get a live URL like `qadam.netlify.app` you can share or later point a custom domain (e.g. `qadam.pk`) at.

## Still to do

- Replace collection card placeholders with real product photography
- Connect the Instagram/TikTok links in Footer.jsx and Contact.jsx to your real profiles
- Write real Journal (blog) posts to replace the placeholder excerpts
- If you get more khussa models later, duplicate the Collections cards to link to their own product pages with their own 3D views

