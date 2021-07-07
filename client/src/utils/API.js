
import axios from "axios";

export default {


    //get all plants
    getPlants: function () {
        return axios.get("/api/plants/");
    },
    //get plant by id
    getPlant: function (id) {
        return axios.get("/api/plants/" + id);
    },
    //delete plant by id
    deletePlants: function(id){
        return axios.delete("/api/plants" + id);
    },
    //save plant to DB
    savePlants: function (plantData) {
        return axios.post("/api/plants", plantData);
    },


    //get all gardens
    getGardens: function (){
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
        return axios.post("/api/gardens", gardenData)
    },
    //find garden's by user id 
    findGardens:function(userid){
        return axios.post("/api/gardens/find", userid)
    },


    //get all users
    getAllUsers: function(){
        return axios.get("/api/user");
    },
    //get user by id
    getUser: function(id){
        return axios.get("/api/user/" + id);
    },
    //delete user by id
    deleteUser: function(id){
        return axios.delete("/api/user/" + id);
    },
    //save user to db
    saveUser: function(userData){
        return axios.post("/api/user", userData)
    },
    findUser: function(loginData){
        // console.log(loginData)
        return axios.post("api/user/login",loginData)
    }
};