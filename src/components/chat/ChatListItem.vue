<template>
    <div class="flex items-stretch gap-x-3 justify-start cursor-pointer" @click="showChat">
        <div>
            <Avatar :src="userAvatar" size="lg" />
        </div>
        <div class="basis-full">
            <div class="text-sm font-semibold">{{ title }}</div>
            <div class="text-xs">
                <div class="font-bold">{{ userName }} :</div> <p class="text-gray-500"> {{ userMsg }}</p>
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
import { chatListItem } from "@/types/chat"

interface IProps {
    item: chatListItem
}

const props = defineProps<IProps>()
const item = computed(() => props.item)
const title = computed(() => item.value?.chat?.name)
const userName = computed(() => item.value?.recent?.user)
const userMsg = computed(() => item.value?.recent?.message)
const userAvatar = computed(() => item.value?.chat?.avatarSrc)
const chips = computed(() => item.value?.chips)
const date = computed(() => item.value?.chat?.date)

const emits = defineEmits(['onShowChat'])

function showChat() {
    emits('onShowChat', item.value.chat.id)
}

</script>