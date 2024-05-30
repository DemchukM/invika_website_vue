<template>
  <teleport to="#modal">
    <div
        class="fixed inset-0 bg-gray-950 bg-opacity-80 flex justify-center items-center"
        @click="$emit('close')"
    >
      <div
          class="bg-white p-4 rounded-lg relative"
          @click.stop
      >
        <div>
          <slot></slot>
        </div>
        <button @click="$emit('close')" class="absolute top-0 right-0 mr-2 text-[25px] text-gray-500">
          &times;
        </button>
      </div>
    </div>
  </teleport>
</template>

<script>


export default {
  name: 'BaseModal',
  emits: ['close'],
}
</script>