<template>
  <div class="side-menu">
    <div class="profile">
      <div class="logo">
        <img src="@/assets/asea-logo.png" />
      </div>
      <div class="avatar">
        <img src="@/assets/avatar.png" />
      </div>
      <div>
        <router-link to="/my-profile"><button>My Profile</button></router-link>
      </div>
      <div>
        <!-- <p>Welcome, <span>{{ user.name }}.</span></p> -->
        <p>Welcome, Brian</p>
      </div>
    </div>


    <div class="menu-icons">
      <router-link to="/" class="tab" :class="{ active: activeTab === 'Dashboard' }" @click="activeTab = 'Dashboard'">
          <img src="@/assets/dash-svg.svg" />
          <button>Dashboard</button>
      </router-link>

      <router-link to="/my-data" class="tab" :class="{ active: activeTab === 'Manage' }" @click="activeTab = 'Manage'">
          <img src="@/assets/data-svg.svg" />
          <button>Manage Data</button>
      </router-link>

      <router-link to="/market-data" class="tab" :class="{ active: activeTab === 'Market' }" @click="activeTab = 'Market'">
          <img src="@/assets/market-svg.svg" />
          <button>Market Feed</button>
      </router-link>

      <router-link to="/intranet" class="tab" :class="{ active: activeTab === 'Intranet' }" @click="activeTab = 'Intranet'">
          <img src="@/assets/intranet-svg.svg" />
          <button>Intranet</button>
      </router-link>
    </div> 

    <div class="logout">
      <button @click="logout"><img src="@/assets/exit.svg">EXIT</button>
    </div>


    <div class="copyright">
      <p>Copyright @ 2023</p>
    </div>


  </div> 


</template>


<script>
  // import axios from 'axios';

  export default {
    name: 'SideMenu',
    data() {
      return {
        // user: JSON.parse(localStorage.getItem('user')),
        // token: localStorage.getItem('token'),
        activeTab: "Dashboard"

      };
    },

    created(){
      this.router = this.$router;
    },

    methods: {
      async logout() {
        // try {
        //   const config = {
        //     headers: {
        //       Authorization: `Bearer ${this.token}`,
        //       Accept: "application/json",
        //       "Content-Type": "application/json",
        //     },
        //   };

        //   await axios.post("http://127.0.0.1:8000/api/logout", {}, config);

        //     localStorage.removeItem('token')
        //     localStorage.removeItem('user')
            
        //     this.router.push("/login");

        // } catch (error) {
        //   console.error(error);
        // }

        this.router.push("/login");
      },
      setActive(item){
        this.items.forEach(i => {
          i.isActive = false;
        });

        item.isActive = true
      },
  }}

</script>


<style scoped>
  .side-menu {
    margin: 1rem 2rem;
    width: 10vw;
  }

  .logo img {
    height: 4rem;
    margin-bottom: 0.7rem;
  }

  .profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 2rem;
  }

  .profile .avatar {
    margin-top: 0.3rem;
  }

  .profile span {
    font-size: 20px;
    font-weight: bold;
    color: #3F3D56;

  }

  .profile button {
    background-color: #DFDCDC 0.3;
    border: 1px solid #DFDCDC;
    margin-top: 0.8rem;
    margin-bottom: 5px;
    border-radius: 5px;
    height: 2rem;
    font-weight: 500;
  }

  .menu-icons {
    display: flex;
    flex-direction: column;
    /* justify-content: space-around; */
    height: 37vh;
    width: 12vw;
    margin-top: 4rem;
    margin-bottom: 5rem; 
    border: 1px solid #D9D9D9;
    border-radius: 10px;
    padding: 1rem;
    list-style: none;
    padding: 0;
    /* box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 1px, rgba(0, 0, 0, 0.23) 0px 1px 1px; */
  }


  .menu-icons > .tab{
    padding: 10px;
    margin: 0.8rem 0 0.2rem 0;
    padding-top: 1.3rem;
    padding-bottom: 1.3rem;
    cursor: pointer;
  }

  .menu-icons .tab.active{
    /* background-color: #3333 ; */
    border-left: 3px solid #333;
    padding-left: 7px;
  }

  /* #current div:active {
    border-left: 3px solid #333;
    padding-left: 7px;
  } */

  .menu-icons .tab:hover {
  background-color: #3333 ;
  }

  /* .menu-icons button:hover {
  color: rgb(192, 8, 8);
  } */

  .menu-icons img {
    height: 30px;
    margin-right: 0.8rem;
    border-radius: 3px;
  }

  .menu-icons button {
    border: none;
    background: none; 

  }

  .logout {
    text-align: center;
    margin-top: 7rem;
  }

  .logout button {
    background-color: #DFDCDC 0.3;
    border: 1px solid #DFDCDC;
    border-radius: 5px;
    height: 2.5rem;
    width: 8rem;
    font-weight: 600;
    font-size: 20px;
    color: #09023498 ;
  }

  .logout img {
    height: 1.5rem;
    margin-right: 1rem;
  }


  .copyright {
    margin-left: 30px;
    margin-top: 4.5rem;
  }

</style>