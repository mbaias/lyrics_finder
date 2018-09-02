module.exports = {
    "extends": [
        "airbnb",
        "prettier",
        "prettier/react",
        // "react/recommended"
    ],
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 8,
        "ecmaFeatures": {
            "impliedStrict": true,
            "classes": true,
            "jsx": true
        }
    },
    "env": {
        "browser": true,
        "node": true,
        "jquery": true,
        "jest": true
    },
    "rules": {
        "react/jsx-filename-extension": [
            1,
            {
                "extensions": [
                    ".js",
                    ".jsx"
                ]
            }
        ],
        "no-shadow": [
            2,
            {
              "hoist": "all",
              "allow": [
                "resolve",
                "reject",
                "done",
                "next",
                "err",
                "error"
              ]
            }
        ],
        "prettier/prettier": [
            "error",
            {
                "trailingComma": "es5",
                "singleQuote": true,
                "printWidth": 100
            }
        ],
        "linebreak-style": [0, "windows"],
        "no-console": 0,
        "quotes": [
            2,
            "single",
            {
                "avoidEscape": true,
                "allowTemplateLiterals": true
            }
        ],
        "react/destructuring-assignment": [1, "always"],
        "react/prop-types": 0
    },
    "plugins": [
        "prettier"
    ]
}