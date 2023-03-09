import ymaps from 'ymaps'
const _key = import.meta.env.VITE_API_KEY_MAP

const getMap = async () => {
  try {
    return await ymaps.load(
      `https://api-maps.yandex.ru/2.1/?apikey=${_key}&load=package.full&lang=ru_RU`
    )
  } catch (error) {
    console.log('Failed to load Yandex Maps', error)
  }
}

export { getMap }
