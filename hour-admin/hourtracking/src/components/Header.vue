<template>
  <header class="nav-bar" ref="header">
    <nav class="navbar">
      <div class="nav headerContainer" ref="container">
        <div class="nav-item image-container">
          <router-link to="/homePage">
            <img :src="backgroundImage" alt="Panda" class="nav-link clickable-image" />
          </router-link>
        </div>
        <div class="nav-item router-links">
          <router-link to="/homePage" class="router-link">Go to Home Page</router-link>
          <router-link to="/invoicingPage" class="router-link">Go to Invoice Page</router-link>
          <router-link to="/employee" class="router-link">Go to Employee Page</router-link>
          <router-link to="/planning" class="router-link">Go to Planning Page</router-link>
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
.headerContainer {
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

/* Responsive styles */
@media (max-width: 768px) {
  .headerContainer {
    flex-direction: column;
    align-items: flex-start;
  }

  .image-container img {
    margin-right: 0;
    margin-bottom: 10px;
  }
}
</style>
