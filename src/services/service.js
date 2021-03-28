const service = {}

service.headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
}

service.getApiData = async () => {
    const res = await fetch('api.json', service.headers);
    const result = await res.json();
    let { data } = result;
    for (let [index, obj] of data.features.entries()) {
        obj['properties']['formattedTime'] = service.getDateTimeFromTime(obj['properties']['time']);
        obj['properties']['id'] = index;
        obj['time'] = obj['properties']['time'];
        obj['place'] = obj['properties']['place'];
        obj['mag'] = obj['properties']['mag'];
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

service.sortData = (arr, sortBy, flag) => {
    let tempArr = [...arr];
    switch (sortBy) {
        case 'place':
            if (flag) {
                tempArr.sort((b, a) => {
                    var textA = a[sortBy].toUpperCase();
                    var textB = b[sortBy].toUpperCase();
                    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
                });
            }

            else {
                tempArr.sort((a, b) => {
                    var textA = a[sortBy].toUpperCase();
                    var textB = b[sortBy].toUpperCase();
                    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
                });
            }
            break;
        case 'time':
        case 'mag':
            if (flag)
                tempArr.sort((a, b) => a[sortBy] - b[sortBy]);
            else
                tempArr.sort((a, b) => b[sortBy] - a[sortBy]);
            break;
    }
    return tempArr;
}

export default service;