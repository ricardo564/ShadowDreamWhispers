<script>
export default {
  props: {
    labelStyle: {
      type: String,
      default: null,
    },
    type: {
      type: String,
      default: 'button',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: null,
    },
    icon: {
      type: String,
      default: null,
    },
  },
}
</script>

<template>
  <button
    class="tracking-widest text-black flex gap-2 p-4 transition-all ease-in-out duration-250 items-center hover:(bg-gray-300) disabled:opacity-25"
    :type="type"
    :disabled="disabled"
  >
    <em
      v-if="icon"
      :class="icon"
    />
    <span
      v-if="label"
      :class="labelStyle"
    >
      {{ label }}
    </span>
    <slot />
  </button>
</template>
