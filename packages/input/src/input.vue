<script setup lang="ts">
import { hello } from '@jojo/shared'

withDefaults(defineProps<{
    modelValue?: string
}>(), {
    modelValue:''
})

const emit = defineEmits<{
    (event: 'update:modelVale', val:string):void
}>()

function handleInput(e: any){
    const value: string = e.target.value
    emit('update:modelVale', value)
    hello(value)
}
</script>
<template>
    <input
        class="jojo-input"
        type="text"
        :value="modelValue"
        @input="handleInput"/>
</template>