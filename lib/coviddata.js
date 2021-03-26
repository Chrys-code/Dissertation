var options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '495dd437fdmsh7acbb2488fda570p1a97b7jsndc9ccbf7c59e',
        'x-rapidapi-host': 'covid-193.p.rapidapi.com'
    }
};

export const covidData = async () => {
    const data = await fetch('https://covid-193.p.rapidapi.com/statistics', options)
    const res = await data.json()
    return res.response
}



