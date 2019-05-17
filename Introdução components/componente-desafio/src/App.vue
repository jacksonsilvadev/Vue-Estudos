<template>
  <v-app>
    <nav-bar></nav-bar>
    <tool-bar></tool-bar>
    <carousel></carousel>
    <footer></footer>
  </v-app>
</template>

<script>
import NavBar from "./NavBarComponent";
import ToolBar from "./ToolbarComponent";
import Carousel from "./CarouselComponent";
import Footer from "./FooterComponent";

export default {
  data() {
    return {};
  },
  components: {
    NavBar,
    ToolBar,
    Carousel,
    Footer
  }
};
</script>
