<template>
  <main>
      <div class="main">
        <div>
          <SideMenu />
        </div>

        <div class="dashboard">
          <div class="title">
            <h3>Intranet</h3>
          </div>

          <div class="header-tabs">
            <div type="button" style="margin-right: 3rem">Member Documents</div>
            <div type="button" style="margin-right: 3rem">AGM Documents</div>
            <div type="button" style="margin-right: 3rem">Committees</div>
            <div type="button">Gallery</div>
          </div>
        </div>
      </div>

      <div>
          <Footer />
      </div>
  </main>

  
</template>



<script>
  import Footer from '../Footer.vue'
  import SideMenu from '../SideMenu.vue'

  export default {
    name: "IntranetPage",
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

  .header-tabs {
    display: flex;
    justify-content: center;


  }

  .dashboard .title {
    margin: 2rem;

  }


</style>