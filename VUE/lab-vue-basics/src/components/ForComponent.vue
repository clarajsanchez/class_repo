<template>
  FOR COMPONENT
  <h3>Titles: </h3> <br>
  <li v-for="post in posts" v-bind:class="{ 'red-text': post.isRed }">
    {{post.title}}
  </li>
</template>

<script>
export default {
    data() {
        return {
            posts: [
                {
                    title: "Lightyear",
                    description: "Toy Story Spin-Off",
                    content: "Astronaut",
                    isRed: true,
                },
                {
                    title: "Monsters INC",
                    description: "Blue & Green Monsters",
                    content: "Very scary things",
                    isRed: false,
                },
                {
                    title: "Aladdin",
                    description: "A lot of magic carpets",
                    content: "Sultan things",
                    isRed: true,
                },
            ]
        }
    }

}
</script>

<style>
.red-text{
    color: red;
}
</style>