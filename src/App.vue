<template>
  <div id="app">
    <Navbar />
    <router-view class="cs"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'app',
  components: {
    Navbar
  }
}
</script>

<style lang="css">
@import url(http://fonts.googleapis.com/earlyaccess/notonastaliqurdudraft.css);
  :root {
    --blue: #1e90ff;
    --white: #ffffff; 
  }

  *{
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  .urdu-font{
    font-family: 'Noto Nastaliq Urdu Draft', serif;
  }

  .text-center{
    text-align: center;
  }

  .shadow{
    box-shadow: 1px 1px 5px 5px rgba(53, 50, 50, 0.91);
  }

  .border{
    border: 1px solid black;
  }

  .flex-center{
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .content-section{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  #app{
    background: url('./../public/assets/bg.jpg') no-repeat;
    background-size: cover;
  }

  .cs{
    padding-top: 80px;
  }
</style>
