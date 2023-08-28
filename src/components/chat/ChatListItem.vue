<template>
    <div class="flex items-stretch gap-x-3 justify-start cursor-pointer">
        <slot></slot>
        <div>
            <Avatar :src="userAvatar" size="lg" />
        </div>
        <div class="basis-full">
            <div class="text-sm font-semibold">{{ title }}</div>
            <div class="text-xs">
                <span class="font-bold">{{ userName }} :</span> <span class="text-gray-500"> {{ userMsg }}</span>
            </div>
            <div class="flex items-center gap-x-2 mt-1">
                <Chip v-for="chipItem in chips" :key="chipItem.title" :color="chipItem.color" :text="chipItem.title" />
            </div>
        </div>
        <div class="basis-3/12 relative">
            <div class="text-xs text-gray-400 text-end">{{ date }}</div>
            <div class="absolute bottom-0 right-0">
                <ChevronDownIcon class="text-gray-400 w-4" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ChevronDownIcon } from '@heroicons/vue/24/outline'
import Avatar from '../dls/Avatar.vue';
import Chip from '../dls/Chip.vue';
import { computed } from 'vue';

interface IProps {
    title: string;
    userName: string;
    userMsg: string;
    userAvatar: string;
    chips: { color: string; title: string; }[];
    date: string;
}

const props = defineProps<IProps>()
const title = computed(() => props.title)
const userName = computed(() => props.userName)
const userMsg = computed(() => props.userMsg)
const userAvatar = computed(() => props.userAvatar)
const chips = computed(() => props.chips)
const date = computed(() => props.date)

</script>