<template>
    <div>{{ message }}</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface IProps {
    content: string;
}
const props = defineProps<IProps>()
const message = computed(() => props.content)
</script>