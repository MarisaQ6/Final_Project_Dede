import axios from "axios";

export default {
  // Gets all books
  getDrinks: function() {
    console.log("API")
    return axios.get("/api/drinks");
  },
  // Gets the book with the given id
  getDrinksById: function(id) {
      
    return axios.get("/api/drinks/" + id);
  },
  // Deletes the Drink with the given id
  deleteDrink: function(id) {
    return axios.delete("/api/drinks/" + id);
  },
  // Saves a Drink to the database
  saveDrink: function(bookData) {
    return axios.post("/api/drinks", bookData);
  }
};
