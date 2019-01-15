<template>
  <div id="app" class="bodyset">
    <Topnav/>
    <Footer/>
  </div>
</template>

<script>
import Topnav from './components/Topnav.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'app',
  components: {
    Topnav,
    Footer
  }
}
</script>

<style>
.bodyset{
  background-color:rgb(233, 231, 233);
}

</style>
