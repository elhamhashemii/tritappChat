<template>
    <div class="avatar" :class="`avatar_${size}`">
        <img v-if="!!img" :src="img" />
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface IProps {
    src?: string;
    size?: 'sm' | 'md' | 'lg'
}
const props = defineProps<IProps>()
const img = computed(() => props.src || 'src/assets/img/no-avatar.png')
const size = computed(() => props.size || 'sm')

</script>

<style lang="scss" scoped>
@import url('@/assets/styles/dls/_avatar.scss');
</style>