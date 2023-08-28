<template>
  <div class="flex items-start justify-between">
    <div class="w-full md:basis-3/12">
      <ChatList @onActivate="activateChat" :items="chats" />
    </div>
    <div class="hidden md:block basis-9/12 border border-l-gray-200">
      <CmBody :messages="messages" />
    </div>
    <div v-if="showChat" class="absolute bg-white w-full border border-l-gray-200">
      <CmBody :messages="messages" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ChatList from './components/chat/ChatList.vue';
import CmBody from './components/chat/message/CmBody.vue';
import mockApi from "@/mock/mock"
import { computed, ref } from 'vue';

const { chats } = mockApi
const activeChat = ref(1)
const showChat = ref(false)
function activateChat(id: number) {
  activeChat.value = id
  showChat.value = true
}
const messages = computed(() => chats.value[activeChat.value]?.messages)

</script>