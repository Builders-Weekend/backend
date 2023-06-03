type weatherApiResponse = {
    forecast: Forecast
}
type Forecast = {
    forecastday: ForecastDay[]
}

type ForecastDay = {
    date: string,
    hour: Hour[]
}

type Hour = {
    time: string,
    windKph: number,
    uvIndex: number
}

export type { weatherApiResponse, Forecast, ForecastDay, Hour };
