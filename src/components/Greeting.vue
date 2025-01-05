<script setup>
import { ref } from 'vue'
const props = defineProps({
  messages: Array
})
const greeting = ref(props.messages[0])
const setGreeting = (message) => {
  greeting.value = message
}
const randomMessage = () => props.messages[(Math.floor(Math.random() * props.messages.length))];
</script>
<template>
  <div>
    <h3>{{ greeting }}! Thank you for visiting!</h3>
      <button @click="setGreeting(randomMessage())">
        New Greeting
      </button>
  </div>
</template>
<style scoped></style>
