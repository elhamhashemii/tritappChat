<template>
    <div class="px-3 py-2 bg-gray-100 flex items-center justify-start gap-x-2">
        <div class="cursor-pointer" @click="BackToList">
            <ChevronLeftIcon class="text-primary w-5" />
        </div>
        <div>
            <Avatar :src="avatar3" size="md" />
        </div>
        <div class="text-start">
            <div class="text-sm mb-1">
                <span class="font-bold">Question:</span> <span>مشکلات فنی</span>
            </div>
            <div class="text-xs text-gray-500">last seen as 11:11 AM</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ChevronLeftIcon } from '@heroicons/vue/24/solid'
import Avatar from '../../dls/Avatar.vue';
const avatar3 = 'src/assets/img/avatar-2.png';

function BackToList() {
    window.location.reload()
    // I know this is not a good code at all, but I just ran out of time and stressed out, and couldn't spend time on it more :(
}
</script>