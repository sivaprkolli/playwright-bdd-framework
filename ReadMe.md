 npm init playwright@latest
 npm i -D playwright-bdd
npm i -D @cucumber/cucumber@latest

npx playwright test

npx bddgen && npx playwright test

npx bddgen &&  npx playwright test --reporter=html --headed

npx playwright show-report