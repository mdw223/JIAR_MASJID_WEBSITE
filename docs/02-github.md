# Connect your project to GitHub

GitHub stores your code and connects to Vercel for automatic deploys.

## 1. Create a GitHub account

Sign up at [github.com](https://github.com) if you don't have an account.

## 2. Create a new repository

1. Click **+** → **New repository**
2. Name it (e.g. `my-business-website`)
3. Choose **Private** or **Public**
4. Do **not** add README, .gitignore, or license (template already has them)
5. Click **Create repository**

## 3. Set up SSH (recommended)

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
cat ~/.ssh/id_ed25519.pub
```

Add the public key at **GitHub → Settings → SSH and GPG keys → New SSH key**.

## 4. Push your code

From your project folder:

```bash
git init
git add .
git commit -m "Initial commit from website template"
git branch -M main
git remote add origin git@github.com:YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

Replace `YOUR_USERNAME` and `YOUR_REPO` with your details.

## 5. Branch protection note

Some repos require changes through pull requests. If `git push` to `main` is rejected:

```bash
git checkout -b my-changes
git push -u origin my-changes
```

Then open a Pull Request on GitHub and merge it.

## HTTPS alternative

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
```

GitHub will prompt for credentials or a personal access token.

Next: [03-vercel.md](./03-vercel.md) to deploy on Vercel.
