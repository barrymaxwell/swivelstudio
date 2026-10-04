# Getting started — for Robin

> **Every time:** Pull first. Check it locally. Then commit and push.
> Anything you push to `main` goes live in about a minute.

---

## One-time setup (about 20 minutes)

1. **Accept the GitHub invite.** Barry sends it to your GitHub account. Open the email and click Accept.
2. **Install three apps:**
   - [GitHub Desktop](https://desktop.github.com) — saves and sends your changes.
   - [VS Code](https://code.visualstudio.com) — edits the files.
   - [Node.js](https://nodejs.org) — runs the site on your Mac. Pick the LTS version.
3. **Install pnpm.** Open Terminal and paste:

   ```bash
   npm install -g pnpm
   ```

   If it says "permission denied", run `sudo npm install -g pnpm` and enter your Mac password.
4. **Sign in to GitHub Desktop** with your GitHub account.
5. **Clone the site.** In GitHub Desktop: File → Clone Repository → pick `barrymaxwell/swivelstudio` → Clone. It lands in `Documents/GitHub/swivelstudio`.
6. **Install the site's parts.** In GitHub Desktop: Repository → Open in Terminal. Then:

   ```bash
   pnpm install
   ```

You're set up. You won't repeat these steps.

---

## Making a change

**1. Pull.** In GitHub Desktop, click **Fetch origin**, then **Pull origin** if it appears. This gets Barry's latest changes. Always do it first.

**2. Open the files.** Repository → Open in Visual Studio Code.

**3. Start the preview.** Repository → Open in Terminal, then:

```bash
pnpm dev -p 3100
```

Open http://localhost:3100 in your browser. The page updates when you save a file. Only you can see this.

**4. Edit and save.** Where things live:

| To change | Look in |
|---|---|
| Page text and layout | `app/` — each folder is a page (`about`, `contact`, `work`) |
| Images | `public/` |
| Shared pieces like the header and footer | `components/chrome.tsx` |
| Projects in the work grid | `lib/work.ts` |

**5. Commit.** Back in GitHub Desktop, your changed files show on the left. Type a short summary at the bottom left, like "Update about page bio". Click **Commit to main**.

**6. Push.** Click **Push origin**. The site rebuilds and goes live in about a minute.

When you're done, click in Terminal and press `Control + C` to stop the preview.

---

## If something goes wrong

- **"Pull before you push" or a conflict message.** You and Barry edited the same lines. Stop and text Barry. Nothing is lost.
- **The preview shows a red error.** Undo your last edit (`Cmd + Z`) and save. If it stays, ask Barry before pushing.
- **You want to throw away your changes.** In GitHub Desktop, right-click the file → Discard Changes.
- **You pushed something wrong.** The old version is still saved. Barry can roll it back in one click.
- **Ask Claude.** Open this folder in the Claude app and describe what you want in plain words. It can make the edit, preview it, and push it for you.
