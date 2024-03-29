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
    [ 
      "@babel/preset-react", 
      { 
        runtime: "automatic" 
      },
    ],
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
