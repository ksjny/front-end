import axios from 'axios';

const URL = "https://nwhacks-api.herokuapp.com/api/"

class ApiHelper {
    static headers() {
        return {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }

    static async get(route) {
        return await this.xhr(route, null, 'GET');
    }

    static async put(route, params) {
        return await this.xhr(route, params, 'PUT')
    }

    static async post(route, params) {
        return await this.xhr(route, params, 'POST')
    }

    static async delete(route, params) {
        return await this.xhr(route, params, 'DELETE')
    }

    static async xhr(route, params, verb) {
        const url   = `${URL}${route}`;
        const data  = params ? JSON.stringify(params) : null

        try {
            let response  = await axios({
                url : url,
                method: verb,
                headers : ApiHelper.headers(),
                data : data
            });

            return response.data;
        } catch(error) {
            console.log(error.response);
            return null;
        }

    }
}

export default ApiHelper