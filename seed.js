const mongoose = require("mongoose");
const db = require("../models");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/project_3_test");
const projectSeed = [
   {
       drinks: "Beer",
       abv: "5%",
       calories: "153"
   },
   {
       drinks: "Light Beer",
       abv: "4%",
       calories: "103"
   },
   {
       drinks: "Craft Beer",
       abv: "7%",
       calories: "200"
   },
   {
       drinks: "Hard Seltzer",
       abv: "5%",
       calories: "100"
   },
   {
       drinks: "Red Wine",
       abv: "11%",
       calories: "125"
   },
   {
       drinks: "White Wine",
       abv: "10%",
       calories: "128"
   },
   {
       drinks: "Sweet Wine",
       abv: "7%",
       calories: "130"
   },
   {
       drinks: "Vodka",
       abv: "40%",
       calories: "97"
   },
   {
       drinks: "Gin",
       abv: "37.5%",
       calories: "97"
   },
   {
        drinks: "Rum",
        abv: "40%",
        calories: "197"
   },
   {
       drinks: "Whiskey",
       abv: "45%",
       calories: "97"
   },
   {
       drinks: "Tequila",
       abv: "40%",
       calories: "64"
   },
   {
       drinks: "Cordials",
       abv: "30%",
       calories: "150"
   },
   {
       drinks: "Margarita",
       abv: "26%",
       calories: "168"
   },
   {
        drinks: "Mimosa",
        abv: "10%",
        calories: "75"
   },
   {
       drinks: "Mojito",
       abv: "13%",
       calories: "143"
   },
   {
       drinks: "Bloody Mary",
       abv: "12%",
       calories: "120"
   },
   {
       drinks: "Hurricane",
       abv: "18%",
       calories: "200"
   },
   {
       drinks: "Old Fashioned",
       abv: "38%",
       calories: "110"
   },
   {
       drinks: "Cosmopolitan",
       abv: "21%",
       calories: "146"
   },

]
db.Dede.collection.insertMany(projectSeed)
   .then(dbModel => {
       console.log(dbModel)
   })
   .catch(err => console.log(err));

