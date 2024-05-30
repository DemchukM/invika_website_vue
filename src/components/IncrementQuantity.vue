<template>
  <v-container fluid align="center" style="vertical-align: middle;">
    <v-row>
      <v-col cols="5">
        <div @click="decrement" class="btn-increment">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill="currentColor" d="M19 12.998H5v-2h14z"/>
          </svg>
        </div>
      </v-col>
      <v-col style="font-size: 18px;" cols="2">
        <span>{{ count }}</span>
      </v-col>
      <v-col cols="5">
        <div @click="increment" class="btn-increment">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill="currentColor" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"/>
          </svg>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'IncrementQuantity',
  props: {
    count: {
      type: Number,
      default: 1
    }
  },
  emits: {
    updateCount: () => {
      return true;
    }
  },
  methods: {
    increment() {
      this.$emit('updateCount', '+');
    },
    decrement() {
      this.$emit('updateCount', '-');
    }
  },
}
</script>