<template>
  <button @click="$emit('alertEmit')">Emit</button>
</template>

<script setup>
const emit = defineEmits(["alertEmit"]);
</script>

<style>

</style>