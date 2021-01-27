export async function doFetch(url, data = null, method = 'get') {

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