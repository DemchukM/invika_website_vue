<template>
  <div class="flex justify-around py-2 px-5 bg-orange-300 shadow-md">
    <div class="header__logo">
      <img class="h-[50px]" src="/image.png" alt="logo">
    </div>
    <div class="flex justify-center align-center">
      <div
          v-for="item in menuItems"
          :key="item.id"
      >
        <button
            @click="$router.push(item.route)"
            class="p-2 hover:bg-orange-400 rounded-md mx-1"
            :class="{
              'bg-orange-400': item.route === $route.path
            }"
        >
          {{ item.name }}
        </button>
      </div>
    </div>
    <div class="flex justify-center align-center">
      <button
          @click="$router.push('/card')"
          class="p-2 hover:bg-orange-400 rounded-md mx-1"
          :class="{
              'bg-orange-400': '/card' === $route.path
            }"
      >
        Корзина
      </button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'MyHeader',

  data: () => ({
    menuItems: [
      {id: 1, name: 'Головна', route: '/'},
      {id: 3, name: 'Контакти', route: '/contact'},
    ],

  }),

  methods: {

  },

  mounted() {
    this.isMobile = window.innerWidth < 768
    window.addEventListener('resize', () => {
      this.isMobile = window.innerWidth < 768
    })
  },
}
</script>