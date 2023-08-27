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
            <ChatListItem v-for="i in 9" :key="i" class="border p-3">chatListItem</ChatListItem>
        </div>
    </div>
</template>

<script setup lang="ts">
import CmSearch from '@/components/chat/message/CmSearch.vue';
import ChatListItem from './ChatListItem.vue';
import Btn from "@/components/dls/btn.vue"
import { FolderPlusIcon } from '@heroicons/vue/24/outline'

</script>