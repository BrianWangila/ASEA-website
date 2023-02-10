<template>
  <main>
      <div class="main">
        <div>
          <SideMenu />
        </div>

        <div class="dashboard">
          <div class="title">
            <h3>Dashboard</h3>
            <div>
              <p>Home / <span style="font-weight: 500">Dashboard</span></p>
            </div>
          </div>

          <div>
            <Footer />
          </div>
        </div>
      </div>
  </main>

  
</template>



<script>
  import Footer from './Footer.vue'
  import SideMenu from './SideMenu.vue'

  export default {
    name: "HomePage",
    components: {
      SideMenu,
        Footer,
    }
  }

</script>



<style scoped>

  main {
    height: 100vh;
  }

  .main {
    display: flex;
  }

  .dashboard {
    margin-top: 5px;
    margin-left: 5vw;
    border: 1px solid #D9D9D9;
    border-radius: 30px 0 0 30px;
    width: 100vw;
    height: 92vh;
  }

  .dashboard .title {
    margin: 2rem;

  }


</style>