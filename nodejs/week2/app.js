import express from "express";
import jsonData from "./documents.json" with {type : "json"}
const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is a search engine");
});

// GET /search with query
app.get("/search", (req, res) => {
  const variableQuery = req.query.q;
  if (variableQuery) 
    {
      const filteredData = jsonData.filter(item => {
     // Actual checking if any of the json file valuables fit with our query variable
        return Object.values(item).some(value =>
          typeof value === 'string' && value.includes(variableQuery)
        );
      });
      res.send(filteredData)
    }
  else {
    res.send(jsonData);
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
