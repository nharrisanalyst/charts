export default {
    webServer: {
      command: process.env.TYPE === "dev" ? "npx ladle serve" : "npm build",
      url: "http://localhost:61000",
    },
    testMatch: /.*\.spec\.ts/,
  };