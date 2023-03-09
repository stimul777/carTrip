<template>
  <section class="yandex-map-wrapper">
    <v-progress-circular
      v-show="isLoad"
      indeterminate
      class="progress-circular"
      size="80"
    ></v-progress-circular>
    <div v-show="!isLoad" id="map-container" style="width: 600px; height: 400px"></div>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, Ref } from 'vue'
import ymaps from 'ymaps'

export default defineComponent({
  name: 'YandexMap',
  props: {
    pointA: {
      type: String,
      default: 'Москва'
    },
    pointB: {
      type: String,
      default: 'Санкт-Петербург'
    }
  },

  setup(props) {
    const isLoad: Ref<boolean> = ref(true)
    const _key = import.meta.env.VITE_API_KEY_MAP

    //
    // Получение яндекс карт
    //
    const getMap = async () => {
      await ymaps
        .load(`https://api-maps.yandex.ru/2.1/?apikey=${_key}&load=package.full&lang=ru_RU`)
        .then((maps: any) => {
          isLoad.value = false
          const map = new maps.Map('map-container', {
            center: [55.755864, 37.617698],
            zoom: 6
          })
          setMap(maps, map)
          //Поисковые подсказки
          // maps.suggest('мыт').then(function (items) {
          //   console.log('items', items)
          //   // items - массив поисковых подсказок.
          // })
        })
        .catch((error: any) => console.log('Failed to load Yandex Maps', error))
    }

    //
    // Установка точек на карту
    //
    const setMap = (maps, map) => {
      maps
        .route([props.pointA, props.pointB], {
          mapStateAutoApply: true
        })
        .then(function (route: any) {
          //console.log(Math.round(route.getLength() / 1000)) //расстояние в м

          route.getPaths().options.set({
            // балун показывает только информацию о времени в пути с трафиком
            // balloonContentLayout: ymaps.templateLayoutFactory.createClass(
            //   '{{ properties.humanJamsTime }}'
            // ),
            // вы можете настроить внешний вид маршрута
            strokeColor: '0000ffff',
            opacity: 0.9
          })
          // добавляем маршрут на карту
          map.geoObjects.add(route)
        })
    }

    onMounted(async () => {
      getMap()
    })

    return { isLoad }
  }
})
</script>

<style>
.yandex-map-wrapper {
  display: flex;
  justify-content: center;
  /* margin: 0 auto; */
  align-items: center;
}

.progress-circular {
  color: hsla(160, 100%, 37%, 1);
}
/* @media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} */
</style>
