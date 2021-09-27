<template>
 <van-nav-bar
      title="pulldown"
      left-text="首页"
      left-arrow
      @click-left="goHome"
    />
  
</template>

<script lang = "ts">
import { defineComponent } from "vue";
import { NavBar } from "vant";
import { useRouter} from "vue-router";

export default  defineComponent({
  name: "commonNav",
  components: {
    [NavBar.name]: NavBar,
  },
  setup() {
    const route = useRouter();
    const goHome = ()=>{
      route.push("/");
    }
    
    return {
      goHome
    }
    
  }

})
</script>

<style>

</style>