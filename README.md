# Your Website — Easy Guide

## What is inside this folder

- `index.html` — your site (all pages: Home, About, CV, Blog, Contact)
- `css/style.css` — the design (colors, fonts)
- `js/main.js` — small code for the contact form

## Step 1: Change your real details

Open `index.html` and find these things. Change them to your real info:

1. **Email** — find `your.email@example.com` (2 places) and change to your real email
2. **Phone** — find `+371 00 000 000` and change to your real phone
3. **LinkedIn** — find `linkedin.com/in/yourprofile` and change to your real LinkedIn link
4. **Photo** — find `<span>Photo</span>` inside `photo-placeholder`. Later you can replace this whole box with a real `<img>` tag when you have a photo.

## Step 2: Make the contact form actually work

Right now, the form only shows a message on screen. It does NOT email you yet.

Easy free fix — use Formspree:

1. Go to formspree.io
2. Make free account
3. Make new form, copy your form's web link (looks like `https://formspree.io/f/xxxxxxx`)
4. In `index.html`, find this line:
   `<form class="contact-form" id="contactForm">`
5. Change it to:
   `<form class="contact-form" id="contactForm" action="https://formspree.io/f/xxxxxxx" method="POST">`
6. Now when someone sends the form, you get it in your email.

## Step 3: Put your CV PDF

Find this line in `index.html`:
`<a href="#" class="btn btn-primary cv-download">Download full CV (PDF)</a>`

Upload your real CV PDF file to your project folder (call it `cv.pdf`), then change `href="#"` to `href="cv.pdf"`.

## Step 4: Put site online (free)

1. Make free account at github.com
2. Make new repository, upload all these files (keep the folders: css, js)
3. Go to vercel.com
4. Sign in with GitHub
5. Click "Add New Project," choose your repository
6. Click "Deploy"
7. Wait 1-2 minutes
8. You get free link like `yourname.vercel.app` — open it in any browser, share with anyone

## Step 5: Add blog posts later

The Blog section has 3 example cards (not real posts yet). When you want to write real posts, tell me — I can help you turn each one into a real article page.

## Questions?

If something does not work, or you don't understand a step, just ask. I help you slowly, one step at a time.
