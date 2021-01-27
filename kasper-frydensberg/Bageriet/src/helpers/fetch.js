// Både GET og POST i en funktion med variabler

export async function doFetch(url, type, data) {

    let method = type || 'GET'
    let body = data || null

    const options = {
        method : method,
        body : body
    }

    try {
      const response = await fetch(url, options)
      const data = await response.json()
      return data
    }
    catch (error) {
      console.log(error)
    }
  }

// Alternativ metode med to forskellige fetch funktioner
// en til at hente data (GET) og en til sende (POST)

  export async function getAuthData(url, sessionToken) {

    const options = {
      method : 'GET',
      headers: {
        'Authorization': `Bearer ${sessionToken.access_token}`, 
      }, 
  }

    try {
      const response = await fetch(url, options)
      const data = await response.json()
      return data
    }
    catch (error) {
      console.log(error)
    }
  }

  export async function postAuthData(url, data, sessionToken) {

    const options = {
      method : 'POST',
      body : data,
      headers: {
        'Authorization': `Bearer ${sessionToken.access_token}`, 
      }, 
  }
    try {
      const response = await fetch(url, options)
      const data = await response.json()
      return data
    }
    catch (error) {
      console.log(error)
    }
  }