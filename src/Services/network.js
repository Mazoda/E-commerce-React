import axios from "axios";

const client = axios.create({
    baseURL: ""
});


export const fetchData = async (url) => {
    try {
        const response = await client.get(url);
        return response.data;
    } catch (error) {
        return {}
    }
};


export const postData = async (url, data) => {
    try {
        const response = await client.post(url, data);
        return response.data;
    } catch (error) {
        return {}
    }
};


export const updateData = async (url, data) => {
    try {
        const response = await client.put(url, data);
        return response.data;
    } catch (error) {
        return {}
    }
};


export const deleteData = async (url) => {
    try {
        const response = await client.delete(url);
        return response.data;
    } catch (error) {
        return {}
    }
};
