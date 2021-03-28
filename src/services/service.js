const service = {}

service.headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
}

service.getApiData = async () => {
    const res = await fetch('api.json', service.headers);
    const result = await res.json();
    let { data } = result;
    for (let [index,obj] of data.features.entries()) {
        obj['properties']['formattedTime'] = service.getDateTimeFromTime(obj['properties']['time']);
        obj['properties']['id'] = index;
    }
    return result;
}

service.monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

service.getDateTimeFromTime = (time) => {
    const fullDate = new Date(time);
    return `${service.monthNames[fullDate.getMonth()]}
    ${fullDate.getUTCDay()},
    ${fullDate.getFullYear()}
    ${(fullDate.getHours() % 12).toString().padStart(2, 0)}:${fullDate.getMinutes().toString().padStart(2, 0)}
    ${(fullDate.getHours() / 12) >= 1 ? 'PM' : 'AM'}`;
}

export default service;