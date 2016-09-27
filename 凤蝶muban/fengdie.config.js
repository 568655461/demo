/**
 * 凤蝶模板包配置
 */

module.exports = {
  // 凤蝶模板包名称
  "title": "摩根产品宣传页",

  // 凤蝶服务器地址，一般默认为：
  // - 凤蝶开发环境为 http://fengdie-dev.alipay.net
  // - 凤蝶正式环境为 https://cmsmng.alipay.com
  // - 凤蝶金融云环境为 https://fengdie.mybank.cn
  // "registry": "https://cmsmng.alipay.com",
  // 包类型：
  // - template: 模板包
  // - data: 区块包
  "type": "template",

  // reload 默认为 false，表示在编辑活动内容时，只更新数据，不刷新页面。
  // 如果设置为 true，会刷新页面并且更新数据。当有些复杂的交互及展现是通过 js 绑定实现的，
  // 那么设此值为 true 就能实时并准确的预览。
  "reload": false,
  // 指定哪几个页面是控制器页面
  "controllers": [
    // 使用参考 https://site.alipay.net/fengdie/dev-guide/activity/velocity.html#controller-%E6%A8%A1%E5%BC%8F，比如：
    // "index.html"
  ]
};

