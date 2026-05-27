const configName = Cypress.env("configFile") || "qauto";
const envConfig = require(`../config/${configName}.config`);

Cypress.env("userEmail", envConfig.email);
Cypress.env("userPassword", envConfig.password);

Cypress.config("baseUrl", envConfig.baseUrl);

import "./commands";