<template>
  <main>
      <div class="main">
        <div>
          <SideMenu />
        </div>

        <div class="profile">
          <div class="header"></div>
          <div class="circle2">
            <div > <img src="@/assets/avatar.png" class="circle"/></div>
          </div>

          <div class="title-button">
            <div class="title">
              <h4>Profile</h4>
              <p>Update your photo and account details</p>
            </div>
            <!-- <div >
              <button  @click="edit = false" v-if="edit == true">EDIT</button>
              <button type="submit" v-else>SAVE</button>
            </div> -->
          </div>

          <div class="profile-info">
            <form @submit.prevent="save">
              <div class="form-left">
                <div style="margin-bottom: 0.6rem">
                  <label>Name:</label>
                  <input type="text" :value="user.name" name="name" :disabled="edit"/>
                </div>
                <div style="margin-bottom: 0.6rem">
                  <label>Email:</label>
                  <input type="text" :value="user.email"  name="email" :disabled="edit"/>
                </div>
                <div>
                  <label>Phone:</label>
                  <input type="text" value="+254712345678" name="phone" :disabled="edit"/>
                </div>
              </div>

              <div class="form-right">
                <div  style="margin-bottom: 0.6rem">
                  <label>Address:</label>
                  <input type="text" value="" name="address" :disabled="edit"/>
                </div>
                <div style="margin-bottom: 0.6rem">
                  <label>City:    </label>
                  <input type="text" value="" name="city" :disabled="edit"/>
                </div>
                <div>
                  <label>Country:</label>
                  <input type="text" value="" name="country" :disabled="edit"/>
                </div>
              </div>

              <div>
                <button @click="edit=false" v-if="edit == true">EDIT</button>
                <button type="submit" v-else>SAVE</button>
              </div>

              <div class="cancel-btn">
                <button>Cancel</button>
              </div>
              
            </form>
          </div>

          <hr class="line"/>

          <div class="details">
            <h4>Account Settings</h4>

              <div class="toggle">
                <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                  Change Password
                </button>
                <div class="collapse" id="collapseExample">
                  <form class="card card-body">
                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label">Current Password</label>
                      <input type="password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputPassword1" class="form-label">New Password</label>
                      <input type="password" class="form-control" id="exampleInputPassword1">
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
                      <input type="password" class="form-control" id="exampleInputPassword1">
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                  </form>
                </div>
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
  import Footer from '../Footer.vue'
  import SideMenu from '../SideMenu.vue'

  export default {
    name: "MyProfile",
    components: {
      SideMenu,
        Footer,
    },
    data() {
      return {
        user: JSON.parse(localStorage.getItem('user')),
        edit: true
      }

    },

    methods: {
      save(){
        return {
          edit: false
        }
      }
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

  .profile {
    margin-top: 5px;
    margin-left: 5vw;
    border: 1px solid #D9D9D9;
    border-radius: 30px 0 0 30px;
    width: 100vw;
    height: 92vh;
  }

  .profile .header {
    /* border: 1px solid grey; */
    height: 15rem;
    width: 87rem;
    margin: 2rem 0 0 3rem;
    border-radius: 7rem 0 0;
    background-color: #E0DFE2;


  }

  .line {
    position: relative;
    width: 30rem;
    margin: auto;
    top: 27rem;
  }

  .profile .circle2 {
    width: 180px;
    height: 190px;
    background-color: white;
    border-radius: 50%;
    position: absolute;
    left: 30rem;
    top: 13rem;
  }

  .profile .circle {
    width: 150px;
    height: 150px;
    border: 1px solid #c7c2c2;
    /* background-color: #E0DFE2; */
    border-radius: 50%;
    position: absolute;
    left: 1rem;
    top: 1rem;
  }

  .title {
    position: absolute;
    left: 42rem;
    margin-top: 1rem;
  }

  .profile-info button {
    position: absolute;
    right: -9rem;
    top: -9rem;
    width: 5rem;
    border: none;
    height: 2.5rem;
    border-radius: 5px;
    font-weight: 500;
  }

  .cancel-btn{
    display: none;
    position: absolute;
    right: -2rem;
    top: -9rem;
    width: 5rem;
    border: none;
    height: 2.5rem;
    border-radius: 5px;
    font-weight: 500;
    color: red;
    
  }

  .profile-info {
    position: absolute;
    left: 30rem;
    top: 27rem;

  }

  .profile-info .form-left {
    margin-right: 20rem;
  }

  form label {
    font-size: 21px;
    margin-right: 2rem;
    margin-top: 1rem;
  }

  form input {
    height: 2.8rem;
    width: 20rem;
    background-color: #eeedf1d2;
    border: #c7c2c2;
    padding: 1rem 0 1rem 1rem;
    font-size: 18px;
  }

  .profile-info form {
    display: flex;
  }

  .details {
    position: relative;
    top: 28rem;
    left: 41rem;
  }

  .toggle {
    position: relative;
    width: 40rem;
    left: -33rem;
  }


</style>