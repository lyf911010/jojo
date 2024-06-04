<script setup lang="ts">
import { hello } from '@jojo/shared';

const props = withDefaults(defineProps<{
    text: string
}>(), {
    text: 'world'
})

function handleClick(){
    hello(props.text)
}
</script>

<template>
    <button class="jojo-button" @click="handleClick">
        <slot></slot>
    </button>
</template>