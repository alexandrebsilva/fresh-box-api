import axios from "axios";

async function populate() {
  await axios.post("http://localhost:3000/alergy", {
    name: "alergy 4",
    description: "alergy 2",
  });
  await axios.post("http://localhost:3000/tag", {
    name: "tag 3",
    description: "tag 2",
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
    description: "description",
    category: 1,
  });
}

populate().then(() => {
  console.log("POPULATED!");
});
