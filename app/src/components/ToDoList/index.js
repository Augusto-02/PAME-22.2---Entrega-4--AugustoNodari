import React from 'react'
import Body from '../Body'
import Header from '../Header'
import logo from './blusa.png'
import './styles.css'


function ToDoList() {
  return (
    <div clas="container1">

        <Header></Header>
        
        <div class="box4">
           <Body>
            <img src={logo} alt="logo"/>
          </Body>
          <Body></Body>
          <Body></Body>
          
        </div>
        <div class="box4">
          <Body></Body>
          <Body></Body>
          <Body></Body>
        </div>
        <div class="box4">
          <Body></Body>
          <Body></Body>
          <Body></Body>
        </div>
        
        <div class="boxrodape">
          <div class="minibox">
            <p class="p">Fashion Zone é uma loja de venda de roupas fundada em 2020.</p>
          </div>
          <div class="minibox">
            <p class="p"> Atualmente a loja possui 2 unidades em Nova Friburgo</p>
          </div>
        </div>
    </div>
  )
}

export default ToDoList