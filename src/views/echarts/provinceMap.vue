<template>
    <div class="echarts-box">
        <div class="top-title">
            <div class="text">
                温度概览
            </div>
            <div class="box">
                <div class="line"></div>
                <div class="circle"></div>
            </div>
        </div>
        <div>{{ this.time }}</div>
        <Province
        :cityTempArr = cityTempArr
        v-on="$listeners"
            v-if="showProvince"
            :fileName="fileName"
            @toMap="toMap"
        ></Province>
        <button v-if="showProvince" class="btn" @click="handleChange">返回</button>
        <Map v-else @toProvince="toProvince"></Map>
    </div>
</template>

<script>
import Province from "./mapComponent/province.vue";
import Map from "./middleOne.vue";
import axios from 'axios'
// import {cityTemp} from "../../api/data"
export default {
    name: "HelloWorld",
    components: {
        Province,
        Map,
    },
    data() {
        return {
            showProvince: false,
            fileName: null,
            time: '',
            cityTempArr: []
        };
    },
    methods: {
       // 显示省份数据
        async toProvince({ fileName } = {}) {
            this.fileName = fileName;
            const data = await axios.get(`http://172.20.10.3:3000/getAlltempOfProvince?province=${this.fileName}`);
            this.cityTempArr = data.data.data
            this.showProvince = true;
        },
      // 显示全国地图
        toMap() {
            this.showProvince = false;
        },
        handleChange() {
            this.$emit('getReply','东城区')
            this.showProvince = false;
        }
    },
};
</script>
<style scoped lang="scss">
    @import "../../assets/sass/index.scss";
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.echarts-box {
    height: 100%;
    width: 100%;
}
.btn {
    position: absolute;
    top: 50px;
    right: 30px;
    cursor: pointer;
    background: #3867d6;
    border: none;
    border-radius: 5px;
    height: 30px;
    width: 100px;
    color: #eeeeee;
}
.btn:hover {
    border: 1px solid #34e7e4;
}
</style>