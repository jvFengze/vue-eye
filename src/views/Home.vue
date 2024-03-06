<template>
  <div class="container">
    <div class="title">
      <dv-decoration-3 style="width:14%;height:30%;" />
      <dv-decoration-11 style="width:50%;height:70%;">气象观测可视化平台</dv-decoration-11>
      <dv-decoration-3 style="width:14%;height:30%;" />
    </div>
    <div class="element">
      <div class="left">
        <div class="left-one">
          <dv-border-box-12>
            <leftOneVue :city7dayTemp = "city7dayTemp"></leftOneVue>
          </dv-border-box-12>

        </div>
        <div class="left-two">
          <dv-border-box-12>
            <leftTwoVue :cityInfo = "cityInfo"></leftTwoVue>
          </dv-border-box-12>
        </div>
        <div class="left-three">
          <dv-border-box-12>
            <leftThreeVue :cityAQI = "cityAQI"></leftThreeVue>
          </dv-border-box-12>
        </div>
      </div>
      <div class="middle">
        <div class="middle-one">
          <dv-border-box-12>
            <provinceMap @getReply="getReply"></provinceMap>
          </dv-border-box-12>
        </div>
      </div>
      <div class="right">
        <div class="right-one">
          <dv-border-box-12>
            <rightOneVue :weather="weather"></rightOneVue>
          </dv-border-box-12>
        </div>
        <div class="right-two">
          <dv-border-box-12>
            <rightTwoVue :cityRain = "cityRain"></rightTwoVue>
          </dv-border-box-12>
        </div>
        <div class="right-three">
          <dv-border-box-12>
            <rightThreeVue :city7uvi ="city7uvi"></rightThreeVue>
          </dv-border-box-12>
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
// import middleOneVue from './echarts/middleOne.vue';
import middleTwoVue from './echarts/middleTwo.vue';
import provinceMap from './echarts/provinceMap.vue';
import axios from 'axios'
export default {
  components: {
    leftOneVue,
    leftTwoVue,
    leftThreeVue,
    rightOneVue,
    rightTwoVue,
    rightThreeVue,
    // middleOneVue,
    provinceMap,
    middleTwoVue
  },
  data() {
    return {
      regron: '东城区',
      weather:{},
      city7dayTemp:{},
      cityInfo: [],
      cityAQI:{},
      city7uvi:{},
      cityRain:{}
    }
  },
  computed: {},
  created() { },
  mounted() {
    this.getData()
  },
  watch:{
    regron:{
      handler(newValue, oldValue) {
        this.getData()
      }
    }
  },
  methods: {
    // 获取基本信息
    getData() {
      this.getWeather(),
      this.get7dayTemp(),
      this.getInfo(),
      this.getAQI(),
      this.get7uvi(),
      this.getRain()
    },
    // 天气情况
    async getWeather(){
      const data = await axios.get(`http://172.20.10.3:3000/getWeather?city=${this.regron}`);
      this.weather = data.data.data
    },
    // 温度预测
    async get7dayTemp(){
      const data = await axios.get(`http://172.20.10.3:3000/get7dayTempOfcity?city=${this.regron}`);
      this.city7dayTemp = data.data.data
    }, 
    // 天气指数
    async getInfo(){
      const data = await axios.get(`http://172.20.10.3:3000/get7InfoOfCity?city=${this.regron}`);
      this.cityInfo = data.data.data
    },
    // AQI指数
    async getAQI(){
      const data = await axios.get(`http://172.20.10.3:3000/getAQI?city=${this.regron}`);
      this.cityAQI = data.data.data
    },
    // 紫外线指数
    async get7uvi(){
      const data = await axios.get(`http://172.20.10.3:3000/get7uvi?city=${this.regron}`);
      this.city7uvi = data.data.data
    },
    // 降雨
    async getRain(){
      const data = await axios.get(`http://172.20.10.3:3000/getRain?city=${this.regron}`);
      this.cityRain = data.data.data
    }, 
    getReply(regron){
      this.regron = regron;
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #111339;

  .title {
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: white;
    font-size: 27px;
  }

  .element {
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

      &-one {
        width: 100%;
        height: 98%;
      }

      // &-two{
      //   width: 100%;
      //   height: 45%;
      // }
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

}</style>