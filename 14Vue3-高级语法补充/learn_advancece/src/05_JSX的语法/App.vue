<!-- 在options API 中编写jsx -->
<!-- 指定语言 -->
<script lang="jsx">
  export default {
    render() {
      // 不再编写h()函数,而是编写jsx
      // 在js里面编写div，这就是jsx （jsx javascript extension 扩展）js扩展，可以在js编写html代码
      // 注意：这里return的是 （）
      return (
        <div class="app">
          <h2>我是标题</h2>
          <p>我是内容，哈哈哈</p>  
        </div>
      )
    }
  }
</script>

<style lang="less" scoped>

</style>