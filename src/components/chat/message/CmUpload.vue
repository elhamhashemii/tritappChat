<template>
    <Btn @click="uploadFile" icon="attach">
        <PaperClipIcon class="text-gray-500 w-5" />
    </Btn>
</template>

<script setup lang="ts">
import Btn from "@/components/dls/btn.vue"
import { PaperClipIcon } from '@heroicons/vue/24/outline'
function uploadFile() {
    window.alert("I couldn't manage my time to add functionality to this btn, I'm sorry. 😥")
}
</script>