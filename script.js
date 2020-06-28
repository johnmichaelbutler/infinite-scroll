// Unsplash API
const count = 10;
const apiKey = `Zp3ysY49on6x_rtJWpi4h2LfbTjyn0T1dRCpz5padMA`;
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get photos from Unsplash API
async function gePhotos() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
  } catch {
    // Catch Error here
    console.log(Error);
  }
}

// On Load
gePhotos();