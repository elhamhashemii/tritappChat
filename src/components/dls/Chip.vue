<template>
    <div class="app-chip" :class="classes">
        {{ text }}
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface IProps {
    filled?: boolean;
    color: 'primary' | 'danger';
    text: string;
}
const props = defineProps<IProps>()
const text = computed(() => props.text)
const color = computed(() => props.color)
const filled = computed(() => props.filled)

const classes = computed(() => (['chip', filled.value ? `chip_filled-${color.value}` : `chip_outlined-${color.value}`]))

</script>

<style lang="scss" scoped>
@import url("@/assets/styles/dls/_chip.scss");
</style>