<template>


    <div class="container">
         <navbar></navbar>
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Example Component</div>

                    <div class="card-body">
                        I'm an example component.
                    </div>
                </div>
            </div>
        </div>  
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
