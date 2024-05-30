<template>

  <div class="flex flex-col">
    <div>
      <div
        v-for="(item, index) in variants"
        :key="item.id"
        class="flex justify-between items-center border-b border-gray-300 py-2 px-2 hover:bg-gray-200"
        :class="{
          'bg-gray-100': index % 2 === 0,
        }"
      >
        <span class="text-[14px]">{{ item.name }}</span>
        <span class="text-[14px]">{{ item.price }} грн.</span>
        <button
            @click="addProductToCart(item)"
            class="bg-orange-400 text-white px-2 py-1 rounded-md"
        >
          Купити
        </button>
      </div>
    </div>

  </div>


<!--  <v-container fluid align="center">-->
<!--    <v-row>-->
<!--      <v-col cols="12" style="padding: 0px !important;">-->
<!--        <v-select-->
<!--            v-model="variant"-->
<!--            :items="variants"-->
<!--            item-title="name"-->
<!--            item-value="id"-->
<!--            density="compact"-->
<!--            return-object-->
<!--        >-->
<!--        </v-select>-->
<!--      </v-col>-->
<!--      <v-col cols="12" style="padding: 0px !important;">-->
<!--        <span style="font-size: 1.3rem;"><strong>Ціна: {{ getPrice }} грн.</strong></span>-->
<!--      </v-col>-->
<!--      <v-col cols="12" style="padding: 0px 10px !important;">-->
<!--        <increment-quantity-->
<!--            @update-count="incrementCount"-->
<!--            :count="count"-->
<!--        ></increment-quantity>-->
<!--      </v-col>-->
<!--      <v-col cols="12" style="padding: 0px 10px !important;">-->
<!--        <v-btn-->
<!--            @click="addProductToCart"-->
<!--            class="w-100 my-4 my-btn"-->
<!--        >-->
<!--          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">-->
<!--            <path fill="currentColor"-->
<!--                  d="M11 9V6H8V4h3V1h2v3h3v2h-3v3h-2ZM7 22q-.825 0-1.413-.588T5 20q0-.825.588-1.413T7 18q.825 0 1.413.588T9 20q0 .825-.588 1.413T7 22Zm10 0q-.825 0-1.413-.588T15 20q0-.825.588-1.413T17 18q.825 0 1.413.588T19 20q0 .825-.588 1.413T17 22ZM7 17q-1.125 0-1.725-.988T5.25 14.05L6.6 11.6L3 4H1V2h3.275l4.25 9h7.025l3.875-7l1.75.95l-3.875 7q-.275.5-.725.775T15.55 13H8.1L7 15h12v2H7Z"/>-->
<!--          </svg>-->
<!--          Купити-->
<!--        </v-btn>-->
<!--      </v-col>-->
<!--    </v-row>-->

<!--  </v-container>-->
</template>

<script>
import  IncrementQuantity from "./IncrementQuantity.vue";

export default {
  name: 'ProductVariant',
  components: {
    IncrementQuantity
  },
  computed: {
        checkVariants() {
            return this.variants.length > 0;
        },
        getPrice() {
            return this.variant.price * this.count;
        }
    },
    methods: {
        incrementCount(param) {
            console.log(this, '111');
            if (param === "+") {
                this.count ++;
            } else {
                if (this.count > 1) {
                    this.count --;
                }
            }
        },
        addProductToCart() {
            this.$emit('buy', {
                variant: this.variant,
                count: this.count,
            });
        },
    },
    data() {
        return {
            variant: {},
            count: 1,
        }
    },
    props: {
        variants: {
            type: Array,
            required: true,
        },
        selected: {
            type: Number,
            required: true
        }
    },
    created() {
        this.variant = this.variants[this.selected];
    },
}
</script>