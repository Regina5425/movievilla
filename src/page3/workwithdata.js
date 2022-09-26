export function getDataFromLocal(str, param) {
        let data = JSON.parse(localStorage.getItem(str));
        if (!data) {
            data = {
                [param]: []
            };
        }
        return data;
}

export function setDataToLocal(data, str, param) {
    localStorage.removeItem(str);
    localStorage.setItem(str, JSON.stringify({[param]: data[param]}));
}