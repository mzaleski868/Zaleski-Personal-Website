import React, { useEffect, useState } from 'react';
import { FaSnowflake, FaSun, FaCloudSun, FaTemperatureLow, FaTemperatureHigh } from 'react-icons/fa';
import './weatherForecast.css'; // Import the CSS file

interface WeatherData {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  daily_units: {
    time: string;
    temperature_2m_max: string;
    temperature_2m_min: string;
    uv_index_max: string;
  };
  daily: {
    time: string[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    uv_index_max: number[];
  };
}

const WeatherComponent: React.FC = () => {
  const [minTemperatureC, setMinTemperatureC] = useState<number | null>(null);
  const [maxTemperatureC, setMaxTemperatureC] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [IconComponent, setIconComponent] = useState<React.ReactNode>(null);

  useEffect(() => {
    const apiUrl = 'https://api.open-meteo.com/v1/forecast?latitude=35.7721&longitude=-78.6386&daily=temperature_2m_max,temperature_2m_min,uv_index_max&timezone=America%2FNew_York';

    const fetchWeather = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Failed to fetch weather data');
        }
        const data: WeatherData = await response.json();
        const today = new Date().toISOString().split('T')[0];
        const index = data.daily.time.indexOf(today);
        if (index !== -1) {
          const minTempC = data.daily.temperature_2m_min[index];
          const maxTempC = data.daily.temperature_2m_max[index];
          setMinTemperatureC(minTempC);
          setMaxTemperatureC(maxTempC);

          const avgTempF = (minTempC + maxTempC) / 2 * 9 / 5 + 32;

          if (avgTempF < 32) {
            setIconComponent(<FaSnowflake className="weather-icon" />);
          } else if (avgTempF >= 32 && avgTempF < 50) {
            setIconComponent(<FaTemperatureLow className="weather-icon" />);
          } else if (avgTempF >= 50 && avgTempF < 70) {
            setIconComponent(<FaCloudSun className="weather-icon" />);
          } else if (avgTempF >= 70 && avgTempF < 85) {
            setIconComponent(<FaSun className="weather-icon" />);
          } else {
            setIconComponent(<FaTemperatureHigh className="weather-icon" />);
          }
        } else {
          setError('No weather data available for today');
        }
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch weather information');
        setLoading(false);
      }
    };
    fetchWeather();
  }, []);

  const celsiusToFahrenheit = (celsius: number) => (celsius * 9) / 5 + 32;

  if (loading) return <div>Loading weather data...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="weather-container">
      <h1 className="weather-header">Weather Info for Today</h1>
      {minTemperatureC !== null && maxTemperatureC !== null ? (
        <div className="weather-info">
          <div>
            <p className="temperature-text">
              Min Temperature: {celsiusToFahrenheit(minTemperatureC).toFixed(1)}°F / {minTemperatureC.toFixed(1)}°C
            </p>
            <p className="temperature-text">
              Max Temperature: {celsiusToFahrenheit(maxTemperatureC).toFixed(1)}°F / {maxTemperatureC.toFixed(1)}°C
            </p>
            <p className="temperature-text">
              Average Temperature: {celsiusToFahrenheit((minTemperatureC + maxTemperatureC) / 2).toFixed(1)}°F / {((minTemperatureC + maxTemperatureC) / 2).toFixed(1)}°C
            </p>
          </div>
          <div>
            {IconComponent}
          </div>
        </div>
      ) : (
        <p>No weather data available for today.</p>
      )}
    </div>
  );
};

export default WeatherComponent;
