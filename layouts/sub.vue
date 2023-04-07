<template>
  <div>
    <header class="h-16 flex items-center py-5 relative z-50">
      <button @click="$router.go(-1)" class="w-16 h-16">
        <span class="material-icons">arrow_back</span>
      </button>
    </header>

    <slot />
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>

</style>
