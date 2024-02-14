<template>
  <header>
    <nav class="navbar fixed-top navbar-light bg-light">
      <div class="container-fluid d-flex justify-content-between align-items-center">
        <div class="image-container">
          <router-link to="/homePage">
            <img :src="backgroundImage" alt="Panda" class="clickable-image" />
          </router-link>
        </div>
        <div class="router-links d-none d-lg-flex">
          <router-link to="/homePage" class="router-link">Go to Home Page</router-link>
          <router-link to="/invoicingPage" class="router-link">Go to Invoice Page</router-link>
          <router-link to="/employee" class="router-link">Go to Employee Page</router-link>
          <router-link to="/planning" class="router-link">Go to Planning Page</router-link>
        </div>
        <div class="dropdown d-lg-none"> 
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Menu
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <router-link to="/homePage" class="dropdown-item">Go to Home Page</router-link>
            <router-link to="/invoicingPage" class="dropdown-item">Go to Invoice Page</router-link>
            <router-link to="/employee" class="dropdown-item">Go to Employee Page</router-link>
            <router-link to="/planning" class="dropdown-item">Go to Planning Page</router-link>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>


<script>
import BackgroundPanda from '@/assets/BackgroundPanda.jpeg';

export default {
  name: 'NavBar',
  props: {
    msg: String
  },
  data() {
    return {
      backgroundImage: BackgroundPanda,
    };
  }
};
</script>

<style scoped>
@media (max-width: 1230px) {
  .router-links {
    display: none;
  }
}
header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: #f0f8ea;
}

.clickable-image {
  cursor: pointer;
}

.image-container img {
  width: 160px;
  height: auto;
  margin-right: 20px;
  border-radius: 10px;
}

.router-links {
  display: flex;
  flex-wrap: wrap;
}

.router-link {
  margin: 10px;
  padding: 10px 20px;
  text-decoration: none;
  color: #333;
  background-color: #9acca4;
  border: 1px solid #72a482;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.router-link:hover {
  background-color: #72a482;
  color: #fff;
}

</style>
