const changeLocation = document.getElementById('change-location')
const card = document.getElementById('card')
const details = document.getElementById('details')
const weatherIcon = document.getElementById('weather-icon')
const overlay = document.getElementById('overlay')
const errorEl = document.getElementById('alert')
const label = document.getElementById('label')

const getLocation = () => {
    const city = changeLocation.city.value.trim()
    changeLocation.reset()
    return city
}

const setData = async (city) => {
    getData(city)
    .then((weather) => {
        card.classList.remove('d-none')
        weatherIcon.src = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
        errorEl.classList.add('d-none')
        label.classList.add('d-none')
        details.innerHTML = `
        <h5 class="mb-3">${weather.name}, ${weather.sys.country}</h5>
          <p class="mb-3">${weather.weather[0].main}</p>
          <div class="display-4 mb-3">
            <span>${Math.round(weather.main.temp)}</span>
            <span>&deg;C</span>
          </div>
        `
    })
    .catch((error) => {
        card.classList.add('d-none')
        errorEl.classList.remove('d-none')
        label.classList.remove('d-none')
        errorEl.innerHTML = `${error.message} <b>${city}</b>`
        setTimeout(() => {
            errorEl.classList.add('d-none')
        }, 5000)
    })
}

changeLocation.addEventListener('submit', (e) => {
    e.preventDefault()
    setData(getLocation())
})