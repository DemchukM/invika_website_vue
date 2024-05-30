<template>
  <div v-if="ProductStore.getIsCart()">
    <v-container class="product-list">
      <v-row>
        <v-col cols="12" style="text-align: center;color: #f17a3e; font-size: 1.4rem; font-weight: 550;">
          <h2>В кошику</h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col
            cols="12"
            :xs="12"
            :sm="9"
            :md="9"
            :lg="9"
            :xl="9"
            :xxl="9"
        >
          <v-container fluid>
            <v-row>
              <v-col cols="12"
                     v-for="item in ProductStore.cart"
                     :key="item.product.id"
              >
                <v-container class="pa-2 product-item-cart"
                             fluid
                >
                  <v-row>
                    <v-col cols="12"
                           :xs="12"
                           :sm="2"
                           :md="2"
                           :lg="2"
                           :xl="2"
                           :xxl="2"
                           class="product-item-img-cart"
                    >
                      <img v-if="item.product.images.length > 0" :src="item.product.images[0].src"
                           style="width: 100%;"/>
                    </v-col>
                    <v-col cols="12"
                           :xs="12"
                           :sm="7"
                           :md="7"
                           :lg="7"
                           :xl="7"
                           :xxl="7"
                           class="product-item-detail-cart"
                    >
                      <div class="title">{{ item.product.name }}</div>
                      <div class="subtitle">{{ item.variant.name }}</div>

                      <increment-quantity :count="item.count" @updateCount="param => updateCount(param, item)"/>

                    </v-col>
                    <v-col cols="12"
                           :xs="12"
                           :sm="3"
                           :md="3"
                           :lg="3"
                           :xl="3"
                           :xxl="3"
                           class="product-item-detail-cart align-center"

                    >
                      <div>

                        <p style="margin-bottom: 5px;">Ціна: <strong>{{ item.variant.price }} грн.</strong></p>

                        <p>Сума: <strong>{{ item.variant.price * item.count }} грн.</strong></p>
                      </div>
                      <v-btn
                          class="my-btn"
                          @click="deleteProduct(item)"
                      >Видалити
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-container>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
        <v-col
            cols="12"
            :xs="12"
            :sm="3"
            :md="3"
            :lg="3"
            :xl="3"
            :xxl="3"
        >
          <v-container class="product-item-cart" fluid>
            <v-row>
              <v-col cols="12" class="text-center">
                <div class="title">Підсумок</div>
              </v-col>
              <v-col cols="12">
                <p class="subtitle">Загальна кількість: <strong>{{ ProductStore.totalCountCart() }} шт.</strong></p>
                <p class="subtitle">Загальна сума: <strong>{{ ProductStore.totalPriceCart() }} грн.</strong></p>
              </v-col>


            </v-row>
            <v-row>
              <v-col cols="12">
                <v-btn
                    class="my-btn-color-confirm-cart"
                    @click="confirmCart"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="none" stroke="currentColor" stroke-dasharray="24" stroke-dashoffset="24"
                          stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11L11 17L21 7">
                      <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="24;0"/>
                    </path>
                  </svg>
                  Підтвердити
                </v-btn>
              </v-col>
              <v-col cols="12">
                <v-btn
                    class="my-btn-color-back-cart"
                    @click="backToHome"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024">
                    <path fill="currentColor" d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"/>
                    <path fill="currentColor"
                          d="m237.248 512l265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"/>
                  </svg>
                  Повернутися
                </v-btn>
              </v-col>

            </v-row>
          </v-container>
        </v-col>
      </v-row>

    </v-container>


  </div>
  <div v-else>
    <v-container class="product-list">
      <v-row>
        <v-col cols="12" style="text-align: center;">
          <h1>Кошик Пустий</h1>
        </v-col>
      </v-row>
    </v-container>
    <div class="fixed-div">
      <v-btn
          style="width: 100%; min-height: 50px;"
          class="my-btn-color-back-cart"
          @click="backToHome"
      >Повернутися назад
      </v-btn>
    </div>
  </div>
</template>

<script>
import {useProductStore} from "../stores/ProductStore.js"
import IncrementQuantity from "../components/IncrementQuantity.vue";

export default {
  name: 'CartPage',
  components: {
    IncrementQuantity
  },
  data: () => ({
    ProductStore: useProductStore(),
  }),
  methods: {
    confirmCart() {
      this.$router.push('/delivery');
    },
    backToHome() {
      this.$router.back();
    },
    deleteProduct(item) {
      this.ProductStore.removeProductToCart(item);
    },
    updateCount(param, item) {
      let count = item.count;
      if (param === '+') {
        count++;
      } else {
        count--;
      }
      if (count === 0) {
        return;
      }
      this.ProductStore.editCountProductToCart(item, count);
    }
  },
  mounted() {
    document.title = "Кошик|InVika";
  },
}
</script>