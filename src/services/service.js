const service = {}

service.headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
}

service.getApiData = async () => {
    const res = await fetch('api.json', service.headers);
    const result = await res.json();
    return result;
}

export default service;