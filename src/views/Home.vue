<template>
  <div class="home">
    <Content />
  </div>
</template>

<script>

// @ is an alias to /src
import Content from '../components/ContentSection';
import '../../public/assets/bg.jpg';
export default {
  name: 'Home',
  components: {
    Content
  }
}

</script>