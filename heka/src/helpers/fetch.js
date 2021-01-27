export async function doFetch(url, method = 'get', data = null) {

    const options = {
        method: method,
        body: data
    }

    try {
        const response = await fetch(url, options)
        const data = await response.json()
        return data
    }
    catch(error) {
        console.error(error);
    }
}