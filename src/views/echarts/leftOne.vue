<template>
    <div class="leftOne">
        <div class="top-title">
            <div class="text">
                折线图模板
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
import { leftOne } from '../../api/data'
export default {
    components: {},
    data() {
        return {
            list: []
        }
    },
    computed: {},
    created() { },
    mounted() {
        this.initEcharts();
    },
    methods: {
        async initEcharts() {
            const { data } = await leftOne();
            data.list.forEach((item) => {
                this.list.push(item.number)
            })
            let myCharts = this.$echarts.init(document.getElementById('leftOne'));
            let option = {
                tooltip: {
                    show: true,
                    trigger: 'axis',
                    axisPointer: {
                        show: true,
                        type: 'line',
                        snap: true,
                        lineStyle: {
                            color: {
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [
                                    {
                                        offset: 0, color: '#45aaf2' // 0% 处的颜色
                                    },
                                    {
                                        offset: 0.5, color: 'white' // 50% 处的颜色
                                    },
                                    {
                                        offset: 1, color: '#45aaf2' // 100% 处的颜色
                                    }],
                            }
                        }
                    }
                },
                grid: {
                    top: '10%',
                    bottom: '30%',
                },
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#d1d8e0',
                        }
                    },
                    boundaryGap: false
                },
                yAxis: {
                    type: 'value',
                    show: true,
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#d1d8e0',
                        }
                    },
                    splitLine: {
                        show: false
                    },
                },
                series: [
                    {
                        data: this.list,
                        type: 'line',
                        showSymbol: false,
                        lineStyle: {
                            color: '#55E6C1',
                        },
                        itemStyle: {
                            color: '#55E6C1',
                        },
                        areaStyle: {
                            color: {
                                x: 0,
                                y: 1,
                                x2: 0,
                                y2: 0,
                                colorStops: [
                                    {
                                        offset: 0, color: '#111339', // 0% 处的颜色
                                    },
                                    {
                                        offset: 1, color: 'rgba(85, 230, 193,0.4)', // 100% 处的颜色
                                    }],
                            }
                        }
                    }
                ]
            }
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
        width: 100%;
        height: 75%;
    }
}
</style>
