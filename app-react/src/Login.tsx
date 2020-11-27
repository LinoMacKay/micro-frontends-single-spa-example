import React from "react";

function Login() {
  return (
    <div>
    
      <input
        type="email"
        name="email"
        placeholder="Correo Electronico"
      />
      <input
        type="password"
        name="password"
        placeholder="Constraseña"
      />
      <button type="submit" >Iniciar Sesion</button>
    
      <button id="register" type="button">Crear una cuenta</button>
    </div>
  );
}
export default Login;
