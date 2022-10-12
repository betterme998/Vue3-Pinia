<template>
  <div class="tab-control">
    <!-- 这里展示的东西不是写死的要父组件传递数据，所以用props接收 -->
    <!-- template 渲染出来后就不存在了 -->
    <!-- 当我们点击是会变成红色
        1.首先要记录他的状态，在data里面记录 
        2.动态绑定一个class-->

    <!-- 当我们点击标题后，下面响应的内容也要变，所以要发出自定义事件 -->
    <template v-for="(item, index) in titles" :key="item">
      <div class="tab-control-item"
           :class="{ active: index === currentIndex }"
           @click="itemClick(index)">
        <span>{{ item }}</span>
      </div>
    </template>
  </div>
</template>

<script>
  export default {
    props: {
      titles: {
        // 当类型是数组或对象时，默认值要通过对象返回
        type:Array,
        default: () => []
      }
    },
    data() {
      return {
        // 点击了那个
        currentIndex:0
      }
    },
    emits: ["tabItemClick"],
    methods: {
      itemClick(index) {
        this.currentIndex = index
        console.log(this.currentIndex);
        // 点击时发生自定义事件
        this.$emit("tabItemClick", index);
      }

    }
  }
</script>

<style lang="less" scoped>
  .tab-control{
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    background-color: #fff;
  }
  .tab-control-item{
    flex: 1;
  }
  .tab-control-item.active {
    color: var(--primary-color);
    font-weight: 700;
  }
  .tab-control-item.active span{
    border-bottom: 3px solid var(--primary-color);;
    padding: 8px;
  }
</style>