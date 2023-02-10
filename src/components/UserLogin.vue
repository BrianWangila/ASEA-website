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
          <!-- <p>{{ message }}</p>  -->
          <form @submit.prevent="onLogin">
            <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label">Email</label>
              <input 
                v-model="loginData.email"
                type="email"
                class="form-control one" 
                :class="{'is-invalid': validationStatus(loginValidation.email)}"
                placeholder="Enter your email address">
                <div v-if="loginValidation.email.required" class="invalid-feedback">Email is required</div>
                <div v-else-if="loginValidation.email.email" class="invalid-feedback">Invalid Email Format</div>
                
            </div>

            <div class="mb-3" style="margin-top: 3vh">
              <label for="formGroupExampleInput2" class="form-label ">Password</label>
              <input 
                v-model="loginData.password"
                type="password" 
                class="form-control one"
                placeholder="Enter your password">
                <!-- <div v-if="loginValidation.password.required" class="invalid-feedback">Password is required</div> -->

            </div>

            <div class="form-check" style="margin-top: 1vh">
              <input
                v-model="loginData.checkbox"
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
  import { useVuelidate } from '@vuelidate/core'
  import { required, email, between } from '@vuelidate/validators'
  import { ref } from 'vue';


  export default {
    name: 'UserLogin',

    setup() {

      const message = ref("");

      const loginData = ref({
        email: "",
        password: "",
        checkbox: false
      });

      const loginRules = {
        email: {required, email},
        password: {required, between: between(5, 15)},
      };

      const loginValidation = useVuelidate(loginRules, loginData);
      
      return { loginData, loginValidation, message };
    },

    created(){
      this.router = this.$router;
    },

    methods : {
      
      // validation status method
      validationStatus(validation) {
        return typeof validation != "undefined" ? validation.$error : false;
      },

      //sending login credentials to the backend
      async onLogin(){
        this.loginValidation.$touch();

        if(this.loginValidation.pending || this.loginValidation.error) return;

        try {
          await axios.post('http://127.0.0.1:8000/api/login', this.loginData, {headers: {}})
            .then(resp => {

              localStorage.setItem('token', resp.data.token);
              localStorage.setItem('user', JSON.stringify(resp.data.user));
              
              this.router.push('/');
            })
            .catch(error => {

              const errorMsg = error.message;
              this.message = errorMsg;
            })
            .finally(() => {

            });
        } catch (error) {
          console.log(error)
        }
        


    
        this.email = ""
        this.password = ""
        this.checkbox = false

      }
    }
  }

</script>



<style scoped>

  .login-page {
    background-color: #EDEAEA;
    height: 100vh;
    
  }

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