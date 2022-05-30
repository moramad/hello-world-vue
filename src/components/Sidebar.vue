<template>
  <div>
    <nav id="sidebar" class="sidebar js-sidebar">
      <div class="sidebar-content js-simplebar">
        <a class="sidebar-brand" href="index.html">
          <span class="align-middle">Judul Sidebar</span>
        </a>

        <ul class="sidebar-nav">
          <li class="sidebar-header">Group 1</li>

          <li class="sidebar-item active">
            <a class="sidebar-link" href="index.html">
              <i class="align-middle" data-feather="sliders"></i>
              <span class="align-middle">item 1</span>
            </a>
          </li>

          <li class="sidebar-item">
            <a class="sidebar-link" href="pages-profile.html">
              <i class="align-middle" data-feather="user"></i>
              <span class="align-middle">item 2</span>
            </a>
          </li>

          <li class="sidebar-item">
            <a class="sidebar-link" href="pages-sign-in.html">
              <i class="align-middle" data-feather="log-in"></i>
              <span class="align-middle">item 3</span>
            </a>
          </li>

          <li class="sidebar-item">
            <a class="sidebar-link" href="pages-sign-up.html">
              <i class="align-middle" data-feather="user-plus"></i>
              <span class="align-middle">Item 4</span>
            </a>
          </li>

          <li class="sidebar-item">
            <a class="sidebar-link" href="pages-blank.html">
              <i class="align-middle" data-feather="book"></i>
              <span class="align-middle">Blank</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Sidebar_Comp",
};
</script>

<style></style>
