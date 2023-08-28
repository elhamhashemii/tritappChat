<template>
    <div class="h-full">
        <div class="top-0 mb-4">
            <CmHeader />
        </div>
        <div class="flex flex-col px-3">
            <div v-for="message in messages" :key="message.messages?.sender"
                :class="message?.isMe ? 'self-end' : 'self-start'">
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
import messageItem from "@/type/message"
import { computed } from 'vue';

// It should have a messages props
interface IProps {
    messages: messageItem[]
}
const props = defineProps<IProps>()
const message = computed(() => props.messages)

</script>