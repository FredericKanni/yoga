<template>


    <div >
         <navbar></navbar>
        
           
                <router-view>   </router-view>
           
       
          <DashboardFooter></DashboardFooter>

      
    </div>

 
</template>


<script>
import Navbar from "../navigation/Navbar";
import Footer from "../navigation/Footer";
export default {
  components: {
    Navbar,
    DashboardFooter: Footer
  }
};
</script>
