<template>
    <div>
        <!-- This will be the header!
        <router-link to="./views/HomePage.vue">Go to Home page!</router-link>
        <router-link to="./views/Employee.vue">Go to Employee page!</router-link>
        <router-link to="./views/Invoicing.vue">Go to Invoicing page!</router-link>
        <router-link to="./views/Planning.vue">Go to Planning page!</router-link> -->
    </div>
    <fwb-navbar>
      <template #logo>
      <fwb-navbar-logo alt="Fluffy Panda" image-url="#" link="#">
        Panda Movers!!
      </fwb-navbar-logo>
    </template>
    <template #default="{isShowMenu}">
      <fwb-navbar-collapse :is-show-menu="isShowMenu">
        <fwb-navbar-link is-active link="./views/HomePage.vue">
          Home
        </fwb-navbar-link>
        <fwb-navbar-link link="./views/Employee.vue">
          Employee Page 
        </fwb-navbar-link>
        <fwb-navbar-link link="./views/Invoicing.vue">
          Invoicing Page
        </fwb-navbar-link>
        <fwb-navbar-link link="./views/Planning.vue">
          Planning Page
        </fwb-navbar-link>
      </fwb-navbar-collapse>
    </template>
    <template #menu-icon>
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
      </svg>
    </template>
  </fwb-navbar> 
</template>

<script>
export default {
    name: 'HeaderMsg',
    props: {
    msg: String
  }
};


</script>

<script setup>
import {
  FwbNavbar,
  FwbNavbarCollapse,
  FwbNavbarLink,
  FwbNavbarLogo,
} from 'flowbite-vue'
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>