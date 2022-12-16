<template>
  <div class="container">
    <div class="title">
      <dv-decoration-3 style="width:14%;height:30%;" />
      <dv-decoration-11 style="width:50%;height:70%;">Web前端作业-可视化大屏</dv-decoration-11>
      <dv-decoration-3 style="width:14%;height:30%;" />
    </div>
    <div class="element">
      <div class="left">
        <div class="left-one">
          <dv-border-box-12><leftOneVue></leftOneVue></dv-border-box-12>
        </div>
        <div class="left-two">
          <dv-border-box-12><leftTwoVue></leftTwoVue></dv-border-box-12>
        </div>
        <div class="left-three">
          <dv-border-box-12><leftThreeVue></leftThreeVue></dv-border-box-12>
        </div>
      </div>
      <div class="middle">
        <div class="middle-one">
          <dv-border-box-12>
            
          </dv-border-box-12>
        </div>
        <div class="middle-two">
          <dv-border-box-12>
          
          </dv-border-box-12>
        </div>
      </div>
      <div class="right">
        <div class="right-one">
          <dv-border-box-12><rightOneVue></rightOneVue></dv-border-box-12>
        </div>
        <div class="right-two">
          <dv-border-box-12><rightTwoVue></rightTwoVue></dv-border-box-12>
        </div>
        <div class="right-three">
          <dv-border-box-12><rightThreeVue></rightThreeVue></dv-border-box-12>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import leftOneVue from './echarts/leftOne.vue';
import leftTwoVue from './echarts/leftTwo.vue';
import leftThreeVue from './echarts/leftThree.vue';
import rightOneVue from './echarts/rightOne.vue';
import rightTwoVue from './echarts/rightTwo.vue';
import rightThreeVue from './echarts/rightThree.vue';
export default {
 components: {
    leftOneVue,
    leftTwoVue,
    leftThreeVue,
    rightOneVue,
    rightTwoVue,
    rightThreeVue
 },
 data() {
 return {
 }
 },
 computed: {},
 created () {},
 mounted () {},
 methods: {}
}
</script>

<style lang="scss" scoped>
.container{
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #111339;
  .title{
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: white;
    font-size: 27px;
  }
  .element{
    width: 100%;
    height: 90%;
    display: flex;
      .left {
        height: 100%;
        width: 25%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    
        &-one {
          height: 25%;
          width: 90%;
        }
    
        &-two {
          height: 25%;
          width: 90%;
        }
    
        &-three {
          height: 45%;
          width: 90%;
        }
      }
    
      .middle {
        width: 50%;
        height: 100%;
        display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
        &-one{
          width: 100%;
          height: 52%;
        }
        &-two{
          width: 100%;
          height: 45%;
        }
      }
    
      .right {
        height: 100%;
        width: 25%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    
        &-one {
          height: 25%;
          width: 90%;
        }
    
        &-two {
          height: 25%;
          width: 90%;
        }
    
        &-three {
          height: 45%;
          width: 90%;
        }
      }
  }
  
}
</style>