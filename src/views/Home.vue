<template>
  <div class="wrapper">
    <Sidebar_Comp />

    <div class="main">
      <Navbar_Comp />

      <main class="content">
        <div class="container-fluid p-0">
          <h1 class="h3 mb-3"><strong>Judul</strong> Dashboard</h1>

          <div class="row">            
              <div class="col-md-2" v-for="item in dashboard_items" :key="item.id">{{item.name}}</div>            
          </div>

        </div>
      </main>
      <Footer_Comp />
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import axios from "axios";
  import Sidebar_Comp from "@/components/Sidebar.vue";
  import Navbar_Comp from "@/components/Navbar.vue";
  import Footer_Comp from "@/components/Footer.vue";

  export default {
    name: "Home_View",
    components: {
      Sidebar_Comp,
      Footer_Comp,
      Navbar_Comp,
    },
    data() {
      return {
        dashboard_items: [],
      };
    },
    methods: {
      setProducts(data) {
        this.dashboard_items = data;
      },
    },
    mounted() {
      axios
        .get(process.env.VUE_APP_ROOT_API + "/dashboard-items")
        .then((response) => this.setProducts(response.data))
        .catch((error) => console.log(error));
    },
  };
</script>