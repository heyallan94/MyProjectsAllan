//73e5837f15b3cddbeb3ecab9dbcd015d
//https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=73e5837f15b3cddbeb3ecab9dbcd015d

const apiKey = "73e5837f15b3cddbeb3ecab9dbcd015d"
const apiCountryUrl = "https://countryflagsapi.com/png/"
const cityInput = document.getElementById("city-input")
const searchBtn = document.querySelector("#search")
const cityElement = document.querySelector("#city")
const tempElement = document.querySelector("#temperature span")
const descElement = document.querySelector("#description")
const weatherIconElement = document.querySelector("#weather-icon")
const countryElement = document.querySelector("#country")
const humidityElement = document.querySelector("#humidity span")
const windElement = document.querySelector("#wind span")

const getWeatherData = async(city) =>{
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`

    const res = await fetch(apiWeatherURL)
    const data = await res.json()

    console.log(data)
}

const showWeatherData = async (city) =>{
    const data = await getWeatherData(city)

    cityElement.innerText = cityInput.value
    tempElement.innerText = data.base
    descElement.innerText = data.weather[0].description
}

searchBtn.addEventListener("click", (e) =>{
    e.preventDefault()

    const city = cityInput.value

    showWeatherData(city)
})