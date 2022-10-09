<template>
  <div class="swipe" v-if="swipeData">
    <van-swipe class="swipe-list" :autoplay="3000" indicator-color="white">
      <template v-for="(item, index) in swipeData">
        <van-swipe-item class="item">
          <img :src="item.url" alt="">
        </van-swipe-item>
      </template>

      <!-- 自定义指示器，具名插槽 -->
      <!-- 子组件吧数据传过来，就是作用域插槽 -->
      <template #indicator="{ active, total }">
        <div class="indicator">
          <template v-for="(value, key, index) in swipeGroup" :key="key">
            <!-- 对象里的swipeData[active].enumPictureCategory一定是字符串，而key是数组，所以用两个==号 -->
            <span class="item" :class="{ active: swipeData[active]?.enumPictureCategory == key }">
              <span class="text">{{ getName(value[0].title) }}</span>
              <span class="count" v-if="swipeData[active]?.enumPictureCategory == key">
                {{getCategoryIndex(swipeData[active])}} / {{value.length}}
              </span>
            </span>
          </template>  
        </div>
      </template>
    </van-swipe>
  </div>
</template>

<script setup>
  import { watch } from "vue"
// 引入详情页store构造函数
import useDetailStore from "@/stores/modules/detail.js" 
import { storeToRefs } from "pinia"

const detailStore = useDetailStore()
// 拿到完整数据
const { swipeData } = storeToRefs(detailStore)
// 轮播图自定义指示器 
// 1.对数据进行转换
// 存储转换的数据
const swipeGroup = {}
// 循环拿到每条数据
const setData = () => {
  for(const item of swipeData.value) {
    // 根据区分的key值拿到对应的数据
    let valueArray = swipeGroup[item.enumPictureCategory]

    // 第一次可能取到undefined所以进行判断
    if (!valueArray) {
      valueArray = []
      // 把key对应的数组加入，对象中
      swipeGroup[item.enumPictureCategory] = valueArray
    }

    // // 把数据加到数组中
    valueArray.push(item)
  }
}
// 因为使用pinia保存数据，刷新后数据丢失，使用了插件pinia-plugin-persistedstate 解决数据丢失问题。但是刷新后轮播图的自定义指示器的数据找不到index。可能对象改变，但原来的值没有变。
// 所以重新执行数据处理逻辑解决问题
watch(swipeData, () => {
  setData()
},{
  immediate:true //立即执行
})



// 定义转换数据方法-去除 ：【 】
const nameReg = /【(.*?)】/i
const getName = (name) => {
  // return name.replace("：", "").replace("【", "").replace("】", "")
  const results = nameReg.exec(name)
  return results[1]
}

// 刷新页面时传进来的值，发送变化所以重新处理函数
const getCategoryIndex = (item) => {
  // 取到对应的数组
  let valueArray = swipeGroup[item.enumPictureCategory]
  return valueArray.findIndex(data => data === item) + 1
}
</script>

<style lang="less" scoped>
.swipe {
  .swipe-list{
    .item {
      img {
        width: 100%;
      }
    }

    .indicator {
      position: absolute;
      right: 5px;
      bottom: 5px;
      padding: 2px 5px;
      font-size: 12px;
      display: flex;
      color: #fff;
      background: rgba(0, 0, 0, 0.8);

      .item {
        margin: 0 3px;

        &.active {
          padding: 0 3px;
          background-color: #fff;
          color: #333;
          border-radius: 5px;
        }
      }
    }
  }
}
</style>