<template>
    <div class="rightOne">
        <div class="top-title">
            <div class="text">
                柱状图模板
            </div>
            <div class="box">
                <div class="line"></div>
                <div class="circle"></div>
            </div>
        </div>
        <div id="rightOne"></div>
    </div>
</template>

<script>
import { rightOne } from '../../api/data'
export default {
    components: {},
    data() {
        return {
        }
    },
    computed: {},
    created() { },
    mounted() {
        this.initCharts();
    },
    methods: {
        async initCharts() {
            const { data } = await rightOne();
            let mycharts = this.$echarts.init(document.getElementById('rightOne'));
            let option = {
                grid:{
                    top:'10%',
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
                },
                yAxis: {
                    type: 'value',
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
                        data: data.list,
                        type: 'bar',
                        barWidth: '60%',
                        itemStyle:{
                            color: {
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset: 0, color: '#37a2da' // 0% 处的颜色
                                }, {
                                    offset: 1, color: '#35e0e3' // 100% 处的颜色
                                }],
                            }
                        }
                    }
                ]
            }
            mycharts.setOption(option)
            window.addEventListener('resize', function () {
                mycharts.resize()
            })
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/sass/index.scss';
</style>
<style lang="scss" scoped>
.rightOne {
    height: 100%;
    width: 100%;

    #rightOne {
        height: 80%;
        width: 100%;
    }
}
</style>
