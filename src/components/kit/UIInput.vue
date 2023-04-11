<template>
  <v-text-field v-model="model" :label="label" :rules="rules" variant="outlined"></v-text-field>
</template>

<script lang="ts">
import { watch, ref, Ref } from 'vue'

export default {
  name: 'UIAutocomplete',

  model: {
    prop: 'modelValue',
    event: 'update:modelValue'
  },

  props: {
    label: {
      type: String,
      default: 'Значение'
    },

    modelValue: {
      type: Number,
      default: 0
    }
  },

  setup(props, { emit }) {
    const model: Ref<any> = ref(0)

    const rules = [
      (value: any) => {
        if (!value) return

        if (!/^[0-9.]*$/.test(value)) {
          model.value = model.value.slice(0, model.value.length - 1)
          return 'Only numbers and dots allowed'
        }

        if (value.length > 6) {
          model.value = model.value.slice(0, model.value.length - 1)
          return 'Maximum of 6 characters allowed'
        }

        return true
      }
    ]

    watch(
      () => props.modelValue,
      (value) => {
        model.value = value
      },
      { immediate: true }
    )

    watch(
      () => model.value,
      (value) => {
        emit('update:modelValue', value)
      }
    )
    return { model, rules }
  }
}
</script>

<style scoped></style>
