<template>
    <div class="message">
        <div v-if="!isMe">
            <Avatar :src="avatar3" />
        </div>
        <div :class="isMe ? 'message__mine' : 'message__others'">
            <div class="message_title">
                <div class="text-start">
                    <div>{{ sender }}</div>
                    <div v-if="isForwarderd">
                        <div class="text-secondary font-bold">
                            <div>Forwarded Message:</div>
                            <div>From: <span class="font-bolder">{{ forwardedFrom }}</span></div>
                        </div>
                    </div>
                </div>
                <div>
                    <ChevronDownIcon class="w-2" :class="isMe ? 'text-white' : 'text-gray-500'" />
                </div>
            </div>
            <div class="message_content">
                <CmText v-if="contentType === 'text'" :content="content" />
                <CmFile v-if="contentType === 'file'" :content="content" />
                <CmImage v-if="contentType === 'img'" :content="content" />
            </div>
            <div class="message_time" :class="isMe ? 'text-end' : 'text-start'">{{ time }}</div>
        </div>
        <div v-if="isMe">
            <Avatar :src="avatar3" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import Avatar from '@/components/dls/Avatar.vue';
import { ChevronDownIcon } from '@heroicons/vue/24/outline'
import CmText from '@/components/chat/message/CmText.vue';
import CmImage from '@/components/chat/message/CmImage.vue';
import CmFile from '@/components/chat/message/CmFile.vue';
import messageItem from "@/type/message"

interface IProps {
    message: messageItem
}

const props = defineProps<IProps>()
const isMe = computed(() => props.message?.isMe || false)
const sender = computed(() => props.message?.sender)
const contentType = computed(() => props.message?.contentType)
const content = computed(() => props.message?.content)
const time = computed(() => props.message?.time)
const isForwarderd = computed(() => props.message?.isForwarderd || false)
const forwardedFrom = computed(() => props.message?.forwardedFrom)

const avatar3 = 'src/assets/img/avatar-2.png'

</script>

<style lang="scss" scoped>
@import url("@/assets/styles/chat/_message.scss");
</style>