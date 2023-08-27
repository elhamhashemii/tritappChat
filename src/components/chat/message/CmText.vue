<template>
    <div>{{ message }}</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface IProps {
    message: string;
}
const props = defineProps<IProps>()
const message = computed(() => props.message)
</script>