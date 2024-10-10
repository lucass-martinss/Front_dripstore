import React from 'react';
import FacebookLogin from 'react-facebook-login';

function LoginFacebook() {
  const responseFacebook = (response) => {
    console.log(response);
    // Aqui você pode capturar as informações do usuário e salvar no seu backend
  }

  return (
    <div>
      <FacebookLogin
        appId="YOUR_APP_ID" // Substitua pelo seu App ID do Facebook
        autoLoad={false}
        fields="name,email,picture"
        callback={responseFacebook}
        icon="fa-facebook"
        textButton='Fazer login com o Facebook'
        size='small'
        
      />
    </div>
  );
}

export default LoginFacebook;