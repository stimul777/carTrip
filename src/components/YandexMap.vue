<template>
  <div id="map-container" style="width: 600px; height: 400px"></div>
</template>

<script lang="ts">
//карту нужно инициализировать после полной загрузки страницы(чтобы обращаться к ней)
import { onMounted } from 'vue'
import ymaps from 'ymaps'

export default {
  // components: { yandexMap },
  props: {},

  setup(props) {
    const _key = import.meta.env.VITE_API_KEY_MAP
    const coords = [54.82896654088406, 39.831893822753904]

    let instansMap = null

    const getMap = async () => {
      await ymaps
        .load(`https://api-maps.yandex.ru/2.1/?apikey=${_key}&load=package.full&lang=ru_RU`)
        .then((maps: any) => {
          const map = new maps.Map('map-container', {
            center: [55.755864, 37.617698],
            zoom: 6
          })

          setMap(maps, map)
        })

        .catch((error: any) => console.log('Failed to load Yandex Maps', error))
    }

    const setMap = (maps, map) => {
      maps
        .route(['Москва', 'Санкт-петербург'], {
          mapStateAutoApply: true
        })
        .then(function (route: any) {
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

    return {
      coords
    }
  }
}
</script>

<style>
/* @media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} */
</style>
