<template>
    <div class="textfield">
        <input type="textarea" :placeholder="placeholder">
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface IProps {
    placeholder?: string;
}
const props = defineProps<IProps>()
const placeholder = computed(() => props.placeholder || "placeholder")

</script>

<style lang="scss" scoped>
@import url("@/assets/styles/dls/_textfield.scss");
</style>