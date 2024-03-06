<template>
  <div class="rightThree">
    <div class="top-title">
      <div class="text">
        紫外线指数
      </div>
      <div class="box">
        <div class="line"></div>
        <div class="circle"></div>
      </div>
    </div>
    <div id="rightThree">

    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      arr: [],
      xAxis: []
    }
  },
  props: {
    city7uvi: {}
  },
  watch: {
    city7uvi: {
      handler() {
        this.initCharts()
      },
      deep: true
    }
  },
  computed: {},
  created() { },
  mounted() {
    this.initCharts()
  },
  methods: {
    initCharts() {
      this.arr = this.city7uvi.arr;
      this.xAxis = this.city7uvi.xAxis
      let myCharts = this.$echarts.init(document.getElementById('rightThree'))
      let option = {
        textStyle: {
          color: "#f0f8ff"
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: this.xAxis
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: 'Line 5',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
              width: 0
            },
            showSymbol: false,
            label: {
              show: true,
              position: 'top'
            },
            areaStyle: {
              opacity: 0.8,
              color: this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgba(84, 198, 180,1)'
                },
                {
                  offset: 1,
                  color: 'rgb(84, 198, 180,0)'
                }
              ])
            },
            emphasis: {
              focus: 'series'
            },
            data: this.arr
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
@import '../../assets/sass/index.scss';
</style>
<style lang="scss" scoped>
.rightThree {
  height: 100%;
  width: 100%;
  position: relative;

  #rightThree {
    height: 80%;
    width: 100%;
    position: absolute;
    top: 10%;
  }
}
</style>
