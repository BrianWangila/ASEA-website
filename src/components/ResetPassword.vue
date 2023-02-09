<template>
  <div class="login-page">
    <div class="logo">
      <img src="../assets/asea-logo.png" />
      <a style="text-decoration: none; font-size: 15px; color: #090234" href="mailto: aseasecretariat@african-exchanges.org"><p>aseasecretariat@african-exchanges.org</p></a>
    </div>

  
    <div class="display-flex">
      <div class="side-svg">
        <img id="one" src="../assets/sidegraph.svg" />
        <img id="two" src="../assets/comp.svg" />
      </div>

      <div>
        <div class="login-form">

          <div class="form-heading">
            <h3>Forgot Your Password? </h3>
            <p style="font-size: 15px; margin-top: 2vh;">Enter your email address to receive a reset link</p>
          </div>

          <form @submit="onSubmit">
            <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label">Email</label>
              <input 
                v-model="email"
                type="text"
                class="form-control one" 
                placeholder="Enter your email address">
            </div>
            

            <div class="button">
              <button type="submit">SUBMIT</button>
              <router-link to='/login' style="text-decoration: none;"><p>Go back to login page</p></router-link>
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
  // import axios from 'axios';

  export default {
    name: 'ResetPassword',
    data(){
      return {
        email: "",
      }
    },

    methods : {
        onSubmit(e){
        e.preventDefault()



   
        this.email = ""

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
    height: 60vh;
    margin-top: 10vh;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  }

  form {
    padding: 30px;
    margin-top: 7vh;
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
    margin-top: 6vh;
  }

  .form-heading h3 {
    font-size: 40px;

  }

  form button {
    margin-top: 6vh;
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
    margin-top: 2vh;
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