<template>
  <div class="leftThree">
    <div class="top-title">
        <div class="text">
            表单模板
        </div>
        <div class="box">
            <div class="line"></div>
            <div class="circle"></div>
        </div>
    </div>
    <dv-scroll-board :config="config" style="height:80%;width:90%;margin-left: 5%;"/>
  </div>
</template>

<script>
import { leftThree } from '../../api/data'
export default {
 components: {},
 data() {
 return {
     config: {},
 }
 },
 computed: {},
 created () {
    
 },
 mounted () {
     this.getData();
 },
 methods: {
     async getData() {
         const { data } = await leftThree();
        //  console.log(data.data.list);
         let headerData = data.list;
         this.config = {
             header: ['姓名', '地址', '年龄'],
             data: headerData,
             headerBGC: '#05365f',
             oddRowBGC: "#111339",
             evenRowBGC: '#111339',
             align: ['center','center','center']
         }
     }
 }
}
</script>

<style scoped lang="scss">
    @import "../../assets/sass/index.scss";
</style>
<style lang="scss" scoped>
.leftThree{
    height: 100%;
    width: 100%;
    // display: flex;
    // padding-bottom: 5px;
    // justify-content:center;
    // align-items: flex-end;
}
</style>
