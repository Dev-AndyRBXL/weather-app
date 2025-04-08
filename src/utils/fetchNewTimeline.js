// @template: { location: string, day1 (optional): string, day2 (optional): string, ...additional }
export default async function fetchNewTimeline(params = {}) {
  const API_KEY = 'X2RRHCETSUNX4HHGL7VCU2AN3';
  const baseURL =
    'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';

  const { location, unit = 'F', ...otherParams } = params;
  if (!location) throw new Error('Location is required!');

  const queryString = new URLSearchParams({
    key: API_KEY,
    ...otherParams,
  }).toString();

  try {
    const response = await fetch(
      `${baseURL}${location}?unitGroup=${
        unit === 'F' ? 'us' : 'metric'
      }&${queryString}`
    );
    if (!response.ok) throw new Error(`API Error: ${response.status}`);
    console.log(response);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error fetching weather data:', error.message);
    return null;
  }
}
