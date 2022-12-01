<script setup>
// import App from '../App.vue';
import Actions from './Actions.vue';
import Message from './Message.vue';
import ProfileImage from './ProfileImage.vue';
import User from './User.vue';
import TimeStamp from './TimeStamp.vue';

const props = defineProps({
  tweet: Object,
});
console.log(props.tweet);
</script>

<template>

  <div class="tweet">
    <ProfileImage :image="props.tweet.user.image" />

    <div class="body">
      <div class="top">
        <User :user="props.tweet.user"/>
        <TimeStamp :timestamp="props.tweet.timestamp"/>
      </div>

      <Message :message="props.tweet.message" />

      <Actions/>
    </div>

    <i class="fas fa-ellipsis-h"></i>
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
