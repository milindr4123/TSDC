const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const createEsbuildPlugin = require ("@badeball/cypress-cucumber-preprocessor/esbuild");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");
const webpack = require('@cypress/webpack-preprocessor');

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/features/*.feature",
    baseUrl: "http://localhost:2368/ghost/#/signin",
    setupNodeEvents: async function (on, config) {
        await preprocessor.addCucumberPreprocessorPlugin(on, config);
        on(
            'file:preprocessor',
            webpack({
                webpackOptions: {
                    resolve: { extensions: ['.ts', '.js'] },
                    module: {
                        rules: [
                            {
                                test: /\.feature$/,
                                use: [
                                    {
                                        loader: '@badeball/cypress-cucumber-preprocessor/webpack',
                                        options: config
                                    }
                                ]
                            }
                        ]
                    }
                }
            })
        );

        allureWriter(on, config);
        on('task', {
            readAllureResults: () => {
                try {
                    const dir = 'cypress/fixtures';
                    const subdirs = ['basic', 'cucumber', 'statuses'];
                    return subdirs.reduce((dirMap, subdir) => {
                        const dirFiles = fs.readdirSync(
                            path.join(dir, subdir)
                        );
                        dirMap[subdir] = dirFiles.reduce((fileMap, f) => {
                            const getType = (file) => {
                                const types = {
                                    suites: (f) => f.includes('-container'),
                                    tests: (f) => f.includes('-result'),
                                    attachments: (f) =>
                                        f.includes('-attachment')
                                };
                                return Object.keys(types).find((type) =>
                                    types[type](file)
                                );
                            };

                            const resultType = getType(f);

                            const fileContent = fs.readFileSync(
                                path.join(dir, subdir, f),
                                {
                                    encoding: 'utf-8'
                                }
                            );

                            const fileValue = f.endsWith('.json')
                                ? {
                                      ...JSON.parse(fileContent),
                                      fileName: f
                                  }
                                : {
                                      content: fileContent.substr(0, 20),
                                      fileName: f
                                  };

                            !fileMap[resultType] &&
                                (fileMap[resultType] = []);

                            fileMap[resultType].push(fileValue);
                            return fileMap;
                        }, {});
                        return dirMap;
                    }, {});
                } catch (e) {
                    return e;
                }
            }
        });
        return config;
    },
    env: {
      allureReuseAfterSpec: true,
    },
  },
});
