const service = {}

service.headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
}

service.getApiData = async () => {
    const res = await fetch('api.json', service.headers);
    // .then(response => response.json())
    // .then(data => {console.log(data);
    //     return data;
    // });
    const result = await res.json();
    console.log(result);


}

export default service;