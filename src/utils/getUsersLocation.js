export function getCurrentCoordinates() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation is not supported by your browser.'));
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          resolve({ latitude, longitude });
        },
        (error) => {
          // Handle different geolocation error codes
          if (error.code === error.PERMISSION_DENIED) {
            reject(new Error('User denied the request for geolocation.'));
          } else if (error.code === error.POSITION_UNAVAILABLE) {
            reject(new Error('Location information is unavailable.'));
          } else if (error.code === error.TIMEOUT) {
            reject(new Error('The request to get user location timed out.'));
          } else {
            reject(new Error('Failed to get geolocation: ' + error.message));
          }
        }
      );
    }
  });
}

export async function getCityFromCoordinates({ latitude, longitude }) {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
    );
    const data = await response.json();
    const city =
      data.address.city ||
      data.address.town ||
      data.address.village ||
      data.address.state ||
      data.address.country;
    return city;
  } catch (error) {
    throw new Error('Failed to fetch location name:', error.message);
  }
}

export async function getUserLocationName() {
  try {
    const coords = await getCurrentCoordinates();
    const city = await getCityFromCoordinates(coords);
    return city;
  } catch (error) {
    console.error(error.message);
    return null;
  }
}
