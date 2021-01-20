export async function doFetch(url, data = null, method = 'get') {

    try {
        const response = await fetch(url)
        const data = await response.json()
        return data
    }
    catch(error) {
        console.error(error);
    }
}