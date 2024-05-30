<template>
  <VueFlux
      class="w-[100px] h-[100px]"
      :options="vfOptions"
      :rscs="vfRscs"
      :transitions="vfTransitions"
      ref="vueFlux">

    <template #preloader="preloaderProps">
      <FluxPreloader v-bind="preloaderProps"/>
    </template>

    <template #caption="captionProps">
      <FluxCaption v-bind="captionProps"/>
    </template>

    <template #controls="controlsProps">
      <FluxControls v-bind="controlsProps"/>
    </template>

    <template #pagination="paginationProps">
      <FluxPagination v-bind="paginationProps"/>
    </template>

    <template #index="indexProps">
      <FluxIndex v-bind="indexProps"/>
    </template>
  </VueFlux>

  <button @click="$refs.vueFlux.show('next')">NEXT</button>
</template>

<script>
import {shallowReactive} from 'vue';
import {
  VueFlux,
  FluxCaption,
  FluxControls,
  FluxIndex,
  FluxPagination,
  FluxPreloader,
  Img,
  Book,
  Zip,
} from 'vue-flux';
import 'vue-flux/style.css';


export default {
  name: "ImageSlider",
  components: {
    VueFlux,
    FluxCaption,
    FluxControls,
    FluxIndex,
    FluxPagination,
    FluxPreloader,
    Img,
    Book,
    Zip,
  },
  props: {
    images: {
      type: Array,
      default: () => [],
    },
  },
  data: () => {
    return {
      vfOptions: shallowReactive({
        autoplay: true,
      }),
    }
  },
  computed: {
    vfRscs() {
      return shallowReactive(this.images.map((item) => {
        return new Image(item.src);
      }));
    },
    vfTransitions() {
      return shallowReactive([
        Book,
        Zip,
      ]);
    },
  },
}

</script>