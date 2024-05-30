<template>
  <v-container class="full-screen">
    <v-row style="margin: auto 0;">
      <v-col cols="12" style="text-align: center; font-size: 1.5rem; margin-top: 100px; font-weight: bold;">
        <p>Ваше замовлення успішно прийняте!</p>
        <p>Протягом 30 хвилин наш менеджер зв'яжеться з Вами для підтверджння замовлення</p>
        <p>Дякуємо за замовлення!</p>
        <p>
          <v-btn @click="ev => $router.push('/')">До магазину</v-btn>
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'SuccessPage',

  data: () => ({
    //
  }),

  mounted() {
    document.title = "Успішна покупка|InVika";
  },
}
</script>