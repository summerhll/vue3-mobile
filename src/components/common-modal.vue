<template>
  <div class="modal-outer-wrapper" v-show="isShow">
    <div class="modal-mask"></div>
    <transition name="bounce">
      <div class="modal-inner-wrapper">
        <div class="modal-header">
          <div class="title">
            {{ title }}
            <img
              src="//img.souche.com/f2e/f724f60a4d49c142ba326cb3c0ec3af0.png"
              @click="closeModal"
            />
          </div>
        </div>
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref, toRefs, watch } from "vue";

export default defineComponent({
  props: {
    isShow: {
      //弹窗是否显示
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "弹窗标题",
    },
  },
  emits: ["closeModal"],
  setup(props, context) {
    const { isShow } = toRefs(props);
    let scrollTop = ref(0);
    const closeModal = () => {
      context.emit("closeModal");
    };
    
    watch(isShow, (isShow) => {
      if (isShow) {
        document.body.style.position = "fixed";
        document.body.style.top = `-${scrollTop.value}px`;
        document.body.style.right = '0';
        document.body.style.left = '0';
      } else {
        document.body.style.top = '0';
        document.body.style.position = "static";
        document.documentElement.scrollTop = scrollTop.value;
        document.body.scrollTop= scrollTop.value;
      }

    
     const scrollEvent = () =>{
        scrollTop.value =document.documentElement.scrollTop || document.body.scrollTop;
     }
     
      onMounted(()=>{
           window.addEventListener('scroll', scrollEvent);
      });

      onUnmounted(()=>{
          window.removeEventListener('scroll', scrollEvent);
      });
    });

    return {
      closeModal,
      scrollTop
    };
  },
});
</script>

<style lang="less" scoped>
.modal-outer-wrapper {
  .modal-mask {
    position: fixed;
    width: 100vw;
    height: 100vh;
    left: 0;
    top: 0;
    background: black;
    opacity: 0.75;
    z-index: 1000;
  }

  .bounce-enter-active,
  .bounce-leave-active {
    transition: all 0.3s ease-in-out;
  }
  .bounce-enter,
  .bounce-leave-to {
    transform: translateY(100%);
  }

  .modal-inner-wrapper {
    position: fixed;
    z-index: 1006;
    bottom: 0;
    left: 0;
    width: 100%;
    box-sizing: border-box;
    background: #fff;
    min-height: 200px;
    .modal-header {
      position: relative;
      &:after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        background-color: #ebedf0;
        width: 100%;
        height: 1px;
        transform-origin: 0 0;
      }
    }
    .title {
      font-size: 16px;
      color: #1b1c33;
      text-align: center;
      padding: 22px 0 10px 0;
      position: relative;
      font-weight: bold;
      img {
        position: absolute;
        right: 16px;
        top: 22px;
        width: 16px;
        height: 16px;
      }
    }

    @media screen and (-webkit-min-device-pixel-ratio: 2) {
      .wrapper .header:after {
        -webkit-transform: scaleY(0.5);
        transform: scaleY(0.5);
      }
    }
    @media screen and (-webkit-min-device-pixel-ratio: 3) {
      .wrapper .header:after {
        -webkit-transform: scaleY(0.3333);
        transform: scaleY(0.3333);
      }
    }
  }
}
</style>