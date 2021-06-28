<template>
  <keep-alive>
    <router-view v-if="$route.meta.keepAlive"></router-view>
  </keep-alive>
  <router-view></router-view>
</template>

<style lang="less">
@import "styles/index.less";

</style>
