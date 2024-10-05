import axios from "axios"

let URL_PATH = "http://localhost:3000"

export const getData = async () => {
    return await axios.get(`${URL_PATH}/categorias`)
}

export const getOneData = async (id) => {
    return await axios.get(`${URL_PATH}/categorias/getone/${id}`)
}

export const deleteData = async (id) => {
    return await axios.delete(`${URL_PATH}/categorias/${id}`)
}

export const updateData = async (id, categoria) => {
    return await axios.put(`${URL_PATH}/categorias/${id}`, categoria)
}

export const createData = async (categoria) => {
    return await axios.post(`${URL_PATH}/categorias`, categoria)
}