<template>
  <div class="flex flex-wrap">
    <ProductItem
        v-for="product in products"
        :key="product.id"
        :product="product"
    />
  </div>

  <div class="card-fixed" v-if="ProductStore.getIsCart()" @click="confirmCart">
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
      <path fill="currentColor"
            d="M17 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2M1 2h3.27l.94 2H20a1 1 0 0 1 1 1c0 .17-.05.34-.12.5l-3.58 6.47c-.34.61-1 1.03-1.75 1.03H8.1l-.9 1.63l-.03.12a.25.25 0 0 0 .25.25H19v2H7a2 2 0 0 1-2-2c0-.35.09-.68.24-.96l1.36-2.45L3 4H1V2m6 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2m9-7l2.78-5H6.14l2.36 5H16Z"/>
    </svg>
    <span class="count-cart">{{ ProductStore.getCountCart }}</span>
  </div>
</template>

<script>
import ProductItem from "./ProductItem.vue";
import {useProductStore} from "../stores/ProductStore.js";
import FilterProduct from "./FilterProduct.vue";

export default {
  name: "ProductList",
  components: {
    ProductItem,
    FilterProduct,
  },
  props: {
    products: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    clickBtnDonwload() {
      this.ProductStore.incrementPage();
      this.ProductStore.downloadProduct();
    },
    clickSearch() {

      this.ProductStore.downloadProduct(true);
    },
    openFilter() {
      this.isFilter = !this.isFilter;
    },
    confirmCart() {
      this.$router.push('/cart');
    },
  },
  data() {
    return {
      ProductStore: useProductStore(),
      isFilter: false,
      search: "",
      isViewButtonDownload: false,
    }
  },
  mounted() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0
    }
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.ProductStore.incrementPage();
          this.ProductStore.downloadProduct();
        }
      });
    }, options);
    const el = document.getElementById('observerElement');
    if (el) {
      observer.observe(el);
    }
  },
};
</script>

<style scoped>
.card-fixed {
  position: fixed;
  top: 160px;
  right: 20px;
  width: 65px;
  height: 65px;
  border-radius: 50%;
  background-color: var(--color-btn);
  z-index: 100;
  cursor: pointer;
  animation: blinking 2s infinite;

  &:hover {
    transform: scale(1.1);
    animation: none;
  }

  & svg {
    margin: 12%;
  }

  & .count-cart {
    position: absolute;
    top: 0;
    right: 0;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: var(--color-btn-text);
    color: var(--color-cart);
    font-size: 15px;
    text-align: center;
  }
}

@keyframes blinking {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>