<template>
  <div class="app">
    <!-- 1.区域header -->
    <area-header :title="highScore.title" :subtitle="highScore.subtitle"></area-header>

    <!-- 2.房间列表 -->
    <div class="room-list">
      <!-- 使用v-if，v-for一般使用template -->
      <template v-for="item in highScore.list" :key="item.id">
        <div class="room-item">
          <div class="item-inner">
            <div class="cover">
              <img :src="item.picture_url" alt="">
            </div>
            <div class="info">
              <div class="title">
                {{ "太麻烦了，待会说 TODO" }}
              </div>
              <div class="name">
                {{ item.name }}
              </div>
              <div class="price">
                {{ item.price_format + "/晚" }}
              </div>
              <div class="bottom-info">
                {{ item.bottom_info.content }}
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
  // 1.获取数据
  import highScore from "./data/high_score.json"
  // 导入header组件并传值
  import AreaHeader from './components/AreaHeader.vue'
  console.log(highScore);
</script>

<style lang="less" scoped>
  // 使用less需要下载 less-loader
  .app {
    width:1032px;
    padding: 40px;
    margin: 0 auto;

    .room-list {
      display: flex;
      flex-wrap: wrap;
      margin: 20px -8px;

      .room-item {
      width: 33.33333%;

      .item-inner {
        margin: 0 8px 12px;
        color: #484848;
        font-weight: 800;

        img {
          width: 100%;
          border-radius: 3px;
        }

        .info {
          .title {
            margin-top: 8px;
            font-size: 12px;
          }

          .name {
            margin-top: 3px;
            font-size: 16px;

            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }

          .price {
            margin: 3px 0;
            font-size: 14px;
            font-weight: 400;
          }
        }
      }
    }
    }
  }
</style>
