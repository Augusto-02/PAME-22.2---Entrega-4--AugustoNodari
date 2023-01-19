import React from 'react'
import './styles.css'

function InputDeTodos() {
  return (
    <div class="box3">
       
            <input class="input"
            type= "text"
            placeholder='Busque um item'
            ></input>
            <button>Buscar</button>

            <label for="username">Usuario:</label>
            <input id="login"
            type= "text"
            placeholder='Usuario'
            ></input>
            <label for="pass">Senha:</label>
            <input id="login"
            type= "password"
            placeholder='Senha'
            ></input>
            <button>Logar</button>

      </div>  
  )
}

export default InputDeTodos