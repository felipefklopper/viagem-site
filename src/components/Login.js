import React from 'react'
import './Login.css'
import '../App.css'

function Login() {
  return (
    <>
        <div className="card-center">
            <h1>Entrar</h1>
            <form method="post">
                <div className="txt-field">
                    <input type="text" required/>
                    <span></span>
                    <label>Nome de usuário</label>
                </div>
                <div className="txt-field">
                    <input type="password" required/>
                    <span></span>
                    <label>Senha</label>
                </div>
                <div className="pass">Esqueci minha senha</div>
                <input className="botao" type="submit" value="Entrar" />
                <div className="signup-link">
                   <a href="#"> Cadastre-se   </a>
                </div>
            </form>
        </div>
    </>
  )
}

export default Login