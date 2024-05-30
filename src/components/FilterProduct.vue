<template>
  <div>
    <v-container :fluid="true">
      <v-row>
        <v-col cols="12">
          <h2 style="font-weight: 600; font-size: 1.2rem;">Фільтри</h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <h3 style="font-weight: 600; font-size: 1.2rem;">Категорії</h3>
        </v-col>
        <v-col cols="12">
          <ul>
            <li
                v-for="category in categorys"
                :key="category.id"
                class="mt-2"
            >
              <input :id="getId('category', category.id)" type="checkbox" :value="category.id"
                     @input="ev => this.changeCategory(ev.target.checked, category.id)"/>
              <label :for="getId('category', category.id)" style="margin-left: 5px;">{{ category.name }}</label>
              <ul v-if="category.children" class="ml-4">
                <li v-for="child in category.children" class="mt-2">
                  <input :id="getId('category', child.id)" type="checkbox"
                         @input="ev => this.changeCategory(ev.target.checked, child.id)"/>
                  <label :for="getId('category', child.id)" style="margin-left: 5px;">{{ child.name }}</label>
                  <ul v-if="child.children" class="ml-4">
                    <li v-for="child2 in child.children" class="mt-2">
                      <input :id="getId('category', child2.id)" type="checkbox"
                             @input="ev => this.changeCategory(ev.target.checked, child2.id)"/>
                      <label :for="getId('category', child2.id)" style="margin-left: 5px;">{{ child2.name }}</label>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <h3 style="font-weight: 600; font-size: 1.2rem;">Розмір</h3>
        </v-col>
        <v-col cols="12">
          <ul>
            <li
                v-for="category in rozmirs"
                :key="category.id"
                class="mt-2"
            >
              <input :id="getId('variant', category.id)" type="checkbox"
                     @input="ev => this.changeRozmir(ev.target.checked, category.id)"/>
              <label :for="getId('variant', category.id)" style="margin-left: 5px;">{{ category.name }}</label>
            </li>
          </ul>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import {useProductStore} from "../stores/ProductStore.js";
import {ProductApi} from "../api/ProductApi.js";

export default {
  name: 'FilterProduct',

  data: () => ({
    ProductStore: useProductStore(),
    categorys: [],
    rozmirs: [],
  }),

  computed: {
    getCategorys() {

    }
  },
  methods: {
    getId(type, id) {
      return `${type}_${id}`;
    },
    async getCategory() {
      this.categorys = await ProductApi.getCategory();
    },
    async getAttribute() {
      this.rozmirs = await ProductApi.getAttribute('Розмір');
    },
    changeCategory(checked, id) {
      if (checked) {
        this.ProductStore.categoryId.push(id);

      } else {
        const index = this.ProductStore.categoryId.indexOf(id);
        this.ProductStore.categoryId.splice(index, 1);
      }
      this.ProductStore.downloadProduct(true);
    },
    changeRozmir(checked, id) {
      if (checked) {
        this.ProductStore.variantId.push(id);

      } else {
        const index = this.ProductStore.variantId.indexOf(id);
        this.ProductStore.variantId.splice(index, 1);
      }
      this.ProductStore.downloadProduct(true);
    }
  },
  async created() {
    await this.getCategory();
    await this.getAttribute();
  },
}
</script>