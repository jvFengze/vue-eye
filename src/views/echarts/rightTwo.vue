<template>
  <div class="rightTwo">
    <div class="top-title">
      <div class="text">
        胶囊图模板
      </div>
      <div class="box">
        <div class="line"></div>
        <div class="circle"></div>
      </div>
    </div>
    <div id="rightTwo">
      <dv-capsule-chart :config="config" style="width:90%;height:90%" />
    </div>
  </div>
</template>

<script>
import { rightTwo } from "../../api/data"
export default {
  components: {},
  data() {
    return {
      config: {}
    }
  },
  computed: {},
  created() { },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      const { data } = await rightTwo();
      this.config = {
        data: data.list
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../../assets/sass/index.scss";
</style>

<style lang="scss" scoped>
.rightTwo {
  height: 100%;
  width: 100%;

  #rightTwo {
    margin-top: -10px;
    height: 80%;
    width: 100%;
    display: flex;
    justify-content: center;
  }
}
</style>