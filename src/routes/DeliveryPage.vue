<template>
  <v-container>
    <v-row>
      <v-col cols="12" style="text-align: center; font-size: 1.2rem; font-weight: 600;">
        <h1>Дані доставки</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col
          cols="12"
          :xs="12"
          :sm="12"
          :md="9"
          :lg="9"
          :xl="9"
          :xxl="9"
      >
        <v-container>

          <v-row>
            <v-col
                cols="12"
                :xs="12"
                :sm="12"
                :md="6"
                :lg="6"
                :xl="6"
                :xxl="6"
            >
              <v-text-field
                  v-model="first_name"
                  label="Введіть Прізвище"
                  required
              ></v-text-field>
            </v-col>
            <v-col
                cols="12"
                :xs="12"
                :sm="12"
                :md="6"
                :lg="6"
                :xl="6"
                :xxl="6"
            >
              <v-text-field
                  v-model="last_name"
                  label="Введіть Ім'я"
                  required
              ></v-text-field>
            </v-col>
            <v-col
                cols="12"
                :xs="12"
                :sm="12"
                :md="6"
                :lg="6"
                :xl="6"
                :xxl="6"
            >
              <v-text-field
                  v-model="phone"
                  label="Введіть номер телефону"
                  required
              ></v-text-field>
            </v-col>
            <v-col
                cols="12"
                :xs="12"
                :sm="12"
                :md="6"
                :lg="6"
                :xl="6"
                :xxl="6"
            >
              <v-select
                  v-model="area"
                  label="Виберіть область"
                  :items="areaList"
                  item-title="name"
                  item-value="id"
                  @change="ev => getCity()"
              ></v-select>
            </v-col>
            <v-col
                cols="12"
                :xs="12"
                :sm="12"
                :md="6"
                :lg="6"
                :xl="6"
                :xxl="6"
                v-if="area"
            >
              <v-autocomplete
                  label="Виберіть місто"
                  v-model="city"
                  :items="cityList"
                  item-title="name"
                  item-value="id"
              ></v-autocomplete>
            </v-col>
            <v-col
                cols="12"
                :xs="12"
                :sm="12"
                :md="6"
                :lg="6"
                :xl="6"
                :xxl="6"
                v-if="city"
            >
              <v-autocomplete
                  label="Виберіть відділення або поштомат"
                  v-model="address"
                  :items="addressList"
                  item-title="name"
                  item-value="id"
              ></v-autocomplete>
            </v-col>
            <v-col
                cols="12"
                :xs="12"
                :sm="12"
                :md="6"
                :lg="6"
                :xl="6"
                :xxl="6"
            >
              <v-select
                  v-model="payment"
                  label="Виберіть вид оплати"
                  :items="payments"
              ></v-select>
            </v-col>
            <v-col
                cols="12"
                :xs="12"
                :sm="12"
                :md="6"
                :lg="6"
                :xl="6"
                :xxl="6"
            >
              <v-text-field
                  v-model="comment"
                  label="Коментар"
              ></v-text-field>
            </v-col>

          </v-row>

        </v-container>
      </v-col>
      <v-col
          cols="12"
          :xs="12"
          :sm="12"
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
              <p>
                <span class="subtitle">ПІБ:</span> {{ first_name }} {{ last_name }}
              </p>
              <p>
                <span class="subtitle">Телефон:</span> {{ phone }}
              </p>
              <p>
                <span class="subtitle">Область:</span> {{ getNameItems(areaList, area) }}
              </p>
              <p>
                <span class="subtitle">Місто:</span> {{ getNameItems(cityList, city) }}
              </p>
              <p>
                <span class="subtitle">Відділення:</span> {{ getNameItems(addressList, address) }}
              </p>
              <p>
                <span class="subtitle">Вид оплати:</span> {{ payment }}
              </p>
              <p>
                <span class="subtitle">Коментар:</span> {{ comment }}
              </p>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-btn
                  class="my-btn-color-confirm-cart"
                  @click="clickConfirm"
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
                  @click="ev => $router.push('/cart')"
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
</template>

<script>
import {useProductStore} from "../stores/ProductStore.js"
import {ProductApi} from "../api/ProductApi.js";

export default {
  name: 'DeliveryPage',

  data: () => ({
    ProductStore: useProductStore(),
    payments: [
      'Повна передоплата',
      'Накладений платіж з передоплатою 100грн',
    ],
    first_name: '',
    last_name: '',
    phone: '',
    area: '',
    city: '',
    address: '',
    comment: '',
    payment: '',
    areaList: [],
    cityList: [],
    addressList: [],
  }),

  methods: {
    clickConfirm: function () {
      const param = {
        first_name: this.first_name,
        last_name: this.last_name,
        phone: this.phone,
        area: this.area,
        city: this.city,
        address: this.address,
        payment: this.payment,
        comment: this.comment,
      }
      const response = this.ProductStore.createOrder(param);
      this.ProductStore.clearCart();
      this.$router.push('/sucsses');
    },
    async getCity(id) {
      this.cityList = await ProductApi.getCity(id);
    },
    async getAddress(id) {
      this.addressList = await ProductApi.getAddress(id);
    },
    getNameItems(items, id) {
      return items.find(item => item.id === id)?.name || '';
    }
  },
  async created() {
    this.areaList = await ProductApi.getArea();
  },
  watch: {
    area: function (newValue) {
      this.getCity(newValue);
    },
    city: function (newValue) {
      this.getAddress(newValue);
    },
  },
  mounted() {
    document.title = "Деталі доставки|InVika";
  }
}
</script>