export async function fetch2api(url, method = 'GET') {
    let options = {
        method: method,
    }   
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result;
    }
    catch(error) {
        console.error(error)
    }
}