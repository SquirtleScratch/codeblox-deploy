A lit of things to fix:

  1. Fix playwright test so that it doesn't fail in deployment.
    - && npm run test:playwright   (add to npm run dev:test)


 1   In .github/workflows/deploy.yaml check relative/explicit path to deploy.sh

  2 do to dockerfile

  3.  path checking;

  path.dirname(process.mainModule.filename);

  const path = require('path');

module.exports = path.dirname(process.mainModule.filename);


eb logs -all --instance i-0e5333ac3725d6f72 codeblox-production-env