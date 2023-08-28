<template>
    <div class="bg-white rounded p-2 border border-gray-400 flex items-center justify-start text-black gap-x-2 cursor-pointer">
        <div class="bg-gray-300 p-1 rounded">
            <DocumentIcon class="text-white w-9 font-bold" />
        </div>
        <div>{{ fileName }}</div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { DocumentIcon } from '@heroicons/vue/24/solid'

interface IProps {
    content: string;
}
const props = defineProps<IProps>()
const fileName = computed(() => props.content)
</script>