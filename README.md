# Strategy with Areesha — SMM Resource Hub

A lightweight static SMM resource website built with HTML, CSS and vanilla JavaScript.

## Quick setup

Open `index.html` locally in a browser, or upload the whole folder to a GitHub repository.

## Replace Areesha's information

Edit `index.html` and replace all `[Add ...]` placeholders.

Edit `js/script.js` and update:

- `SITE_CONFIG.whatsapp`
- `SITE_CONFIG.email`
- `SITE_CONFIG.instagram` if needed

## Add a resource

1. Put the real file in the appropriate `resources/` folder.
2. Open `js/script.js`.
3. Add an object to the `resources` array.

Example:

```js
{
  title: "My New Resource",
  category: "Content",
  type: "PDF",
  description: "Short description.",
  file: "resources/content/my-new-resource.pdf",
  downloadable: true
}
```

## Deploy on GitHub Pages

GitHub Pages can publish static HTML/CSS/JavaScript directly from a repository.

1. Create a GitHub repository.
2. Upload this entire project.
3. Make sure `index.html` is in the published source.
4. Open repository Settings → Pages.
5. Select the publishing source and save.
6. Open the generated Pages URL.

See the official GitHub Pages documentation for current setup details:
https://docs.github.com/en/pages/getting-started-with-github-pages
