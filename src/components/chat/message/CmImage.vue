<template>
    <div class="relative">
        <div class="flex items-center justify-center">
            <img :class="blurredImg ? 'blur-sm' : ''" :src="img" :alt="img">
            <div @click="removeBlur" v-if="blurredImg"
                class="absolute bg-gray-400 w-9 h-9 rounded-full flex items-center justify-center cursor-pointer">
                <ArrowDownIcon class="text-white w-5" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { ArrowDownIcon } from '@heroicons/vue/24/outline'

interface IProps {
    content: string;
}
const props = defineProps<IProps>()
const img = computed(() => props.content)
const blurredImg = ref(true)
function removeBlur() {
    blurredImg.value = false
}

</script>