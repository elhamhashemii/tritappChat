<template>
  <div class="text-3xl text-center">
    TritAppChat
    <Avatar :img="avatar3" size="lg" />
  </div>
</template>

<script setup lang="ts">
import Avatar from '@/components/dls/Avatar.vue';
const avatar3 = 'src/assets/img/avatar-2.png'
</script>