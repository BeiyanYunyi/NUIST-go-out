<template>
  <div>
    <label>
      {{ selfLabel }}
      <input
        :value="modelValue"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      />
    </label>
  </div>
</template>
<script setup lang="ts">
defineProps<{ modelValue: string; selfLabel: string }>();
defineEmits(['update:modelValue']);
</script>
