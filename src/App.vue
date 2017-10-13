<template>
  <div id="app" style="height:100%">
    <view-box ref="viewBox">
      <router-view></router-view>
      <tabbar slot="bottom">
        <tabbar-item :link="{path:'/'}" selected show-dot>
          <div class="home" slot="icon"></div>
          <span slot="label">首页</span>
        </tabbar-item>
        <tabbar-item :link="{path:'/explore'}" badge="2">
          <div class="explore" slot="icon"></div>
          <span slot="label">发现</span>
        </tabbar-item>
        <tabbar-item  :link="{path:'/mine'}">
          <div class="mine" slot="icon"></div>
          <span slot="label">我的</span>
        </tabbar-item>
      </tabbar>
    </view-box>
  </div>
</template>

<script>
  import { ViewBox, Tabbar, TabbarItem } from 'vux'
  export default {
    name: 'app',
    components: {
      ViewBox,
      Tabbar,
      TabbarItem
    }
  }
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';

  body {
    background-color: #fbf9fe;
  }

  html, body {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
  }

  .weui-tabbar__item {
    .weui-tabbar__icon{
      padding-left: 3px;
    }

    &.weui-bar__item_on {
      .weui-tabbar__label {
        span{
          color: #0092da;
        }
      }
    }

    .home {
      width: 24px;
      height: 24px;
      background: url("./assets/images/tab/application-off.png");
      background-size: contain;
    }
    &.weui-bar__item_on {
      .home {
        width: 24px;
        height: 24px;
        background: url("./assets/images/tab/application.png");
        background-size: contain;
      }
    }

    .message {
      width: 24px;
      height: 24px;
      background: url("./assets/images/tab/message-off.png");
      background-size: contain;
    }
    &.weui-bar__item_on {
      .message {
        width: 24px;
        height: 24px;
        background: url("./assets/images/tab/message.png");
        background-size: contain;
      }
    }

    .explore {
      width: 24px;
      height: 24px;
      background: url("./assets/images/tab/chart-off.png");
      background-size: contain;
    }
    &.weui-bar__item_on {
      .explore {
        width: 24px;
        height: 24px;
        background: url("./assets/images/tab/chart.png");
        background-size: contain;
      }
    }

    .mine {
      width: 24px;
      height: 24px;
      background: url("./assets/images/tab/mine-off.png");
      background-size: contain;
    }
    &.weui-bar__item_on {
      .mine {
        width: 24px;
        height: 24px;
        background: url("./assets/images/tab/mine.png");
        background-size: contain;
      }
    }
  }
</style>
