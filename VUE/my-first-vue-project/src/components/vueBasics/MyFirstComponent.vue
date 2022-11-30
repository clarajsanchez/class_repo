


<template>
    <p>My name is Clara :))</p>
    <p>Name: {{myInfo.name}} <br> Age: {{myInfo.age}} <br> Born in: {{myInfo.dateOfBirth}} <br> My fav hobbies are: {{myInfo.hobbies[0]}}, {{myInfo.hobbies[1]}} and {{myInfo.hobbies[2]}}</p>
    <p>Fav Movie: {{favMovie}}</p>
</template>

<script setup>

import { ref, reactive } from "vue";

const myInfo = reactive({
    name: "Clara",
    age: 24,
    dateOfBirth: "12/08/98",
    hobbies: ['padel', 'sleeping', 'partying']
});

const favMovie = ref("movie");
const favFood = ref("pasta");
const favMovieTimes = ref(20);


</script>

<style></style>