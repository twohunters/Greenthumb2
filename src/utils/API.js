import axios from "axios";

export default {
    //weather api
    cityWeather: function(city){
        return axios.get('https://api.openweathermap.org/data/2.5/weather?q='+city+ '&units=imperial&appid=cdc889a6c131e078f10ee5db1d9fa2e8')
    },

    //get all plants
    getPlant: function () {
        return axios.get("/api/plants");
    },
    //get plant by id
    getPlant: function (id) {
        return axios.get("/api/plants/" + id);
    },
    //delete plant by id
    deletePlant: function(id){
        return axios.delete("/api/plants" + id);
    },
    //save plant to DB
    savePlant: function (plantData) {
        return axios.post("/api/plants", plantData);
    },


    //get all gardens
    getGarden: function (){
        return axios.get("/api/gardens");
    },
    //get garden by id
    getGarden: function(id){
        return axios.get("/api/gardens/" + id);
    },
    //delete garden by id
    deleteGarden: function(id){
        return axios.delete("/api/gardens/" + id);
    },
    //save garden to db
    saveGarden: function(gardenData){
        return axios.post("/api/gardens", gardenData);
    },


    //get all users
    getAllUsers: function(){
        return axios.get("/api/user");
    },
    //get user by id
    getUser: function(id){
        return axios.get("api/user/" + id);
    },
    //delete user by id
    deleteUser: function(id){
        return axios.delete("api/user/" + id);
    },
    //save user to db
    saveUser: function(userData){
        return axios.post("/api/user", userData)
    }
};