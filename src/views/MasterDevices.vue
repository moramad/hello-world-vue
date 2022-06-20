<template>
  <div class="wrapper">
    <Sidebar_Comp />

    <div class="main">
      <Navbar_Comp />

      <main class="content">
        <div class="container-fluid p-0">
          <h1 class="h3 mb-3"><strong>Master Devices</strong></h1>

          <div class="row">
            <div class="col-12 col-lg-12 col-xxl-12 d-flex">
              <div class="card flex-fill">
                <div class="card-header">
                  <h5 class="card-title mb-0">Registered Devices</h5>
                </div>
                <table class="table table-hover my-0">
                  <thead>
                    <tr>
                      <th>DeviceID</th>
                      <th class="d-none d-xl-table-cell">Name</th>
                      <th class="d-none d-xl-table-cell">Category</th>
                      <th>Status</th>
                      <th class="d-none d-md-table-cell">Registration Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="device in devices" :key="device.id">
                      <td class="d-none d-xl-table-cell">{{ device.id }}</td>
                      <td>{{ device.name }}</td>
                      <td class="d-none d-xl-table-cell"> {{ device.category }} </td>
                      <td> <span :class="'badge ' + [isStatus(device.status) ? 'bg-success': 'bg-danger',]">{{ device.status.toUpperCase() }}</span> </td>
                      <td class="d-none d-md-table-cell"> {{ device.regdate }} </td>
                    </tr>
                  </tbody>
                </table>
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
    name: "MasterDevices_View",
    components: {
      Sidebar_Comp,
      Footer_Comp,
      Navbar_Comp,
    },
    data() {
      return {
        devices: [],
      };
    },
    methods: {
      setDevices(data) {
        this.devices = data;
      },
      isStatus(status) {
        if (status == "on") {
          return true;
        } else {
          return false;
        }
      },
    },
    mounted() {
      axios
        .get(process.env.VUE_APP_ROOT_API + "/devices")
        .then((response) => this.setDevices(response.data))
        .catch((error) => console.log(error));
    },
  };
</script>