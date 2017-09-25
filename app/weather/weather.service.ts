import { Injectable } from '@angular/core';
import { weatherStub } from './constants/weather.stub.js';
import { weatherIcons } from './constants/weather-icons.constant';


@Injectable()
export class WeatherService {

    getTemperature(searchQuery, countryCode = 'US') {
        return new Promise(resolve => {
            resolve({
                data: weatherStub
            });
        })
            .then(({data}) => {

                if (data.query && data.query.count > 0) {
                    return data.query.results.channel
                }

                throw "Records not found";
            });
    }

    getIcon(condition) {
        const { code } = condition;

        if (weatherIcons[code]) {
            return `wi-${weatherIcons[code].icon}`;
        }

        return '';
    }

}