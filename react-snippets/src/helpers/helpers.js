/**
 * Funktion til at fetche API's med
 * @param {string} url API Endpoint
 * @param {string} method HTTP Request Method
 * @param {string} token Access Token String
 * @param {object} formdata Form Data Object
 */

 export async function fetch2api(url, method = 'GET', token = null, formdata = null) {
    let options = {
        method: method,
    }   

    if(token) {
        options.headers = {
            'Authorization' : `Baerer ${token}`
        }
    }

    if(formdata) {
        options.body = formdata
    }

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result;
    }
    catch(error) {
        console.error(error);
    }
}