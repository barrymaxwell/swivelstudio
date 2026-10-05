# Getting started — for Robin

> **You don't need to learn git.** Tell Claude what to change. It shows you a preview, and nothing goes live until you say so.
> For a one-word typo, the github.com website is faster. See the end of this page.

---

## One-time setup

1. **Accept the GitHub invite** from your email.
2. **Install the Claude app** from [claude.ai/download](https://claude.ai/download) and sign in.
3. **Open the Code tab.** When it asks for a folder, choose `Documents`.
4. **Paste this:**

   ```
   I'm Robin. I've never used git, Terminal, or a code editor.
   Set me up to edit my website.

   - The code is at github.com/barrymaxwell/swivelstudio
   - My GitHub username is robinjmax
   - Put the site in Documents/swivelstudio

   Install whatever my Mac needs and sign me in to GitHub.
   Tell me before you install anything, in one plain sentence.
   When it's done, show me the site running on my Mac.
   ```

   Claude may ask for your Mac password or open GitHub in your browser to sign in. Both are normal.

5. **From now on, open the `swivelstudio` folder** in the Code tab. Not `Documents`.

---

## Making a change

Open the `swivelstudio` folder in the Code tab and say what you want. For example:

```
Change the first line of my About page to: …
```

```
Add this project to my work. The images are in Downloads/new-project.
Client: … Summary: …
```

```
The contact page looks crowded on my phone. Fix it.
```

Claude gets Barry's latest changes first, makes the edit, and shows you a preview. Say **"publish it"** when it looks right. It goes live in about a minute.

If you don't like it, say **"undo that"**.

---

## Quick fixes on github.com

For a typo or one sentence:

1. Go to [github.com/barrymaxwell/swivelstudio](https://github.com/barrymaxwell/swivelstudio).
2. Find the file. Page text is in `app/` (for example `app/about/page.tsx`). Project text is in `lib/work.ts`.
3. Click the pencil icon. Make the edit.
4. Click **Commit changes**, then **Commit changes** again.

It goes live in about a minute. You get no preview, so keep these edits small.

---

## If something goes wrong

- **Something looks broken on the live site.** Tell Claude "the last change broke the site, put it back." Or text Barry.
- **Claude mentions a "conflict."** You and Barry changed the same thing. Tell Claude to sort it out, or ask Barry.
- **Codex instead of Claude?** Same setup prompt and same requests. It follows the same rules.
