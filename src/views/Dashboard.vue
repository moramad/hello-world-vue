<template>
  <div class="wrapper">
    <Sidebar_Comp />

    <div class="main">
      <Navbar_Comp />

      <main class="content">
        <div class="container-fluid p-0">
          <div class="row">
            <div class="col-md-6 text-start">
              <h1 class="h3 mb-3"><strong>Smart</strong> Dashboard</h1>
            </div>
            <div class="col-md-6 text-end">
              <router-link to="/settings" class="btn btn-success float-right">
                <fa icon="plus" /> Add New
              </router-link>
            </div>
          </div>

          <div class="row">
            <div
              class="col-md-3"
              v-for="item in dashboard_items"
              :key="item.id"
            >
              <div class="card">
                <div class="card-body">
                  <div class="row">
                    <div class="col mt-0">
                      <h5 class="card-title">{{ item.name }}</h5>
                    </div>

                    <div class="col-auto">
                      <div class="stat text-primary">
                        <fa :icon="item.icon" />
                      </div>
                    </div>
                  </div>
                  <h1 class="mt-1 mb-3">{{ item.value }}</h1>
                  <div class="mb-0">
                    <span class="text-muted">{{ item.trend }}</span>
                  </div>
                </div>
              </div>
            </div>
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
  name: "Dashboard_View",
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