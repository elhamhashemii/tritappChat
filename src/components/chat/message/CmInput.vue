<template>
    <div class="bg-gray-200 px-3 py-2 flex items-stretch justify-end gap-x-1">
        <div>
            <CmUpload />
        </div>
        <div class="w-full">
            <TextField  placeholder="Type a message . . ." />
        </div>
        <div>
            <Btn icon="mic">
                <MicrophoneIcon class="text-gray-500 w-5" />
            </Btn>
        </div>
    </div>
</template>

<script setup lang="ts">
import TextField from '../../dls/TextField.vue';
import Btn from "@/components/dls/btn.vue"
import { MicrophoneIcon } from '@heroicons/vue/24/outline'
import CmUpload from './CmUpload.vue';

</script>