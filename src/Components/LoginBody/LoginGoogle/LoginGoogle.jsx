import React, { useEffect } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
const URL_PATH = "http://localhost:3000";
function LoginGoogle() {

  const handleSuccess = async (response) => {
    const token = response.credential; // Obtém o idToken do Google
    console.log(token)
    try {
      const response = await axios.post(`${URL_PATH}/auth/google/callback`,  {idToken: token} );
      const data = await response.data;
      console.log(response)
      if (response.status == 200) {
        // Salva o token JWT retornado pelo backend
        localStorage.setItem('token', data.token);
        localStorage.setItem('usuario', JSON.stringify(data.user));
        window.location.href = '/';
      } else {
        console.error("Erro de login com o Google:", data.error);
      }
    } catch (error) {
      console.error("Erro ao enviar idToken:", error);
    }
  };
  const handleFailure = (response) => {
    console.error("Erro no login com Google:", response);
  };
  return (
      <GoogleLogin
        onSuccess={handleSuccess}
        onError={handleFailure}
      />
  );
}

export default LoginGoogle;
