<template>
    <div class="h-full">
        <div class="top-0 mb-4">
            <CmHeader />
        </div>
        <div class="flex flex-col px-3">
            <div v-for="message in messages" :key="message.sender" :class="message?.isMe ? 'self-end' : 'self-start'">
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

const messages = [
    {
        isMe: false,
        sender: 'Mahdi Hashemi',
        time: '07:23',
        contentType: 'file',
        content: 'اسامی شرکت کنندگان دوره مقدماتی.xlsx',
        isForwarderd: true,
        forwardedFrom: 'Elahe Mohammadi Nia'
    },
    {
        isMe: false,
        sender: 'Mahdi Hashemi',
        time: '07:23',
        contentType: 'img',
        content: 'src/assets/img/avatar-1.jpg'
    },
    {
        isMe: true,
        sender: 'Elham Hashemi',
        time: '07:23',
        contentType: 'text',
        content: 'لورم مجله در ستون و سطرآنچنان که لازم است'

    },
    {
        isMe: false,
        sender: 'Mahdi Hashemi',
        time: '07:23',
        contentType: 'text',
        content: 'لورم مجله در ستون و سطرآنچنان که لازم است'

    }, {
        isMe: false,
        sender: 'Mahdi Hashemi',
        time: '07:23',
        contentType: 'text',
        content: 'لورم مجله در ستون و سطرآنچنان که لازم است'

    }
]
</script>