<template>
  <nav class="navbar navbar-expand navbar-light navbar-bg">
    <a class="sidebar-toggle js-sidebar-toggle">
      <i class="hamburger align-self-center"></i>
    </a>

    <div class="navbar-collapse collapse">
      <ul class="navbar-nav navbar-align">
        <li class="nav-item dropdown">
          <a
            class="nav-icon dropdown-toggle"
            href="#"
            id="alertsDropdown"
            data-bs-toggle="dropdown"
          >
            <div class="position-relative">
              <i class="align-middle" data-feather="bell"></i>
              <span class="indicator">{{ notifications.length }}</span>
            </div>
          </a>
          <div
            class="dropdown-menu dropdown-menu-lg dropdown-menu-end py-0"
            aria-labelledby="alertsDropdown"
          >
            <div class="dropdown-menu-header">
              {{ notifications.length }} New Notifications
            </div>
            <div class="list-group">
              <a
                href="#"
                class="list-group-item"
                v-for="notification in notifications"
                :key="notification.id"
              >
                <div class="row g-0 align-items-center">
                  <div class="col-2">
                    <i class="text-danger" data-feather="alert-circle"></i>
                  </div>
                  <div class="col-10">
                    <div class="text-dark">{{ notification.title }}</div>
                    <div class="text-muted small mt-1">
                      {{ notification.msg }}
                    </div>
                    <div class="text-muted small mt-1">
                      {{ notification.time }}
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div class="dropdown-menu-footer">
              <a href="#" class="text-muted">Show all notifications</a>
            </div>
          </div>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-icon dropdown-toggle d-inline-block d-sm-none"
            href="#"
            data-bs-toggle="dropdown"
          >
            <i class="align-middle" data-feather="settings"></i>
          </a>

          <a
            class="nav-link dropdown-toggle d-none d-sm-inline-block"
            href="#"
            data-bs-toggle="dropdown"
          >
            <img
              src="assets/img/avatars/avatar.jpg"
              class="avatar img-fluid rounded me-1"
              alt="Charles Hall"
            />
            <span class="text-dark">Charles Hall</span>
          </a>
          <div class="dropdown-menu dropdown-menu-end">
            <a class="dropdown-item" href="pages-profile.html"
              ><i class="align-middle me-1" data-feather="user"></i> Profile</a
            >
            <a class="dropdown-item" href="#"
              ><i class="align-middle me-1" data-feather="pie-chart"></i>
              Analytics</a
            >
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="index.html"
              ><i class="align-middle me-1" data-feather="settings"></i>
              Settings & Privacy</a
            >
            <a class="dropdown-item" href="#"
              ><i class="align-middle me-1" data-feather="help-circle"></i> Help
              Center</a
            >
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Log out</a>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import axios from "axios";

export default {
  name: "Navbar_Comp",
  data() {
    return {
      notifications: [],
    };
  },
  methods: {
    setNotifications(data) {
      this.notifications = data;
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/notifications")
      .then((response) => this.setNotifications(response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style></style>
