<template>
  <div class="container mt-8">
    <div class="d-flex justify-center flex-column align-center" style="height:70vh;">
      <img src="../assets/404.svg" width="50%" />

      <div class="mt-8">
        <v-btn depressed large color="primary" :to="{ name: 'Home'}">Return to home page</v-btn>
      </div>
    </div>
  </div>
</template>