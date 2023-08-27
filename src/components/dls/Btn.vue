<template>
    <div class="app-btn" :class="`btn_${color}`">
        <div v-if="icon" class="flex items-center justify-center">
            <slot />
        </div>
        <div v-else>{{ text }}</div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface IProps {
    text?: string;
    color?: 'white' | 'primary' | 'danger';
    icon?: string;
}
const props = defineProps<IProps>()
const text = computed(() => props.text || 'No Text')
const color = computed(() => props.color || 'white')
const icon = computed(() => props.icon || false)

</script>

<style lang="scss" scoped>
@import url('@/assets/styles/dls/_btn.scss');
</style>