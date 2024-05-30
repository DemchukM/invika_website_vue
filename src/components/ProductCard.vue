<template>
  <div
    class="w-[90vw] h-[90vh] rounded-lg flex flex-wrap"
  >
    <div
      class="w-[50%] h-[500px] bg-gray-200"
    >
      <SliderImage
          :images="product.images"
      />
    </div>
  </div>
</template>

<script>
import SliderImage from "@/components/SliderImage.vue";

export default {
  name: 'ProductCard',
  components: {
    SliderImage
  },
  props: {
    product: {
      type: Object,
      required: true
    }
  },
}
</script>