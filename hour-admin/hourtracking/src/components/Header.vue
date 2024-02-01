<template>
  <div class="container">
    <div class="image-container">
      <img src="/BackgroundPanda.jpeg" alt="Panda" />
    </div>
    <div class="router-links">
      <router-link to="/homePage" class="router-link">Go to Home Page</router-link>
      <router-link to="/invoicingPage" class="router-link">Go to Invoice Page</router-link>
      <router-link to="/employee" class="router-link">Go to Employee Page</router-link>
      <router-link to="/planning" class="router-link">Go to Planning Page</router-link>
    </div>
  </div>
</template>

<script>
export default {
    name: 'NavBar',
    props: {
    msg: String
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
    background-color: #f0f8ea; /* Pale green background color */
  }

  /* Image styles */
  .image-container img {
    width: 100px; /* Adjust the width as needed */
    height: auto;
    margin-right: 20px;
    border-radius: 10px; /* Optional: add rounded corners to the image */
  }

  /* Router link styles */
  .router-links {
    display: flex;
    flex-wrap: wrap;
  }

  .router-link {
    margin: 10px;
    padding: 10px 20px;
    text-decoration: none;
    color: #333; /* Text color */
    background-color: #9acca4; /* Button background color */
    border: 1px solid #72a482; /* Button border color */
    border-radius: 5px; /* Optional: add rounded corners to the buttons */
    transition: background-color 0.3s ease;
  }

  .router-link:hover {
    background-color: #72a482; /* Hover background color */
    color: #fff; /* Hover text color */
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
