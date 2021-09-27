<template>
  <div class="pull-down-wrapper">
    <van-nav-bar
      title="pulldown"
      left-text="首页"
      left-arrow
      @click-left="goHome"
    />
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list
        class="pull-down-list"
        v-model:loading="loading"
        :finished="finished"
        finished-text="没有更多了"
        :immediate-check="false"
        @load="onLoad"
      >
        <van-cell v-for="item in list" :key="item" :title="item" />
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script lang = "ts">
/** 下拉加载 下拉刷新页面 */
import { defineComponent, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { PullRefresh, List, Cell } from "vant";

export default defineComponent({
  name: "carCard",
  components: {
    [PullRefresh.name]: PullRefresh,
    [List.name]: List,
    [Cell.name]: Cell,
  },
  setup() {
    const router = useRouter();
    const goHome = () => {
      router.push("/");
    };

    let refreshing = ref(false);
    const list = ref<Array<number>>([]);
    const loading = ref(false);
    const finished = ref(false);


    const onRefresh = () => {
      // 清空列表数据
      finished.value = false;

      // 重新加载数据 将 loading 设置为 true，表示处于加载状态
      loading.value = true;
      onLoad();
    };

    //问题：初始化的时候onLoad事件加载了两次？
    //解决：设置immediate-check为false，并且在mounted生命周期中获取数据
    const onLoad = () => {
      console.log("onLoad111");
      // 异步更新数据 使用setTimeot模拟
      setTimeout(() => {
        if (refreshing.value) {
          //重置数据
          list.value = [];
          refreshing.value = false;
          finished.value = false;
        }
        for (let i = 0; i < 20; i++) {
          list.value.push(list.value.length + 1);
        }

        // 加载状态结束
        loading.value = false;

        // 数据全部加载完成
        if (list.value.length >= 60) {
          finished.value = true;
        }
      }, 1000);
    };

    onMounted(() => {
      onLoad();
    });


    return {
      goHome,
      refreshing,
      onRefresh,

      list,
      loading,
      finished,
      onLoad,
    };
  },
});
</script>
    
<style lang="less" scoped>
.pull-down-wrapper {
}
</style>