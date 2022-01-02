# Deployment
Add the following two lines to package.json to deploy the app to github pages
"homepage": "https://talktalkmake.github.io/jolly-edition-calculator/"
scripts > "deploy": "gh-pages -d build",
Deploy with 'npm run deploy'