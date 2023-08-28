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
            <ChatListItem v-for="chat in chats" :key="chat" class="border p-3" :title="chat?.chat?.name"
                :userName="chat?.recent?.user" :userMsg="chat?.recent.message" :userAvatar="chat?.chat?.avatarSrc">
            </ChatListItem>
        </div>
    </div>
</template>

<script setup lang="ts">
import CmSearch from '@/components/chat/message/CmSearch.vue';
import ChatListItem from './ChatListItem.vue';
import Btn from "@/components/dls/btn.vue"
import { FolderPlusIcon } from '@heroicons/vue/24/outline'
import mockApi from "@/mock/mock"

const { chats } = mockApi
// const messages = chats.value[1].messages

</script>