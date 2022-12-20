<template>
  <div class="leftTwo">
    <div class="top-title">
        <div class="text">
            饼图模板
        </div>
        <div class="box">
            <div class="line"></div>
            <div class="circle"></div>
        </div>
    </div>
    <div id="leftTwo"></div>
  </div>
</template>

<script>
import { leftTwo } from '../../api/data'
export default {
 components: {},
 data() {
 return {
 }
 },
 computed: {},
 created () {},
 mounted () {
     this.initCharts();
 },
 methods: {
     async initCharts() {
         const {data} = await leftTwo();
         let list = data.list;
         let myCharts = this.$echarts.init(document.getElementById('leftTwo'));
         let option = {
             tooltip: {
                 trigger: 'item'
             },
            //  grid: {
            //      top: '50%',
            //      bottom: '30%',
            //  },
             label: {
                 color: 'auto'
             },
             color: ['#72ccff', '#87f7cf', '#f7f494', '#fc97af', '#f7c5a0', '#d4a4eb'],
             series: [
                 {
                     name: 'Access From',
                     type: 'pie',
                     radius: '65%',
                     data: list,
                     emphasis: {
                         itemStyle: {
                             shadowBlur: 10,
                             shadowOffsetX: 0,
                             shadowColor: 'rgba(0, 0, 0, 0.5)'
                         }
                     }
                 }
             ]
         };
         myCharts.setOption(option);
         window.addEventListener('resize', function() {
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
    .leftTwo{
        height: 100%;
        width: 100%;
        #leftTwo{
            height: 70%;
            width: 100%;
        }
    }
</style>
