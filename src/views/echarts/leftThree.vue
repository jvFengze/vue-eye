<template>
    <div class="leftThree">
        <div class="top-title">
            <div class="text">
                空气质量
            </div>
            <div class="box">
                <div class="line"></div>
                <div class="circle"></div>
            </div>
        </div>
        <div style="position: relative; height: auto;">
            <div class="a">当 前 A Q I 指 数 为 {{cityAQI.number}}</div>
        </div>
        <div id="leftThree"></div>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            number: '',
            msg:''
        }
    },
    props:{
        cityAQI: {}
    },
    watch: {
        cityAQI: {
            handler(newValue, oldValue){
                this.initEcharts()
            }
        }
    },
    computed: {},
    created() {

    },
    mounted() {
        this.initEcharts();
    },
    methods: {
        async initEcharts() {
            this.number = this.cityAQI.number
            this.msg = this.cityAQI.msg
            let myCharts = this.$echarts.init(document.getElementById('leftThree'));
            let option = {
                series: [
                    {
                        type: 'gauge',
                        startAngle: 180,
                        endAngle: 0,
                        center: ['50%', '75%'],
                        radius: '100%',
                        min: 0,
                        max: 500,
                        splitNumber: 8,
                        axisLine: {
                            lineStyle: {
                                width: 4,
                                color: [
                                    [0.25, '#7CFFB2'],
                                    [0.5, '#58D9F9'],
                                    [0.75, '#FDDD60'],
                                    [1, '#FF6E76']
                                ]
                            }
                        },
                        pointer: {
                            icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
                            length: '12%',
                            width: 20,
                            offsetCenter: [0, '-60%'],
                            itemStyle: {
                                color: 'auto'
                            }
                        },
                        axisTick: {
                            length: 12,
                            lineStyle: {
                                color: 'auto',
                                width: 2
                            }
                        },
                        splitLine: {
                            length: 20,
                            lineStyle: {
                                color: 'auto',
                                width: 5
                            }
                        },
                        axisLabel: {
                            color: '#464646',
                            fontSize: 20,
                            distance: -60,
                            rotate: 'tangential',
                            formatter: function (value) {
                                if (value === 875) {
                                    return '';
                                } else if (value === 625) {
                                    return '';
                                } else if (value === 375) {
                                    return '';
                                } else if (value === 125) {
                                    return '';
                                }
                                return '';
                            }
                        },
                        title: {
                            offsetCenter: [0, '-10%'],
                            fontSize: 20
                        },
                        detail: {
                            fontSize: 30,
                            offsetCenter: [0, '-35%'],
                            valueAnimation: true,
                            // formatter: function (value) {
                            //     return Math.round(value * 100) + '';
                            // },
                            color: 'inherit'
                        },
                        data: [
                            {
                                value: this.number,
                                name: this.msg
                            }
                        ]
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

<style scoped lang="scss">
@import "../../assets/sass/index.scss";
</style>
<style lang="scss" scoped>
.leftThree {
    height: 100%;
    width: 100%;

    #leftThree {
        width: 100%;
        height: 75%;
    }
}
.a{
    font-size: 2vh;
    margin-top: 5%;
    color: aliceblue;
    position: absolute;
    left: 50%;
    top: 20%;
    transform: translate(-50%);
}
</style>
