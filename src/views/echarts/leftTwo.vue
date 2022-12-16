<template>
  <div class="leftTwo">
    <div class="top-title">
        <div class="text">
            折线图模板
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
     initCharts() {
         let myCharts = this.$echarts.init(document.getElementById('leftTwo'));
         let option = {
             tooltip: {
                 trigger: 'item'
             },
             label: {
                 color: 'auto'
             },
             color: ['#72ccff', '#87f7cf', '#f7f494', '#fc97af', '#f7c5a0', '#d4a4eb'],
             series: [
                 {
                     name: 'Access From',
                     type: 'pie',
                     radius: '80%',
                     data: [
                         { value: 1048, name: 'Search Engine'},
                         { value: 735, name: 'Direct' },
                         { value: 580, name: 'Email' },
                         { value: 484, name: 'Union Ads' },
                         { value: 300, name: 'Video Ads' }
                     ],
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
            height: 60%;
            width: 100%;
        }
    }
</style>
