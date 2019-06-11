module.exports = {
  extends: "airbnb",
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "label-has-for": {
      required: {
        some: ["nesting", "id"],
      },
    },
    "import/prefer-default-export": "off",
    //quotes: ["backtick", { allowTemplateLiterals: true }],
  },
}
