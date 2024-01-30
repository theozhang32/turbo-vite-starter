/*
 * @Author: 张天昊
 * @Date: 2024-01-30 09:46:44
 * @LastEditTime: 2024-01-30 09:46:45
 * @LastEditors: 张天昊
 * @Description: 
 * @FilePath: /turbo-vite-starter/packages/config-unocss/.eslintrc.cjs
 */
/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  ignorePatterns: [".eslintrc.cjs"],
  extends: ["@repo/eslint-config/index.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true
  }
};
