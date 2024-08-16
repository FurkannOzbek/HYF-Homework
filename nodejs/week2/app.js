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

// GET /documents/:id

app.get("/documents/:id", (req,res)=> {
  const docId = parseInt(req.params.id , 10);
  console.log(docId);
  const selectedDoc = jsonData.find(doc => doc.id === docId);
  console.log(selectedDoc);
  if(selectedDoc){
    res.json(selectedDoc)
  }
  else {
    res.status(404).send('Document couldnt be found')
  }
})

// POST search 
app.post("/search",(req,res)=> {

  const filteredDataPost = jsonData.filter(item => {
    // Check if the item matches all field filters
    return Object.entries(req.body.fields).every(([key, filterValue]) => 
        item[key] && typeof item[key] === 'string' && item[key].includes(filterValue)
    );
});
res.send(filteredDataPost)
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
