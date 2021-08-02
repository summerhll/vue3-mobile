<template>
  <div class="modal-wrapper">
    <van-nav-bar title="弹窗示例" left-text="首页"  left-arrow  @click-left = "goHome"/>
    <div class = "item">
        <van-button type="primary" @click = "showModal">显示弹窗</van-button>
    </div>
      <teleport to="body">
        <common-modal title = "弹窗" v-model= "isShow">
          <div class = "modal-content">弹窗内容</div>
        </common-modal>
      </teleport>
  </div>
</template>
<script lang="ts">
import  { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router'
import CommonModal from '../components/common-modal.vue'
export default  defineComponent({
  name: "modal",
  components: {
    CommonModal
  },

  setup(){
    let isShow = ref(false);
    const showModal = () => {
      isShow.value = true;
    };

   const router = useRouter();
    const goHome = () =>{
     router.push("/");
    }
    return {
      isShow,
      showModal,
      goHome
     
    }
  }

})
</script>

<style lang="less" scoped>
.modal-wrapper{
    .item{
        padding: 0.5rem;

    }
   

}

 .modal-content{
      font-size: 16Px;
      margin: 1rem;
    }

</style>
