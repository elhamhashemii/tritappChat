<template>
    <div class="textfield">
        <input @keypress.enter="SendMessage" type="textarea" :placeholder="placeholder" v-model="msg">
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

interface IProps {
    placeholder?: string;
}
const props = defineProps<IProps>()
const placeholder = computed(() => props.placeholder || "placeholder")
const msg = ref("")
function SendMessage() { 
    console.log(msg.value)
    msg.value = ""
}

</script>

<style lang="scss" scoped>
@import url("@/assets/styles/dls/_textfield.scss");
</style>