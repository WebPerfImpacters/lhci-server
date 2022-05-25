module.exports = {
  ci: {
    collect: {
      startServerCommand: "npm start",
    },
    assert: {
      assertions: {
        "categories:performance": ["warn", { minScore: 0.8 }],
        "categories:seo": ["error", { minScore: 0.8 }],
        "categories:pwa": "off",
        "first-contentful-paint": ["warn", {"maxNumericValue": 2000}],
        "dom-size": ["error", {"maxNumericValue": 3000}],
        "resource-summary:script:size": ["warn", {"maxNumericValue": 300}],
        "resource-summary:third-party:count": ["warn", {"maxNumericValue": 5}],
      },
    }
  },
};
