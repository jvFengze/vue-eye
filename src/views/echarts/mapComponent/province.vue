<template>
    <div id="province"></div>
</template>
  
<script>
export default {
    name: "Province",
    props: {
        fileName: String,
        cityTempArr: Array
    },
    data() {
        return {
            option: {
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
                        '#f46d43',
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
                        name: "省份数据",
                        type: "map",
                        map: "province",
                        data: this.cityTempArr,
                    },
                ],
            },
        };
    },
    mounted() {
        this.initData();
    },
    methods: {
        initData() {
            try {
                const provinceJSON = require("../../geoData/provinceData/" +
                    this.fileName);
                const myChart = this.$echarts.init(
                    document.getElementById("province")
                );
                this.$echarts.registerMap("province", provinceJSON);
                myChart.setOption(this.option);
                myChart.on("click", (params) => {
                    (params.name,'11')
                    this.$emit('getReply',params.name)
                });
            } catch (e) {
                alert(`暂无${this.fileName}数据`);
                this.$emit("toMap");
            }
        },
    },
};
</script>
  
<style scoped lang="scss">
#province {
    height: 90%;
    width: 100%;
}
</style>