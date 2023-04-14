module.exports = function (api) {
    api.cache(true);
    return {
        presets: ["babel-preset-expo"],
        plugins: [
            [
                "module-resolver",
                {
                    root: ["./src"],
                    extensions: [
                        ".js",
                        ".jsx",
                        ".ts",
                        ".tsx",
                        ".android.js",
                        ".android.tsx",
                        ".ios.js",
                        ".ios.tsx",
                    ],
                    alias: {
                        "*": ".",
                        "@root": "/src",
                        "@src": "./src",
                        "@assets": ".src/assets",
                        "@screens": "./src/screens",
                        "@components": "./src/components",
                        "@hooks": "./src/hooks",
                        "@styles": "./src/styles",
                        "@routes": "./src/routes",
                        "@utils": "./src/utils",
                    },
                },
            ],
        ],
    };
};
