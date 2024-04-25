<script setup lang="ts">
import { test } from '@jojoui/util';

function clickHandler() {
  test()
}
</script>

<template>
  <button @click="clickHandler">123123123</button>
</template>