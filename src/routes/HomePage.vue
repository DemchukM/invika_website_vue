<template>
  <div>
    <div v-if="!ProductStore.isLoadingProduct">
      <div>
        <product-list :products="ProductStore.products"></product-list>
      </div>
    </div>

    <div v-else class="text-center" style="height:100vh; position: relative;">
      <v-progress-circular
          :size="100"
          :width="7"
          color="amber"
          indeterminate
          style="margin-top: calc(50vh - 50px);"
      ></v-progress-circular>
    </div>
  </div>
</template>

<script>

import FilterProduct from '../components/FilterProduct.vue'
import ProductList from '../components/ProductList.vue'
import {useProductStore} from "../stores/ProductStore.js";

export default {
  name: 'HomePage',

  components: {
    FilterProduct,
    ProductList,
  },

  data: () => ({
    ProductStore: useProductStore(),
    page: 1,
    isMobile: false,
    isShowFilter: true,
  }),

  methods: {
    checkIsMobile() {
      if (window.innerWidth < 958) {
        this.isMobile = false;
      } else {
        this.isMobile = true;
      }
    }
  },

  created() {
    this.ProductStore.downloadProduct(true);
    document.title = "Магазин|InVika";
  },
  mounted() {
    this.checkIsMobile();
    window.addEventListener('resize', () => {
      this.checkIsMobile();
    });
  },
  watch: {
    page(newVal) {
      this.ProductStore.setPage(newVal);
      this.ProductStore.downloadProduct();
    },
  }
}
</script>