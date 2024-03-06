<template>
    <div class="middleOne">
        <div id="middleOne"></div>
    </div>
</template>

<script>
import chinaMap from '../geoData/china.json'
import {mapCom}from '../../api/data'
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
        this.initCharts()
    },
    methods: {
        async initCharts() {
            const data = await mapCom();
            console.log(data);
            this.list = data.data.data
            let myCharts = this.$echarts.init(document.getElementById('middleOne'));
            this.$echarts.registerMap('china', chinaMap)
            let option = {
                visualMap: {
                    inRange: {
                      color: [
                        '#313695',
                        '#4575b4',
                        '#74add1',
                        '#abd9e9',
                        '#e0f3f8',
                        '#ffffbf',
                        '#fee090',
                        '#fdae61',
                        '#d73027',
                        '#a50026'
                      ]},
                    min: 50,
                    max: -40,
                    left: "left",
                    top: "bottom",
                    text: ["高", "低"], // 文本，默认为数值文本
                    calculable: true,
                    left: "10%",                              //组件离容器左侧的距离,'left', 'center', 'right','20%'
                    top: '65%',
                    // 文字颜色
                    textStyle: {
                        color: '#fff'
                    }
                },

                tooltip: {
                    trigger: "item",
                },
                series: [
                    {
                        type: "map",
                        map: 'china', // 引入地图数据,
                        name: '省份天气温度',
                        data: this.list
//                         data: [
//     { name: '上海市', value: 8 },
//     { name: '云南省', value: 16 },
//     { name: '内蒙古自治区', value: -5 },
//     { name: '北京市', value: 0 },
//     { name: '台湾省', value: 15 },
//     { name: '吉林省', value: -7 },
//     { name: '四川省', value: 15 },
//     { name: '天津市', value: 2 },
//     { name: '宁夏回族自治区', value: 4 },
//     { name: '安徽省', value: 8 },
//     { name: '山东省', value: 6 },
//     { name: '山西省', value: 4 },
//     { name: '广东省', value: 23 },
//     { name: '广西壮族自治区', value: 21 },
//     { name: '新疆维吾尔族自治区', value: -13 },
//     { name: '江苏省', value: 7 },
//     { name: '江西省', value: 10 },
//     { name: '河北省', value: 0 },
//     { name: '河南省', value: 8 },
//     { name: '浙江省', value: 8 },
//     { name: '海南省', value: 24 },
//     { name: '湖北省', value: 11 },
//     { name: '湖南省', value: 10 },
//     { name: '澳门特别行政区', value: 20 },
//     { name: '甘肃省', value: 4 },
//     { name: '福建省', value: 13 },
//     { name: '西藏自治区', value: 5 },
//     { name: '贵州省', value: 11 },
//     { name: '辽宁省', value: -3 },
//     { name: '重庆省', value: 14 },
//     { name: '陕西省', value: 7 },
//     { name: '青海省', value: 3 },
//     { name: '香港特别行政区', value: 19 },
//     { name: '黑龙江省', value: -12 }
//   ]
                    },
                ],
            };
            myCharts.setOption(option);
            myCharts.on("click", (params) => {
                // console.log(params, params.name)
                this.$emit("toProvince", { fileName: params.name })
            }
            );
            window.addEventListener('resize', () => {
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
.middleOne {
    height: 90%;
    width: 100%;

    #middleOne {
        width: 100%;
        height: 100%;
    }
}
</style>
