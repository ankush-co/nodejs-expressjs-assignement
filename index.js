const express = require("express");

const app = express();

const PORT = 3000;

//built in body parser by express
app.use(express.json());

app.get("*", (request, response) => {
  const dataObject = {
    query: request.query,
    path: request.path,
  };
  response.send(JSON.stringify(dataObject));
});

app.post("/getdata", (request, response) => {
  try {
    const requiredData = request.body;
    console.log(requiredData);
    const arrOfData = [
      {
        name: "ankush",
      },
      { name: "shenoy" },
    ];
    response.send(JSON.stringify(arrOfData));
  } catch (error) {
    console.error(error);
    response.json({ message: "Some unknown error occured" });
  }
});

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
