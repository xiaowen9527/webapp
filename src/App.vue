<template>
  <div id="app">
    <keep-alive><router-view/></keep-alive>
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import FooterGuide from "@/components/FooterGuide/FooterGuide";
import { mapState } from "vuex";
export default {
  name: "App",
  components: {
    FooterGuide
  }
};
</script>

<style lang="stylus" scoped>
#app
    width 100%
    height 100%
    background #f5f5f5
</style>

