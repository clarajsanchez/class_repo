<template>
  <h1>Hola :)</h1>
  <ChildComponent/>
</template>

<script setup>
import ChildComponent from './ChildComponent.vue';

function emitir() {
    alert('Emit realizado con éxito! :)');
}

</script>

<style>

</style>