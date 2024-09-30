import { useState, useEffect } from "react";

export const MarsRover = () => {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=bjGJ41igTdD6HiSXcGVAaTGQ4TpvKhkl54NcWjpU"
    )
      .then((data) => {
        if (!data.ok) {
          throw new Error("Fetch failed");
        }
        return data.json();
      })
      .then((jsonData) => {
        // Access the "photos" array from the jsonData
        setResponse(jsonData.photos);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div>
        {response.map((photo) => (
          <div key={photo.id}>
            <img src={photo.img_src} alt="Mars Rover" />
            <p> {photo.camera.full_name}</p>
          </div>
        ))}
        {JSON.stringify(response)}
      </div>
    </>
  );
};
