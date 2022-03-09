export const getGifs = async (category) => {
    const url =
      `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=7JkCxWWMsVSHAbNX8rSrP35Pojy7RtV1`
    const resp = await fetch(url, { method: 'GET' })
    const { data } = await resp.json()

    const imagenes = data.map(img => {
      return {
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
      }
    })
    return imagenes;
  }