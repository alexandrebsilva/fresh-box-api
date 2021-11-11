import axios from "axios";
// populate for tests
async function populate() {
  await axios.post("http://localhost:3000/alergy", {
    name: "alergy 1",
    description: "alergy 1",
  });
  await axios.post("http://localhost:3000/tag", {
    name: "tag 1",
    description: "tag 1",
  });

  await axios.post("http://localhost:3000/unit-of-measurement", {
    name: "colheres",
    abbreviation: "cols",
  });

  await axios.post("http://localhost:3000/category-ingredient", {
    name: "category 1",
    description: "description category 1",
  });

  await axios.post("http://localhost:3000/ingredient", {
    name: "ingrediente",
    description: "descrição do ingrediente",
    category: 1,
  });
}

populate().then(() => {
  console.log("POPULATED!");
});
