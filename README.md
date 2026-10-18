# FLSRP Website Starter

This is the first frontend starter for the Florida State Roleplay portal homepage.

## Included
- Dark, responsive department selection homepage
- Your supplied department/dispatch logos
- Civilian icon cropped to exclude the text underneath
- Placeholder click dialogs so cards respond while backend work is pending

## Run locally
This is a static site. You can open `index.html` directly, or serve the folder with a local static server. For example, with Node installed:

```bash
npx serve .
```

## Important next step
This starter is **not yet connected** to Discord OAuth, the current Citizen Portal bot/database, department role checks, CAD records, or live dispatch. Those need to be integrated with your existing project rather than guessed. Do not put bot tokens or `.env` secrets in this folder or upload them publicly.

Once the current bot project is provided without `.env` or tokens, the next step is to connect this UI to the existing database and backend safely.
