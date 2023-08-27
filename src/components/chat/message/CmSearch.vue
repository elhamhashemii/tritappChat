<template>
    <div class="search">
        <div class="search__input">
            <div>
                <MagnifyingGlassIcon class="text-gray-400 w-5" />
            </div>
            <div>
                <input type="text" placeholder="search">
            </div>
        </div>
        <div class="search__filter">
            <Bars3CenterLeftIcon class="text-gray-500 w-5" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline'
import { Bars3CenterLeftIcon } from '@heroicons/vue/24/outline'

</script>

<style lang="scss" scoped>
@import url("@/assets/styles/chat/_search.scss");
</style>