# tiny-web

A React application built with Create React App and deployed using Cloudflare Pages.  
Live site: https://tinymiracle.life

---

## Local Development

Install dependencies:

```sh
npm install
```
Start the development server:
```
npm start
```
The app runs at:

http://localhost:3000

Changes are reloaded automatically.

⸻

Building for Production

Create the optimized build:
```
npm run build
```
The output is generated in the build/ directory.

⸻

Deployment

Deployment is handled through GitHub Actions CI so the team can collaborate, while the Cloudflare Pages project itself is connected to the maintainer’s Cloudflare account.

The CI workflow builds the project and publishes the contents of the build/ directory to Cloudflare Pages.

Manual deployment (for maintainers only):
```
npx wrangler pages deploy ./build --project-name=tiny-web
```
The live domain is:

https://tinymiracle.life


⸻

GitHub Actions

The repository includes an optional workflow under:
```
.github/workflows/deploy.yml
```
This workflow runs on every push to main and deploys the latest build to Cloudflare Pages using tokens stored in the repository secrets.

Required repository secrets:
	•	CLOUDFLARE_API_TOKEN
	•	CLOUDFLARE_ACCOUNT_ID
	•	CLOUDFLARE_PROJECT_NAME

⸻

Available Scripts

Additional scripts provided by Create React App:
	•	npm test — run tests in watch mode
	•	npm run eject — expose the underlying configuration (not reversible)

For more details, refer to the Create React App documentation.
