<template>
  <h2>Dashboard</h2>
</template>


<script>
import axios from 'axios';

  export default {
    name: 'DashboardPage',
    async created(){
      const response = await axios.get('user', {
        headers: {
          Authorization: 'Bearer' + localStorage.getItem('token')
        }
      });

      console.log(response)
    }
  }

</script>