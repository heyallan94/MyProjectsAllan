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
const humidityElement = document.querySelector("#umidity span")
const windElement = document.querySelector("#wind span")
const windNumber = document.querySelector("#windnumber")


const getWeatherData = async(city) =>{
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`

    const res = await fetch(apiWeatherURL)
    const data = await res.json()
    tempElement.innerText = parseInt(data.main.temp)
    descElement.innerText = data.weather[0].description
    windnumber.innerText = data.wind.speed
    countryElement.setAttribute("src", `https://countryflagsapi.com/png/${data.sys.country}`)
    humidityElement.innerText = `Umidade: ${data.main.humidity} %`
    console.log(data)
}

const showWeatherData = async (city) =>{
    const data = await getWeatherData(city)
    cityElement.innerText = cityInput.value

}

searchBtn.addEventListener("click", (e) =>{
    e.preventDefault()

    const city = cityInput.value
    
    
    showWeatherData(city)
})

cityInput.addEventListener("keyup" ,(e) =>{

    if(e.code === "Enter"){
        const city = e.target.value

        showWeatherData(city)
    }
} )
