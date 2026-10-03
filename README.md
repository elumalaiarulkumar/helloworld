# Hello World: build a website and publish it

This repo is a small website made from three files. This guide explains how it works, how to change it, and how to put it online for free with **GitHub Pages**.

---

## Part 1: How a website works

A website is a set of files that a browser downloads and displays. Every site uses three languages:

| File | Language | Job | Analogy |
|------|----------|-----|---------|
| `index.html` | HTML | Content and structure | The skeleton |
| `style.css` | CSS | Colors, fonts, layout | The clothes |
| `script.js` | JavaScript | Interactivity | The muscles |

### HTML: tags that wrap content

```html
<h1>This is a big heading</h1>
<p>This is a paragraph.</p>
<a href="https://example.com">This is a link</a>
<img src="photo.jpg" alt="Description of the photo">
```

Most tags come in pairs, `<tag>` and `</tag>`. Tags you'll use often:
`h1`–`h6` (headings), `p` (paragraph), `a` (link), `img` (image), `ul`/`li` (list), `section`, `header`, `footer`, `button`.

### CSS: select something, then style it

```css
h1 {
  color: purple;
  font-size: 40px;
}
```

That rule says: "make every `<h1>` purple and 40px tall." You can select by tag (`h1`), by class (`.tagline` matches `class="tagline"`), or by id (`#year` matches `id="year"`).

### JavaScript: make things happen

```js
button.addEventListener("click", () => {
  output.textContent = "Hello!";
});
```

That code says: "when the button is clicked, change the text." Open `script.js` to see the full version.

---

## Part 2: Edit and preview on your computer

1. **Get a code editor.** [VS Code](https://code.visualstudio.com/) is free and popular.
2. **Download this repo.** On GitHub, click the green **Code** button, then **Download ZIP**, and unzip it. If you use git, run `git clone` instead.
3. **Open `index.html` in your browser.** Double-click it. You're looking at your website.
4. **Make a change.** In your editor, change `Hello, World!` in `index.html` to your name, save, and refresh the browser.
5. **Try a few more:**
   - Change `--accent` in `style.css` to `#e11d48` (red) or `#059669` (green).
   - Add a list item under "Things I'm learning."
   - Add an image: put `photo.jpg` in the folder, then add `<img src="photo.jpg" alt="Me">` to the HTML.

> **Tip:** In VS Code, the **Live Server** extension refreshes the browser every time you save.

**Debugging tip:** In the browser, right-click the page and choose **Inspect**. You'll see the HTML, and you can test CSS changes live. The **Console** tab shows JavaScript errors.

---

## Part 3: Publish it free with GitHub Pages

GitHub Pages hosts files from a repository and gives them a public URL like
`https://<your-username>.github.io/<repo-name>/`.

### Steps

1. **Push your files to GitHub.** This repo already has them.
2. On GitHub, open the repo and go to **Settings → Pages** (in the left sidebar).
3. Under **Build and deployment**:
   - **Source:** `Deploy from a branch`
   - **Branch:** choose the branch that has `index.html` (for example `main`), set the folder to `/ (root)`, and click **Save**.
4. Wait about a minute, then refresh the page. A banner will show your live URL:
   **`https://elumalaiarulkumar.github.io/helloworld/`**
5. Open it. Your site is now on the internet. 🎉

### Updating the live site

Change a file, then commit and push:

```bash
git add .
git commit -m "Update my homepage"
git push
```

GitHub Pages rebuilds automatically, usually within a minute. You can follow progress in the repo's **Actions** tab.

### Good to know

- **Free GitHub accounts need a public repo** to use Pages. Paid plans can publish from private repos.
- **The empty `.nojekyll` file** tells GitHub to serve your files exactly as they are, instead of running its Jekyll site generator on them.
- **The homepage must be named `index.html`.** Other pages can have any name, for example `about.html`, linked with `<a href="about.html">About</a>`.
- **Custom domain:** Buy a domain such as `yourname.com` from a registrar, then enter it under **Settings → Pages → Custom domain** and follow GitHub's DNS instructions.

---

## Part 4: Other places to host

The same three files work on any static host:

| Host | How to deploy |
|------|---------------|
| **GitHub Pages** | Covered above |
| **Netlify** | Drag the project folder onto [app.netlify.com/drop](https://app.netlify.com/drop) |
| **Vercel** | Import the GitHub repo at [vercel.com/new](https://vercel.com/new) |
| **Cloudflare Pages** | Connect the GitHub repo in the Cloudflare dashboard |

---

## Next steps

1. Add a second page (`about.html`) and link to it from the homepage.
2. Learn CSS **Flexbox** and **Grid** for layouts.
3. Work through the free [MDN "Getting started with the web"](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web) guide.
4. When you're comfortable, try a framework or site generator such as Astro, Next.js, or Hugo.
