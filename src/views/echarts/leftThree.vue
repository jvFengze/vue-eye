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
export default {
 components: {},
 data() {
 return {
     config: {
         header: ['列1', '列2', '列3'],
         data: [
             ['行1列1', '行1列2', '行1列3'],
             ['行2列1', '行2列2', '行2列3'],
             ['行3列1', '行3列2', '行3列3'],
             ['行4列1', '行4列2', '行4列3'],
             ['行5列1', '行5列2', '行5列3'],
             ['行6列1', '行6列2', '行6列3'],
             ['行7列1', '行7列2', '行7列3'],
             ['行8列1', '行8列2', '行8列3'],
             ['行9列1', '行9列2', '行9列3'],
             ['行10列1', '行10列2', '行10列3']
         ],
         headerBGC: '#05365f',
         oddRowBGC:"#111339",
         evenRowBGC: '#111339'
     },
 }
 },
 computed: {},
 created () {},
 mounted () {},
 methods: {}
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
