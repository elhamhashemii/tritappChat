<template>
    <div class="avatar" :class="size">
       <img :src="img" alt="Avatar_img" />
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface IProps {
    img?: string;
    size?: 'sm' | 'md' | 'lg'
}
const props = defineProps<IProps>()
const img = computed(() => props.img || 'src/assets/img/no-avatar.png')
const size = computed(() => props.size || 'sm')

</script>

<style lang="scss" scoped>
@import url('@/assets/styles/dls/_avatar.scss');
</style>