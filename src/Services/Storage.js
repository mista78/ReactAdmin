export const SaveOnStorage = (key, value) => {
    const data = JSON.stringify(value);
    sessionStorage.setItem(key, data);
};

export const GetOnStorage = (key) => {
    const data = sessionStorage.getItem(key);
    try {
        return JSON.parse(data);
    } catch (e) {
        return data;
    }
};