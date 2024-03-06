<template>
    <div class="leftOne">
        <div class="top-title">
            <div class="text">
                多日预报
            </div>
            <div class="box">
                <div class="line"></div>
                <div class="circle"></div>
            </div>
        </div>
        <div id="leftOne">
        </div>
    </div>
</template>

<script>
export default {
    components: {},
    props:{
        city7dayTemp: {}
    },
    data() {
        return {
            max: [],
            min: [],
            xAxis: []
        }
    },
    computed: {},
    created() { },
    mounted() {
        this.initEcharts();
    },
    watch:{
        city7dayTemp: {
            handler(newValue, oldValue){
                this.initEcharts()
            },
            deep: true,
            immediate:true,
        }
    },
    methods: {
        async initEcharts() {
            this.max = this.city7dayTemp.max;
            this.min = this.city7dayTemp.min;
            this.xAxis = this.city7dayTemp.xAxis;
            // console.log(this.max,'111');
            let myCharts = this.$echarts.init(document.getElementById('leftOne'));
            let option = {
                textStyle:{
                    color: "#f0f8ff"
                },
                tooltip: {
                    trigger: 'axis'
                },
                color: ['#7cffb2', '#469f99'],
                legend: {},
                grid: {
                    top: '10%',
                    bottom: '30%',
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: this.xAxis,
                },
                yAxis: {
                    type: 'value',
                    axisLabel: {
                        formatter: '{value} °C'
                    },
                    splitLine: false
                },
                series: [
                    {
                        type: 'line',
                        data: this.max,
                        symbol: 'none',
                        areaStyle: {
                            color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: 'rgba(124, 255, 178,1)'
                                },
                                {
                                    offset: 1,
                                    color: 'rgb(124, 255, 178,0)'
                                }
                            ])
                        }
                    },
                    {
                        type: 'line',
                        data: this.min,
                        symbol: 'none',
                        areaStyle: {
                            opacity: 0.8,
                            color: this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: 'rgba(84, 198, 180,0)'
                                },
                                {
                                    offset: 1,
                                    color: 'rgb(84, 198, 180,1)'
                                }
                            ])
                        },
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
.leftOne {
    height: 100%;
    width: 100%;

    #leftOne {
        width: 95%;
        height: 75%;
        left: 3.5%;
        
    }
}
</style>
