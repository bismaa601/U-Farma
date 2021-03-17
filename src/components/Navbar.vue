<template>
  <!-- Navigation menu -->
  <b-navbar toggleable="lg" type="dark" variant="info" style="position: fixed; z-index:10;" class="w-100">
    <b-navbar-brand to="/">U-Farmer</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <b-navbar-nav>
        <b-nav-item to="/">Home</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#">
          
          <b-badge pill variant="light">
           <b-icon icon="cart2" font-scale="2" variant="primary"></b-icon> 4
          </b-badge>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  
}
</script>


<style scoped>

</style>