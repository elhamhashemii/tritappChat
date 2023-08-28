<template>
    <div class="h-full">
        <div class="top-0 mb-4">
            <CmHeader />
        </div>
        <div class="flex flex-col px-3">
            {{ chats }}
            <div v-for="message in chats" :key="message.sender" :class="message?.isMe ? 'self-end' : 'self-start'">
                {{ message.chats }}
                <ChatMessage :message="message" />
            </div>
        </div>
        <div class="sticky bottom-0 mt-4">
            <CmInput />
        </div>
    </div>
</template>

<script setup lang="ts">
import ChatMessage from '@/components/chat/message/ChatMessage.vue';
import CmHeader from './CmHeader.vue';
import CmInput from './CmInput.vue';
import mockApi from "@/mock/mock"

const { chats } = mockApi

</script>