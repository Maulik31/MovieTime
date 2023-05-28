import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYzdlZGI0NjQ4YzE0NWNkNjRlYmJhYmZmNDcwNTNiYSIsInN1YiI6IjY0NmZhYmNjZTk0MmVlMDEzM2U2MWQ1NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Q6AUOSOyLjRmqqzmc0PFeDYDbSGtiuySEniz5nssMJQ";

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const featchDataFromApi = async (url, params) =>{
    try{
        const {data} = await axios.get(BASE_URL + url, {
            headers,
            params
        }) 
        return data;

    }catch (err){
        console.log(err);
        return err;
    }
}