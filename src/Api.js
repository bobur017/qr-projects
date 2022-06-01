import axios from "axios";

const api = ({ dispatch }) => (next) => (action) => {
    if (action.type !== 'api/call') {
        next(action);
        return;
    } else {
        const { url, method, data, headers, params, success, error } = action.payload;
        console.log(data, "data");
        axios({
            // baseURL: "https://jsonplaceholder.typicode.com",
            baseURL: "http://192.168.250.54:2266",
            url,
            method,
            data,
            headers,
            params
        }).then(res => {
            dispatch({
                type: success,
                payload: res.data
            });
        }).catch(err => {
            dispatch({
                type: error,
                payload: err?.response?.data
            });
        });
    }
}
export default api;