const mongoose = require("mongoose");
const db = require("./models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/DeDe_DB");
const deDeSeeds = [
   {
       drinks: "Beer",
       abv: "5%",
       calories: "153",
       created_at: ""
   },
   {
       drinks: "Light Beer",
       abv: "4%",
       calories: "103",
       created_at: ""
   },
   {
       drinks: "Craft Beer",
       abv: "7%",
       calories: "200",
       created_at: ""
   },
   {
       drinks: "Hard Seltzer",
       abv: "5%",
       calories: "100",
       created_at: ""
   },
   {
       drinks: "Red Wine",
       abv: "11%",
       calories: "125",
       created_at: ""
   },
   {
       drinks: "White Wine",
       abv: "10%",
       calories: "128",
       created_at: ""
   },
   {
       drinks: "Sweet Wine",
       abv: "7%",
       calories: "130",
       created_at: ""
   },
   {
       drinks: "Vodka",
       abv: "40%",
       calories: "97",
       created_at: ""
   },
   {
       drinks: "Gin",
       abv: "37.5%",
       calories: "97",
       created_at: ""
   },
   {
        drinks: "Rum",
        abv: "40%",
        calories: "197",
        created_at: ""
   },
   {
       drinks: "Whiskey",
       abv: "45%",
       calories: "97",
       created_at: ""
   },
   {
       drinks: "Tequila",
       abv: "40%",
       calories: "64",
       created_at: ""
   },
   {
       drinks: "Cordials",
       abv: "30%",
       calories: "150",
       created_at: ""
   },
   {
       drinks: "Margarita",
       abv: "26%",
       calories: "168",
       created_at: ""
   },
   {
        drinks: "Mimosa",
        abv: "10%",
        calories: "75",
        created_at: ""
   },
   {
       drinks: "Mojito",
       abv: "13%",
       calories: "143",
       created_at: ""
   },
   {
       drinks: "Bloody Mary",
       abv: "12%",
       calories: "120",
       created_at: ""
   },
   {
       drinks: "Hurricane",
       abv: "18%",
       calories: "200",
       created_at: ""
   },
   {
       drinks: "Old Fashioned",
       abv: "38%",
       calories: "110",
       created_at: ""
   },
   {
       drinks: "Cosmopolitan",
       abv: "21%",
       calories: "146",
       created_at: ""
   },

]
db.Dede.collection.insertMany(deDeSeeds)
   .then(dbModel => {
       console.log(dbModel)
   })
   .catch(err => console.log(err));

