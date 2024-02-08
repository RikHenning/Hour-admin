<template>
  <header class="nav-bar" ref="header">
    <div class="container" ref="container">
      <div class="image-container">
        <router-link to="/homePage">
          <img :src="backgroundImage" alt="Panda" class="clickable-image" />
        </router-link>
      </div>
      <div class="router-links">
        <router-link to="/homePage" class="router-link">Go to Home Page</router-link>
        <router-link to="/invoicingPage" class="router-link">Go to Invoice Page</router-link>
        <router-link to="/employee" class="router-link">Go to Employee Page</router-link>
        <router-link to="/planning" class="router-link">Go to Planning Page</router-link>
      </div>
    </div>
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
      headerHeight: 0,
    };
  },
  mounted() {
    this.setHeaderHeight();
    window.addEventListener('resize', this.handleResize);
  },

  beforeUnmount() {
    // Remove event listener when the component is unmounted
    window.removeEventListener('resize', this.handleResize);
  },

  methods: {
  setHeaderHeight() {
    this.$nextTick(() => {
      const headerHeight = this.$refs.header.clientHeight;
      const containerPaddingTop = parseInt(window.getComputedStyle(this.$refs.container).paddingTop);
      const containerPaddingBottom = parseInt(window.getComputedStyle(this.$refs.container).paddingBottom);
      const routerLinksPaddingTop = parseInt(window.getComputedStyle(this.$refs.routerLinks).paddingTop);
      const routerLinksPaddingBottom = parseInt(window.getComputedStyle(this.$refs.routerLinks).paddingBottom);
      const totalHeight = headerHeight + containerPaddingTop + containerPaddingBottom + routerLinksPaddingTop + routerLinksPaddingBottom;
      this.$emit('headerHeightUpdated', totalHeight);
    });
  },
  handleResize() {
    this.setHeaderHeight();
  },
}

};
</script>

<style scoped>
.container {
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
  .container {
    flex-direction: column;
    align-items: flex-start;
  }

  .image-container img {
    margin-right: 0;
    margin-bottom: 10px;
  }
}
</style>
