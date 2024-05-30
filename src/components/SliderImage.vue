<template>
  <v-carousel interval="5">
    <v-carousel-item
        v-for="image in images"
        :key="image.id"
        :src="image.src"
        cover
    >

    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: 'SliderImage',
  props: {
    images: {
      type: Array,
      default: () => []
    }
  }
}
</script>