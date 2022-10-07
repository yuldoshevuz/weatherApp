const KEY = '96b947a45d33d7dc1c49af3203966408'

const getData = async (city) => {
    const BASE = 'https://api.openweathermap.org/data/2.5/weather'
    const QUERY = `?q=${city}&units=metric&appid=${KEY}`

    overlay.classList.toggle('d-none')
    const req = await fetch(BASE + QUERY)
    const data = await req.json()
    if (city.trim() == '') {
        overlay.classList.toggle('d-none')
        throw new Error('Please enter a country!')
    } else if (data.cod == 404) {
        overlay.classList.toggle('d-none')
        throw new Error('City not found!')
    }
    overlay.classList.toggle('d-none')

    return data
}