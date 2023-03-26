<template>
  <v-text-field class="input" v-model="model" :label="label" variant="outlined"></v-text-field>
</template>

<script lang="ts">
import { computed, watch, ref, Ref } from 'vue'

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
    // hint: {
    //   type: String,
    //   default: 'Значение'
    // },
    modelValue: {
      type: Number,
      default: 0
    }
  },

  setup(props, { emit }) {
    const model: Ref<number> = ref(0)

    const onValidation = (v) => {
      // return [(v) => typeof v === Number || 'Field is required']
      // return [() => '']
      // return [
      //   (v) => {
      //     if (typeof v === String) {
      //       console.log('!!', v)
      //       model.value = ''
      //       return 'Field is required'
      //     }
      //     // ||
      //   }
      // ]
    }

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
    return { model, onValidation }
  }
}
</script>

<style scoped>
.input {
  height: 20px;
  width: 220px;
  /* color: white; */
}
</style>
