require("dotenv").config({ path: '../keys.env' });

var options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': process.env.API_KEY,
        'x-rapidapi-host': process.env.API_HOST
    }
};

export const fetchCovidData = async () => {
    const data = await fetch(process.env.API_FETCH_URL, options);
    const res = await data.json();

    return res.response
}



