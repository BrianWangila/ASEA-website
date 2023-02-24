<template>
  <main>
      <div class="main">
        <div>
          <SideMenu />
        </div>

        <div class="dashboard">
          <div class="title">
            <h3>Manage Data</h3>
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
    name: "MyData",
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

<!-- <template>
  <div>
    <label for="dateOfBirth">Date of Birth:</label>
    <input type="date" id="dateOfBirth" v-model="dateOfBirth" :max="maxDate" /> -->
    <!-- <p v-if="!isValid">You must be at least 18 years old to use this site.</p> -->
  <!-- </div>
</template>

<script>
export default {
  data() {
    return {
      dateOfBirth: "",
    };
  },
  computed: {
    maxDate() {
      const now = new Date();
      const maxDate = new Date(now.getFullYear() - 18, now.getMonth(), now.getDate());
      return maxDate.toISOString().slice(0, 10);
    },
    isValid() {
      const dob = new Date(this.dateOfBirth);
      const maxDob = new Date(this.maxDate);
      return dob <= maxDob;
    },
  },
};
</script> -->