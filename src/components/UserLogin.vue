<template>
  <div class="login-page">
    <div class="logo">
      <img src="../assets/asea-logo.png" />
      <a style="text-decoration: none; font-size: 15px; color: #090234" href="#"><p>aseasecretariat@african-exchanges.org</p></a>
    </div>

  
    <div class="display-flex">
      <div class="side-svg">
        <img id="one" src="../assets/sidegraph.svg" />
        <img id="two" src="../assets/comp.svg" />
      </div>

      <div>
        <div class="login-form">

          <div class="form-heading">
            <h3>Welcome Back </h3>
            <p style="font-size: 15px; margin-top: 1vh;">Enter your details to continue to ASEA Portal</p>
          </div>

          <form @submit="onLogin">
            <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label">Email</label>
              <input 
                v-model="email"
                type="text"
                class="form-control one" 
                placeholder="Enter your email address">
            </div>

            <div class="mb-3" style="margin-top: 3vh">
              <label for="formGroupExampleInput2" class="form-label ">Password</label>
              <input 
                v-model="password"
                type="text" 
                class="form-control one"
                placeholder="Enter your password">
            </div>

            <div class="form-check" style="margin-top: 1vh">
              <input
                v-model="checkbox"
                class="form-check-input check" 
                type="checkbox" 
                id="gridCheck" 
                value="checkbox">
              <label class="form-check-label" for="gridCheck">
                Remember Password
              </label>
            </div>
            

            <div class="button">
              <button type="submit">LOGIN</button>
              <router-link to='/reset-password' style="text-decoration: none;"><p>Having trouble signing in?</p></router-link>
            </div>
          </form>

        </div>

        <p id="copyright">Copyright &COPY; portal.african-exchanges.org</p>
      </div>

      <div class="right-svg">
        <img style="height: 150px; margin-top: 10vh; margin-bottom: 5vh;" src="../assets/bargraph.svg" />
        <img style="height: 350px; margin-bottom: 15vh;"  src="../assets/carrier.svg" />
      </div>
    </div>


    <div class="hr-right"></div>
    <div class="hr-left"></div>
  
  </div>


</template>



<script>
  import axios from 'axios';

  export default {
    name: 'UserLogin',
    data(){
      return {
        email: "",
        password: "",
        checkbox: false
      }
    },

    methods : {
        async onLogin(e){
        e.preventDefault()

        const resp = await axios.post('http://127.0.0.1:8000/api/login', {
          email: this.email,
          password: this.password,
        });

        if(resp.status == 201){
          localStorage.setItem('token', resp.data.token);
          console.log(resp)

        }


   
        this.email = ""
        this.password = ""
        this.checkbox = false

      }
    }
  }

</script>



<style scoped>

  .display-flex {
    display: flex;
    justify-content: space-around;
  }

  .display-flex #copyright {
    text-align: center;
    margin-top: 2vh;
    font-size: 15px;
  }

  .side-svg, .right-svg {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .side-svg #one {
    height: 95px;
    margin-top: 10vh;

  }

  .side-svg #two {
    height: 286px;
    margin-bottom: 10vh;

  }

  .logo {
    position: relative;
    width: 300px;
    height: 146px;
    left: 59px;
    top: 10px;
  }

  .login-form {
    border: solid 1px #EDEAEA;
    border-radius: 30px;
    background-color: white;
    width: 26vw;
    height: 65vh;
    margin-top: 7vh;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  }

  form {
    padding: 30px;
  }

  .one {
    height: 50px;
    border: 1px solid #D1CFC9;
    background-color: rgba(210, 209, 212, 0.3);
  }

  #gridCheck {
    border: 1px solid #D1CFC9;
    /* background-color: rgba(210, 209, 212, 0.3); */
  }

  .form-heading {
    text-align: center;
    margin-top: 5vh;
  }

  .form-heading h3 {
    font-size: 40px;

  }

  form button {
    margin-top: 5vh;
    width: 22.8vw;
    border: none;
    height: 50px;
    background-color: #090234;
    color: white;
    font-size: 20px;
    font-weight: bold;
    border-radius: 5px;
  }

  .button p {
    margin-top: 1vh;
    text-align: center;
    font-size: 15px;
    color: #090234;

  }


  .hr-left {
      position: absolute;
      width: 36vw;
      height: 0px;
      left: 3.2vw;
      bottom: 19.5vh;

      border: 1px solid rgba(203, 194, 194, 0.6);
  }

  .hr-right {
      position: absolute;
      width: 31vw;
      height: 0px;
      right: 3.9vw;
      bottom: 19.5vh;

      border: 1px solid rgba(203, 194, 194, 0.6);
  }

</style>