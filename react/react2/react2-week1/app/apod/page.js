export default async function Apod() {
  const response = await fetch(
    "https://api.nasa.gov/planetary/apod?api_key=bjGJ41igTdD6HiSXcGVAaTGQ4TpvKhkl54NcWjpU"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();

  return (
    <div>
      <img src={data.url}></img>
      <p>{data.explanation}</p>
    </div>
  );
}
