<template>
  <div class="login-page">
    <div class="logo">
      <img src="@/assets/asea-logo.png" />
      <a style="text-decoration: none; font-size: 15px; color: #090234" href="mailto: aseasecretariat@african-exchanges.org"><p>aseasecretariat@african-exchanges.org</p></a>
    </div>

  
    <div class="display-flex">
      <div class="side-svg">
        <img id="one" src="@/assets/sidegraph.svg" />
        <img id="two" src="@/assets/reset.svg" />
      </div>

      <div>
        <div class="login-form">

          <div class="form-heading">
            <h3>Forgot Your Password? </h3>
            <p style="font-size: 15px; margin-top: 2vh;">Enter your email address to receive a reset link</p>
          </div>

          <form @submit.prevent="onSubmit">
            <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label">Email</label>
              <input 
                v-model="resetData.email"
                type="email"
                class="form-control one"
                :class="{'is-invalid': validationStatus(resetValidation.email)}"
                placeholder="Enter your email address">
                <div v-if="resetValidation.email.required" class="invalid-feedback">Email is required</div>
            </div>
            

            <div class="button">
              <button type="submit">SUBMIT</button>
              <div class="svg-icon">
                <font-awesome-icon icon="fa-solid fa-arrow-left-long" style="height: 17px; margin-top: 3px;"/>
                <router-link to='/login' style="text-decoration: none;"><p>Back to login</p></router-link>
              </div>
            </div>
          </form>

        </div>

        <p id="copyright">Copyright &COPY; portal.african-exchanges.org</p>
      </div>

      <div class="right-svg">
        <img style="height: 150px; margin-top: 10vh; margin-bottom: 5vh;" src="@/assets/bargraph.svg" />
        <img style="height: 350px; margin-bottom: 15vh;"  src="@/assets/carrier.svg" />
      </div>
    </div>


    <div class="hr-right"></div>
    <div class="hr-left"></div>
  
  </div>


</template>



<script>
  import axios from 'axios';
  import { useVuelidate } from '@vuelidate/core'
  import { required, email } from '@vuelidate/validators'
  import { ref } from 'vue';

  export default {
    
    name: 'ResetPassword',
    setup(){
      const resetData = ref({
        email: ""
      });

      const resetRule = {
        email: {required, email}
      };

      const resetValidation = useVuelidate(resetRule, resetData);
      
      return { resetData, resetValidation }
    },

    created(){
      this.router = this.$router;
    },

    methods : {
      validationStatus(validation){
        return typeof validation != "undefined" ? validation.$error : false;
      },

      async onSubmit(){

        await axios.post('http://127.0.0.1:8000/api/reset', this.resetData)
          .then((resp) => {
            console.log(resp)

            this.route.push('/login')
          })

  
        this.email = ""

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
    height: 60vh;
    margin-top: 10vh;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  }

  form {
    padding: 30px;
    margin-top: 5vh;
  }

  .one {
    margin-top: 1vh;
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
    color: #090234;
    margin-left: 10px;

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

  .svg-icon {
    display: flex;
    justify-content: center;
    margin-top: 2vh;
    font-size: 15px;
    color: #090234;
  }

</style>