import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import styled from "styled-components";
import { Opulento } from "uvcanvas";
import { login } from "../api/auth";

const LoginContainer = styled.div`
  position: relative;
  min-height: 99.8vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OpulentoBackground = styled(Opulento)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
`;

const LoginFormContainer = styled.div`
  position: relative;
  background-color: white;
  padding: 3.1rem;
  border-radius: 5%;
  max-width: 400px;
  width: 100%;
`;

const LoginForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputContainer = styled.div`
  margin-bottom: 20px;
  width: 100%;
  position: relative;
`;

const LoginInput = styled.input`
  width: 100%;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
`;

const ToggleButton = styled.button`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const LoginButton = styled.button`
  width: 100%;
  margin-top: 50px;
  padding: 15px;
  border: 1px solid #000;
  border-radius: 8px;
  background-color: #000;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
`;

export function Login({ onLoginSuccess }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const enviarPeticion = async () => {
    const data = {
      username: username,
      password: password,
    };

    try {
      const response = await login(data);
      const {
        success,
        data: { privileges },
        message,
      } = response.data;
      if (!success) console.log(message);

      const Privileges = [...privileges];
      localStorage.setItem("user", JSON.stringify(Privileges));
      onLoginSuccess();
    } catch (error) {
      console.error("Error al realizar la petición:", error);
      alert("Credenciales incorrectas"); // Muestra una alerta si hay un error en la solicitud
    }
  };

  const handleLogin = (e) => {
    e.preventDefault(); // Evita que el formulario se envíe al hacer clic en el botón
    enviarPeticion(); // Llama a la función para enviar la petición POST
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <LoginContainer>
      <OpulentoBackground />
      <LoginFormContainer>
        <LoginForm onSubmit={handleLogin}>
          {" "}
          {/* Agregamos el controlador de envío al formulario */}
          <h1
            style={{
              marginBottom: "100px",
              fontSize: "40px",
              textAlign: "center",
              fontFamily: "",
              fontWeight: "700",
              fontStyle: "normal",
            }}
          >
            Inicio de Sesión
          </h1>{" "}
          {/* Ajustamos el espacio alrededor del texto de inicio de sesión */}
          <InputContainer>
            <LoginInput
              type="text"
              autoComplete="username"
              placeholder="Usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </InputContainer>
          <InputContainer>
            <LoginInput
              type={showPassword ? "text" : "password"}
              placeholder="Contraseña"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <ToggleButton type="button" onClick={togglePasswordVisibility}>
              {" "}
              {/* Cambiamos el tipo de botón a "button" */}
              {showPassword ? (
                <FaEyeSlash size={20} />
              ) : (
                <FaEye size={20} />
              )}{" "}
              {/* Usamos íconos de React Icons */}
            </ToggleButton>
          </InputContainer>
          <LoginButton type="submit">Iniciar sesión</LoginButton>{" "}
          {/* Cambiamos el tipo de botón a "submit" para enviar el formulario */}
        </LoginForm>
      </LoginFormContainer>
    </LoginContainer>
  );
}
