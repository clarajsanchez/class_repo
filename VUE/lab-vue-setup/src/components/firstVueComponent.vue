<template>
    <p>My name is Clara :)</p>
    <button id="hello" v-on:click="helloWorld">Click here!</button>
    <!-- <p id="demo"></p> -->
</template>

<script>
export default {
    methods:{
        helloWorld() {
            console.log("Hello world");
            // document.getElementById("demo").innerHTML = "Hello World";
        },
    }
}
</script>

<style>

</style>