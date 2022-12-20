<template>
    <div class="rightThree">
        <div class="top-title">
            <div class="text">
                雷达图模板
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
     
    }
  },
  computed: {},
  created() { },
  mounted() {
    this.initCharts()
  },
  methods: {
    initCharts() {
          let myCharts = this.$echarts.init(document.getElementById('rightThree'))
      let option = {
          color: ['#67F9D8'],
        // legend: {
        //   data: ['abc', 'def']
        // },
        radar: {
        //   shape: 'circle',
            splitArea: {
                areaStyle: {
                    color: ['#111339'],
                    shadowColor: 'rgba(0, 0, 0, 0.2)',
                    shadowBlur: 10
                }
            },
          indicator: [
            { name: 'one', max: 6500 },
            { name: 'two', max: 16000 },
            { name: 'three', max: 30000 },
            { name: 'four', max: 38000 },
            { name: 'five', max: 52000 },
            { name: 'six', max: 25000 }
          ]
        },
        series: [
          {
            name: 'Budget vs spending',
            type: 'radar',
            data: [
              {
                value: [4200, 3000, 20000, 35000, 50000, 18000],
                name: 'abc',
                    areaStyle: {
                        color: new this.$echarts.graphic.RadialGradient(0.1, 0.6, 1, [
                            {
                                color: '#111339',
                                offset: 0
                            },
                            {
                                color: '#67F9D8',
                                offset: 1
                            }
                        ])
                    }
              },
              {
                value: [5000, 14000, 28000, 26000, 42000, 21000],
                name: 'def',
                  areaStyle: {
                      color: new this.$echarts.graphic.RadialGradient(0.1, 0.6, 1, [
                          {
                              color: '#111339',
                              offset: 0
                          },
                          {
                              color: '#67F9D8',
                              offset: 1
                          }
                      ])
                  }
              }
            ]
          }
        ]
      };
      myCharts.setOption(option);

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

    #rightThree {
        height: 80%;
        width: 100%;
    }
}
</style>
