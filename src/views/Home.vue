<template>
  <div class="wrapper">
    <Sidebar_Comp />

    <div class="main">
      <Navbar_Comp />

      <main class="content">
        <div class="container-fluid p-0">
          <h1 class="h3 mb-3"><strong>Judul</strong> Dashboard</h1>

          <div class="row">
            <div class="col-md-3">
              <div class="card">
                <div class="card-body">
                  <div class="row">
                    <div class="col mt-0">
                      <h5 class="card-title">Sales</h5>
                    </div>

                    <div class="col-auto">
                      <div class="stat text-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-truck align-middle"
                        >
                          <rect x="1" y="3" width="15" height="13"></rect>
                          <polygon
                            points="16 8 20 8 23 11 23 16 16 16 16 8"
                          ></polygon>
                          <circle cx="5.5" cy="18.5" r="2.5"></circle>
                          <circle cx="18.5" cy="18.5" r="2.5"></circle>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <h1 class="mt-1 mb-3">{{ products.length }}</h1>
                  <div class="mb-0">
                    <span class="text-danger">
                      <i class="mdi mdi-arrow-bottom-right"></i> -3.65%
                    </span>
                    <span class="text-muted">Since last week</span>
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
  name: "Home_View",
  components: {
    Sidebar_Comp,
    Footer_Comp,
    Navbar_Comp,
  },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    setProducts(data) {
      this.products = data;
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/products")
      .then((response) => this.setProducts(response.data))
      .catch((error) => console.log(error));
  },
};
</script>
