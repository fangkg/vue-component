<template>
  <div v-if="show">
      <strong>
          <slot name="title"></slot>
          <slot></slot>
      </strong>
  </div>
</template>

<script>
export default {
    name: 'msgDialogVSlotName',
    props: ['show']
}

</script>
<style>
</style>