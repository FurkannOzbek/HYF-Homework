"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Epic() {
  const searchParams = useSearchParams();
  const date = searchParams.get("date");

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.nasa.gov/EPIC/api/natural/images?api_key=bjGJ41igTdD6HiSXcGVAaTGQ4TpvKhkl54NcWjpU"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Couldn't fetch data");
        }
        return response.json();
      })
      .then((jsonData) => {
        setData(jsonData); // Set the fetched data to state
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const filteredImages = data.filter(
    (photo) => photo.date.split(" ")[0] === date // Comparing only the date part without time
  );

  return (
    <div>
      <h1>Query Parameters</h1>
      <p>Date: {date}</p>
      <h2>EPIC Images</h2>

      {filteredImages.length > 0 ? (
        <ul>
          {filteredImages.map((photo, index) => {
            // Format the date to match the required format for the image URL that I checked from nasa website
            const formattedDate = photo.date.split(" ")[0].replace(/-/g, "/");
            return (
              <li key={index}>
                <h3>{photo.caption}</h3>
                <img
                  src={`https://epic.gsfc.nasa.gov/archive/natural/${formattedDate}/png/${photo.image}.png`}
                  alt={photo.caption}
                  width={300}
                />
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No images found for the selected date.</p>
      )}
    </div>
  );
}
