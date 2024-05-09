// create your App component here
import React, { useState, useEffect } from 'react';

function App() {
  // State variable to manage loading status
  const [isLoading, setIsLoading] = useState(true);
  // State variable to store the dog image URL
  const [dogImageUrl, setDogImageUrl] = useState('');

  // useEffect hook to fetch data from the API when the component is first rendered
  useEffect(() => {
    // Fetch data from the API
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => {
        // Set the dog image URL and update loading status
        setDogImageUrl(data.message);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });
  }, []);

  // If the data is still loading, display a loading message
  if (isLoading) {
    return <p>Loading...</p>;
  }

  // Once the data is loaded, display the dog image
  return (
    <div>
      <img src={dogImageUrl} alt="A Random Dog" />
    </div>
  );
}

export default App;
