<template>
    <div class="middleTwo">
        <div class="top-title">
            <div class="text">
                环形图模板
            </div>
            <div class="box">
                <div class="line"></div>
                <div class="circle"></div>
            </div>
        </div>
        <div class="circularGraph">
            <div><dv-active-ring-chart :config="config1" style="width:100%;height:100%" /></div>
            <div><dv-active-ring-chart :config="config2" style="width:100%;height:100%" /></div>
            <div><dv-active-ring-chart :config="config3" style="width:100%;height:100%" /></div>
            <div><dv-active-ring-chart :config="config4" style="width:100%;height:100%" /></div>
        </div>
    </div>
</template>

<script>
import { middleTwo } from '../../api/data'
export default {
    components: {},
    data() {
        return {
            config1: {},
            config2: {},
            config3: {},
            config4: {},
        }
    },
    computed: {},
    created() { },
    mounted() {
        this.getData();
    },
    methods: {
        async getData() {
            const { data } = await middleTwo();
            console.log(data);
            this.config1 = {
                data: data.list1,
                // color: data.color1
            },
            this.config2 = {
                data: data.list2,
                // color: data.color2
            }
            this.config3 = {
                data: data.list3,
                // color: data.color3
            }
            this.config4 = {
                data: data.list4,
                // color: data.color4
            }
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../../assets/sass/index.scss';
</style>
<style lang="scss" scoped>
.middleTwo {
    height: 100%;
    width: 100%;

    .circularGraph {
        height: 80%;
        width: 100%;
        display: flex;
        // display: grid;
        // grid-template-columns: auto auto auto auto;
        // background-color: #fff;
    }
}

.circularGraph>div {
    width: 25%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
