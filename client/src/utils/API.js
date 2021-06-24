import axios from "axios";

export default {
    //save plant to DB
    savePlant: function(plantData){
        return axios.post("/api/plants", plantData);
    },
    //get all plants
    getPlant: function(){
        return axios.get("/api/plants/");
    },
    //get plant by id
    getPlant: function(id){
        return axios.get("/api/plants/" + id);
    }


}