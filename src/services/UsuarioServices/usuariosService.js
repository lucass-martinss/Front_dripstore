import axios from "axios";

const URL_PATH = "http://localhost:3000";

// Função para obter dados de usuários
export const getData = async () => {
    try {
        const response = await axios.get(`${URL_PATH}/usuarios`);
        return response.data;
    } catch (error) {
        console.error("Erro ao obter dados:", error);
        throw error;
    }
};

// Função de autenticação de usuário
export const authUser = async (email, senha) => {
    try {
        const resp = await axios.post(`${URL_PATH}/usuarios/login`, { email, senha });
        if (resp.status === 200) {
            const token = resp.data.token; // Corrigido para usar resp.data
            localStorage.setItem('token', token);
        }
        return resp;
    } catch (error) {
        return new Error(error.response ? error.response.data.error : error.message); // Melhor tratamento de erro
    }
}

// Função para deletar usuário por ID
export const deleteData = async (id) => {
    try {
        const response = await axios.delete(`${URL_PATH}/usuarios/${id}`);
        return response.data; 
    } catch (error) {
        console.error(`Erro ao deletar usuário com ID ${id}:`, error);
        throw error;
    }
};

// Função para atualizar dados de um usuário
export const updateData = async (id, usuario) => {
    try {
        const response = await axios.put(`${URL_PATH}/usuarios/${id}`, usuario);
        return response.data; 
    } catch (error) {
        console.error(`Erro ao atualizar usuário com ID ${id}:`, error);
        throw error;
    }
};

// Função para criar um novo usuário
export const createData = async (usuario) => {
    try {
        const response = await axios.post(`${URL_PATH}/usuarios`, usuario);
        return response.data;
    } catch (error) {
        console.error("Erro ao criar usuário:", error);
        throw error;
    }
};
