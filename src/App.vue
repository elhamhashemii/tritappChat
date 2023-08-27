<template>
  <div class="flex items-start justify-between">
    <div class="basis-3/12">
      <ChatList />
    </div>
    <div class="basis-9/12 border border-l-gray-200">
      <CmBody />
    </div>
  </div>
</template>

<script setup lang="ts">
import ChatList from './components/chat/ChatList.vue';
import CmBody from './components/chat/message/CmBody.vue';

</script>