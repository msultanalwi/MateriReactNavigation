import { getData } from "./asyncstorage"

const url = 'https://todo-api-omega.vercel.app/api/v1'


export const create = async(path, body) => {
    const userData = await getData ('user')
    const res = await fetch(url + path, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Authorization' : userData ?`Bearer ${userData.token}`: '',
            'Content-Type' : 'application/json'
        }
    })
    
    const response = await res.json()
    return response

}

export const read = async(path) => {
    const userData = await getData ('user')
    const res = await fetch(url + path, {
        method: 'GET',
        headers: {
            'Authorization' : userData ?`Bearer ${userData.token}`: '',
            'Content-Type' : 'application/json'
        }
    })

    const response = await res.json()
    return response
}

export const update = async(path, body) => {
    const userData = await getData ('user')
    const res = await fetch(url + path, {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: {
            'Authorization' : userData ?`Bearer ${userData.token}`: '',
            'Content-Type' : 'application/json'
        }
    })

    const response = await res.json()
    return response
}

export const destroy = async(path) => {
        const userData = await getData ('user')
        const res = await fetch(url + path, {
            method: 'DELETE',
            headers: {
                'Authorization' : userData ?`Bearer ${userData.token}`: '',
                'Content-Type' : 'application/json'
            }
        })
    
        const response = await res.json()
        return response
}

