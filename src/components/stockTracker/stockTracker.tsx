import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import './stockTracker.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface StockDay {
  c: number;
  h: number;
  l: number;
  n: number;
  o: number;
  t: number;
  v?: number;
  vw?: number;
}

interface StockMetaData {
  ticker: string;
  adjusted: boolean;
  queryCount: number;
  request_id: string;
  resultsCount: number;
  status: string;
}

interface PolygonResponse extends StockMetaData {
  results?: StockDay[];
}

const StockTracker: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [stockData, setStockData] = useState<StockDay[]>([]);
  const [metaData, setMetaData] = useState<StockMetaData | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>(''); 
  const [selectedDayData, setSelectedDayData] = useState<StockDay | null>(null); 

  const polygonApiKey = process.env.NEXT_PUBLIC_POLYGON_API_KEY;
  const hasInvalidDateRange = Boolean(startDate && endDate && startDate > endDate);

  const handleSearch = async () => {
    if (!searchValue || !startDate || !endDate) return;
    if (!polygonApiKey) {
      setErrorMessage('Polygon API key is missing.');
      return;
    }
    if (hasInvalidDateRange) {
      setErrorMessage('From date cannot be after To date.');
      return;
    }

    setErrorMessage('');
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.polygon.io/v2/aggs/ticker/${searchValue}/range/1/day/${startDate}/${endDate}?apiKey=${polygonApiKey}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: PolygonResponse = await response.json();

      // Set metadata and stock data
      setMetaData({
        ticker: data.ticker,
        adjusted: data.adjusted,
        queryCount: data.queryCount,
        request_id: data.request_id,
        resultsCount: data.resultsCount,
        status: data.status,
      });

      const results = data.results || [];
      setStockData(results);
      setSelectedDate(results[0]?.t ? new Date(results[0].t).toISOString() : ''); // Default to the first date if available
    } catch (error) {
      console.error('Error fetching stock data:', error);
      setErrorMessage('Error fetching stock data.');
    } finally {
      setLoading(false);
    }
  };

  const handleStartDateChange = (date: string) => {
    setStartDate(date);
    setErrorMessage(date && endDate && date > endDate ? 'From date cannot be after To date.' : '');
  };

  const handleEndDateChange = (date: string) => {
    setEndDate(date);
    setErrorMessage(startDate && date && startDate > date ? 'From date cannot be after To date.' : '');
  };

  const handleDateChange = (date: string) => {
    setSelectedDate(date); 
  };

  useEffect(() => {
    if (selectedDate && stockData.length > 0) {
      // Ensure both are in comparable format (Unix timestamps)
      const parsedSelectedDate = new Date(selectedDate).getTime(); 
      const dayData = stockData.find((day) => {
        const dayDate = new Date(day.t).getTime(); // Convert day.t to timestamp
        return dayDate === parsedSelectedDate;
      });
      
      setSelectedDayData(dayData || null); // Update selected day data
    }
  }, [selectedDate, stockData]);

  const chartData = {
    labels: stockData.map((day) => {
      const date = new Date(day.t);
      return date.toLocaleDateString(); 
    }),
    datasets: [
      {
        label: 'Open Price',
        data: stockData.map((day) => day.o),
        borderColor: 'rgba(75,192,192,1)',
        fill: false,
      },
      {
        label: 'Close Price',
        data: stockData.map((day) => day.c),
        borderColor: 'rgba(255,99,132,1)',
        fill: false,
      },
      {
        label: 'High Price',
        data: stockData.map((day) => day.h),
        borderColor: 'rgba(54,162,235,1)',
        fill: false,
      },
      {
        label: 'Low Price',
        data: stockData.map((day) => day.l),
        borderColor: 'rgba(255,206,86,1)',
        fill: false,
      },
    ],
  };

  return (
    <div className="stock-tracker">
      {/* Search Section */}
      <div className="search-bar">
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value.toUpperCase())}
          placeholder="Enter ticker symbol (e.g., AAPL)"
          className="search-input"
        />
        <label className="date-input-label">
          From
          <input
            type="date"
            value={startDate}
            max={endDate || undefined}
            onChange={(e) => handleStartDateChange(e.target.value)}
            placeholder="Start Date"
          />
        </label>
        <label className="date-input-label">
          To
          <input
            type="date"
            value={endDate}
            min={startDate || undefined}
            onChange={(e) => handleEndDateChange(e.target.value)}
            placeholder="End Date"
          />
        </label>
        <button onClick={handleSearch} disabled={loading || hasInvalidDateRange}>
          {loading ? 'Loading...' : 'Search'}
        </button>
      </div>
      {errorMessage && <p className="stock-error">{errorMessage}</p>}

      {/* Metadata Display */}
      {metaData && (
        <div>
          <h2>Stock Data for {metaData.ticker}</h2>
          <p>Status: {metaData.status}</p>
          <p>Adjusted: {metaData.adjusted ? 'Yes' : 'No'}</p>
          <p>Results Count: {metaData.resultsCount}</p>
        </div>
      )}

      {/* Data Display */}
      {loading ? (
        <p className="loading">Loading data...</p>
      ) : (
        <div>
          {stockData.length > 0 && (
            <div className="date-selector">
              <label htmlFor="date-dropdown">Select Date: </label>
              <select
                id="date-dropdown"
                value={selectedDate}
                onChange={(e) => handleDateChange(e.target.value)} 
              >
                {stockData.map((day) => (
                  <option key={day.t} value={new Date(day.t).toISOString()}>
                    {new Date(day.t).toLocaleDateString()}
                  </option>
                ))}
              </select>
            </div>
          )}

          {selectedDayData && Object.keys(selectedDayData).length > 0 ? (
            <div className="stock-item">
              <h4>Date: {new Date(selectedDayData.t).toLocaleDateString()}</h4>
              <p>Open: {selectedDayData.o}</p>
              <p>Close: {selectedDayData.c}</p>
              <p>High: {selectedDayData.h}</p>
              <p>Low: {selectedDayData.l}</p>
              <p>Volume: {selectedDayData.v?.toFixed(2)}</p>
              <p>VWAP: {selectedDayData.vw?.toFixed(2)}</p>
              <p>Transactions: {selectedDayData.n}</p>
            </div>
          ) : (
            <p>No data available for the selected date.</p>
          )}

          {/* Line Chart */}
          <div className="chart-container">
            <Line data={chartData} />
          </div>
        </div>
      )}
    </div>
  );
};

export default StockTracker;
