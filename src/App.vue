<template>
  <MyHeader></MyHeader>
  <v-layout>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-layout>
  <div id="modal">
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'

export default {
  name: 'App',

  components: {
    MyHeader,
  },

  data: () => ({
    //
  }),
}
</script>

<style>
/* Скинути стилі для всіх HTML-елементів */
*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  color: inherit;
  background: none;
  border: none;
}

/* Налаштування деяких елементів форматування */
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  font-size: 16px;
  line-height: 1.5;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: normal;
}

a {
  text-decoration: none;
  color: inherit;
}

/* Налаштування списків */
ul, ol {
  list-style: none;
}

/* Очистити відступи між блочними елементами */
p {
  margin: 0;
}

:root {
  --colot-background: #ffffff;
  --color-cart: rgba(243, 243, 243, 0.93);
  --color-btn: #e8b575;
  --color-btn-text: #695135;
  --color-text: #000000;
}
</style>

