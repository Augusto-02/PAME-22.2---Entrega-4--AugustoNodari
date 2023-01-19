import React from 'react'
import InputDeTodos from '../input'
import './styles.css'


function Header() {
  return (
      <div class="container">
                  <div class="box">    
                        <h1 class="h1"> Fashion Zone </h1>
                        <p class="fontp1"> Principais Categorias: Camisas/calcas/shorts/vestidos </p> 
                  </div>
                  
                  {/* <div class="box2"> */}
                        <InputDeTodos></InputDeTodos>
                  {/* </div> */}
      </div> 
  )
}

export default Header