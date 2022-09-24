
  export const getAssetURL = (image) => {
    // img的src动态的，在vite下的处理
    // 传入原来地址的图片
    // URL第一个参数：相对路径
    // URL第二个参数：当前文件的url
    // vite当中必须要用url，和vite机制有关，
    // import.meta.url是当前文件夹（tab-bar.vue）的位置。根据当前文件的位置查找image返回超链接
    return new URL(`../assets/img/tabbar/${image}`, import.meta.url).href
  }

  