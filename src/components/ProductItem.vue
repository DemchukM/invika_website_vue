<template>
  <div
      class="flex flex-col ma-2 w-[300px] rounded-md overflow-hidden shadow-md hover:bg-gray-50 hover:scale-105"
      @click="clickItemCard"
  >
    <div
        class="w-full h-[350px] overflow-hidden"
    >
      <img :src="getImage" class="object-contain w-full f-full"/>
    </div>
    <div>
      <p class="text-[18px] text-center p-2 font-bold">
        {{ product.name }}
      </p>
    </div>
    <ProductVariant
        selected="0"
        :variants="product.variants"
        @buy="buy"
        />
  </div>

  <BaseModal
    v-if="openCardProduct"
    @close="openCardProduct = false"
  >
    <ProductCard :product="product"/>
  </BaseModal>
</template>

<script>
import SliderImage from "./SliderImage.vue";
import ProductVariant from "./ProductVariant.vue";
import {useProductStore} from "../stores/ProductStore.js";
import BaseModal from "@/components/ui/BaseModal.vue";
import {defineAsyncComponent} from "vue";

export default {
  name: 'ProductItem',
  components: {
    SliderImage,
    ProductVariant,
    BaseModal,
    ProductCard: defineAsyncComponent(() => import('./ProductCard.vue')),
  },
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    ProductStore: useProductStore(),
    openDescription: 0,
    openCardProduct: false,
  }),
  computed: {
    getImage() {
      return this.product?.images?.length ? this.product.images[0].src : "/image.png"
    }
  },
  methods: {
    buy(param) {
      // Telegram.WebApp.MainButton.text = 'test'
      this.ProductStore.addProductToCart({
        product: this.product,
        variant: param.variant,
        count: param.count,
      });
    },
    clickItemCard() {
      this.openCardProduct = true;
    }
  },
}
</script>