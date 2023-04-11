<template>
  <section class="yandex-map-wrapper">
    <v-progress-circular
      v-show="isLoad"
      indeterminate
      class="progress-circular"
      size="80"
    ></v-progress-circular>
    <div v-show="!isLoad" id="map-container" style="width: 600px; height: 400px"></div>
    <UIButton />
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, Ref, watch } from 'vue'
import useYampStore from '@/stores/yamp.store'

export default defineComponent({
  name: 'YandexMap',

  setup(props) {
    const isLoad: Ref<boolean> = ref(true)
    const store = useYampStore()

    let map = null as any

    //
    // Карты: Старт.
    //
    const getMap = async () => {
      map = new store.maps.Map('map-container', {
        center: [55.755864, 37.617698],
        zoom: 6
      })
      setMap()
    }

    //
    // Установка точек на карту
    //
    const setMap = () => {
      if (store.pointA === '' || store.pointB === '') return
      store.maps
        .route([store.pointA, store.pointB], {
          mapStateAutoApply: true
        })
        .then(function (route: any) {
          store.distanceBetweenPoints = Math.ceil(route.getLength() / 1000)

          route.getPaths().options.set({
            // балун показывает только информацию о времени в пути с трафиком
            balloonContentLayout: store.maps.templateLayoutFactory.createClass(
              '{{ properties.humanJamsTime }}'
            ),
            // вы можете настроить внешний вид маршрута
            strokeColor: '0000ffff',
            opacity: 0.9
          })
          // добавляем маршрут на карту
          map.geoObjects.add(route)
        })
    }

    watch(
      () => [store.pointA, store.pointB],
      () => setMap()
    )

    onMounted(async () => {
      await store.load()
      getMap()
      isLoad.value = false
    })

    return { isLoad }
  }
})
</script>

<style>
.yandex-map-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.progress-circular {
  color: hsla(160, 100%, 37%, 1);
}
</style>
