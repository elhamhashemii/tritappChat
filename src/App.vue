<template>
  <div class="text-3xl text-center">
    TritAppChat
    <Avatar :img="avatar3" size="sm" />
    <AppBtn icon="icon" color="primary" />
    <Chip color="danger" text="1234" />
    <TextField placeholder="Type a message ..." />
  </div>
</template>

<script setup lang="ts">
import Avatar from '@/components/dls/Avatar.vue';
import AppBtn from '@/components/dls/Btn.vue';
import Chip from '@/components/dls/Chip.vue';
import TextField from '@/components/dls/TextField.vue';

const avatar3 = 'src/assets/img/avatar-2.png'
</script>