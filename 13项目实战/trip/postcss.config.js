// postcss.config.js
// px转vw
module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      viewportWidth: 375,
      // 不需要转的黑名单
      selectorBlackList: ["favor"]
    },
  },
};