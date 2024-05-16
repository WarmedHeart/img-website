module.exports = {
    extends: ["@commitlint/config-conventional"],
    rules: {
      "type-enum": [2, "always", ["feat", "fix", "revert", "styles", "docs", "test"]],
      "subject-max-length": [1, "always", 30],
    },
};