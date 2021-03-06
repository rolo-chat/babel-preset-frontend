module.exports = () => ({
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "usage",
        corejs: 3,
        targets: "> 0.25%, not dead",
      },
    ],
    "@babel/preset-react",
  ],
  plugins: [
    [
      "module-resolver",
      {
        root: "src",
        alias: {
          lib: "lib",
          test: "test",
        },
      },
    ],
  ],
});
