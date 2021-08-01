<template>
  <div class="home">
    <van-nav-bar title="标题" left-text="返回" right-text="按钮" left-arrow />

    <van-grid>
      <van-grid-item icon="photo-o" text="模态窗"  to = "/modal"/>
      <van-grid-item icon="photo-o" text="左滑删除" to = "/leftDelete"/>

      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
    </van-grid>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  components: {},
});
</script>
