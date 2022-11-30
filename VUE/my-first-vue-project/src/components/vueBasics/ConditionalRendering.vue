<!-- Ej.3***: Creamos una variable reactiva que contenga un objeto con vuestro nombre (string), vuestra edad (number) y una key hasCodedBefore (boolean) la cual será true or false dependiendo de si antes del bootcamp habíais picado código o no. 
Después creamos otra variable reactiva booleánica que podéis llamar show, por ejemplo. Según si show está en true or false, en vuestro template deberíais enseñar o no una pequeña biografía. 
Esta biografía, a su vez, constará primero de vuestro nombre como título. Después tendrá un <p> que se renderizará de manera condicional. En caso de que vuestra edad sea superior a 18 enseñaremos la frase "I am an adult! :)"; en caso contrario, enseñaremos "I'm still a minor :(". 
  Finalmente, según si hasCodedBefore es true or false también renderizaréis "I am still a newbie to code but I'm learning fast" o "This is not my first time at the javascript rodeo". -->


<template>
  <h1>{{myInfo.name}}</h1>
  <p v-if="show">{{myInfo}}</p>
  
  <p v-if="myInfo.age > 18">I am an adult! :)</p>
  <p v-else>"I'm still a minor :("</p>

  <p v-if="myInfo.hasCodedBefore">This is not my first time at the javascript rodeo</p>
  <p v-else>I am still a newbie to code but I'm learning fast</p>
</template>

<script setup>
import { ref, reactive } from "vue";
const myInfo = reactive({
    name: "Clara",
    age: 24,
    hasCodedBefore: true,
});
const show = ref(true);


</script>

<style>

</style>