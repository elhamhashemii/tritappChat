<template>
    <div>
        <div class="list-header flex items-center justify-between gap-x-2 py-2 px-3">
            <div class="w-full">
                <CmSearch />
            </div>
            <div>
                <Btn icon="addPeople" color="primary">
                    <FolderPlusIcon class="text-primary w-6" />
                </Btn>
            </div>

        </div>
        <div class="list-items">
            <ChatListItem v-for="chat in items" :key="chat" class="border p-3" :title="chat?.chat?.name"
                :userName="chat?.recent?.user" :userMsg="chat?.recent.message" :userAvatar="chat?.chat?.avatarSrc" :chips="chat?.chips" :date="chat?.chat.date">
            </ChatListItem>
        </div>
    </div>
</template>

<script setup lang="ts">
import CmSearch from '@/components/chat/message/CmSearch.vue';
import ChatListItem from './ChatListItem.vue';
import Btn from "@/components/dls/btn.vue"
import { FolderPlusIcon } from '@heroicons/vue/24/outline'
import messageItem from "@/type/message"
import { computed } from 'vue';

interface IProps {
    items: {
        chats: { id: number; name: string; avatarSrc: string; }
        recent: { user: string; message: string; }
        chips: { title: string; color: string; }[]
        messages: messageItem[]
    }[]
}
const props = defineProps<IProps>()
const items = computed(() => props.items)

</script>