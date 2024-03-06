<template>
  <div class="rightTwo">
    <div class="top-title">
      <div class="text">
        降水概率
      </div>
      <div class="box">
        <div class="line"></div>
        <div class="circle"></div>
      </div>
    </div>
    <div id="rightTwo">
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
     arr:[],
     xAxis:[] 
    }
  },
  props:{
    cityRain:{}
  },
  computed: {},
  created() { },
  watch:{
    cityRain:{
      handler(){
        this.getData()
      }
    }
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      this.arr = this.cityRain.arr;
      this.xAxis = this.cityRain.xAxis
      let myCharts = this.$echarts.init(document.getElementById('rightTwo'));
      let option = {
        textStyle:{
                    color: "#f0f8ff"
                },
        grid: {
          top: '10%',
          bottom: '30%',
        },
        xAxis: {
          type: 'category',
          data: this.xAxis
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: this.arr,
            type: 'bar',
            // showBackground: true,
            backgroundStyle: {
              color: 'rgba(180, 180, 180, 0.2)'
            }
          }
        ]
      };
      myCharts.setOption(option);
      window.addEventListener('resize', function () {
        myCharts.resize();
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../../assets/sass/index.scss";
</style>

<style lang="scss" scoped>
.rightTwo {
  height: 100%;
  width: 100%;

  #rightTwo {
    margin-top: -10px;
    height: 80%;
    width: 100%;
    display: flex;
    justify-content: center;
  }
}
</style>