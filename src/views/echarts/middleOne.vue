<template>
  <div class="middleOne">
    <div class="top-title">
        <div class="text">
            热力图模板
        </div>
        <div class="box">
            <div class="line"></div>
            <div class="circle"></div>
        </div>
    </div>
    <div id="middleOne"></div>
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
 created () {},
 mounted () {
     this.initCharts()
 },
 methods: {
     initCharts() {
         let myCharts = this.$echarts.init(document.getElementById('middleOne'));
         var hours = [
             "column1",
             "column2",
             "column3",
             "column4",
             "column5",
             "column6",
             "column7",
             "column8",
             "column9",
             "column10",
             "column11",
             "column12",
         ];
        let row = ["row1", "row2", "row3", "row4", "row5"];
        let data = [];
        for(let i = 0; i <= 11; i++) {
            for( let j = 0; j <=4; j++){
                data.push([i, j, Math.trunc(Math.random() * 70)])
            }
        }
         let option = {
            //  tooltip: {
            //      position: "top",
            //  },
             animation: false,
             grid: {
                 height: "70%",
                 top: "2%",
             },
             xAxis: {
                 type: "category",
                 data: hours,
                 splitArea: {
                     show: true,
                 },
                 axisTick: {
                     lineStyle: {
                         color: "#c4c4c4",
                     },
                 },
                 axisLine: {
                     show: true,
                     lineStyle: {
                         color: '#d1d8e0',
                     }
                 },
             },
             yAxis: {
                 type: "category",
                 data: row,
                 splitArea: {
                     show: true,
                 },
                 axisTick: {
                     show: false,
                 },
                 axisLine: {
                     show: true,
                     lineStyle: {
                         color: '#d1d8e0',
                     }
                 },
             },
             visualMap: {
                 min: 0,
                 max: 70,
                 calculable: true,
                 orient: "horizontal",
                 left: "center",
                 bottom: "10%",
                 color: ["#0d59b7", "#18dcff"],
                 textStyle:{
                     color: '#d1d8e0'
                 }
             },
             series: [
                 {
                     name: "",
                     type: "heatmap",
                     data: data,
                     label: {
                         show: true,
                     },
                     emphasis: {
                         itemStyle: {
                             shadowBlur: 10,
                             shadowColor: "rgba(0, 0, 0, 0.5)",
                         },
                     },
                 },
             ],
         };
         myCharts.setOption(option)
     }
 }
}
</script>
<style lang="scss" scoped>
    @import '../../assets/sass/index.scss';
</style>
<style lang="scss" scoped>
.middleOne{
    height: 100%;
    width: 100%;
    #middleOne{
        width: 100%;
        height: 90%;
    }
}
</style>
