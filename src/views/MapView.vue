<template>
  <div id="map-container" style="width: 600px; height: 400px"></div>
</template>

<script lang="ts">
import { onMounted } from 'vue'
import ymaps from 'ymaps'

export default {
  // components: { yandexMap },
  props: {},

  setup(props) {
    const _key = import.meta.env.VITE_API_KEY_MAP
    const coords = [54.82896654088406, 39.831893822753904]

    // const settings = {
    //   apiKey: 'eb0ba1b6-f511-4d13-b0b0-6d215d57d194',
    //   lang: 'ru_RU',
    //   coordorder: 'latlong',
    //   enterprise: false,
    //   version: '2.1'
    // }

    onMounted(async () => {
      await ymaps
        .load(`https://api-maps.yandex.ru/2.1/?apikey=${_key}&lang=ru_RU`)
        .then((maps: any) => {
          const map = new maps.Map('map-container', {
            center: [-8.369326, 115.166023],
            zoom: 6
          })
        })
        .catch((error: any) => console.log('Failed to load Yandex Maps', error))
    })

    return {
      // settings,
      coords
    }
  }
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
