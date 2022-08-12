import { Component, OnInit } from '@angular/core';
import { WeatherData } from '../models/weather.model';
import { WeatherServiceService } from '../services/weather-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'RealTimeCityWeather';
   constructor(private WeatherServiceService: WeatherServiceService) {

    }

    cityName: string = 'Stockholm';
    weatherData?: WeatherData;

    ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName = '';
    }

    onSubmit() {
    this.getWeatherData(this.cityName);
    this.cityName = '';
    }

    private getWeatherData(cityName: string) {
    this.WeatherServiceService.getWeatherData(cityName)
    .subscribe({
      next: (response) => {
        console.log(response)
        this.weatherData = response;
        console.log(response);
        }
    });
    }
}
