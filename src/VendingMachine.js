import React from 'react';
import {Link} from 'react-router-dom';
import "./VendingMachine.css"

function VendingMachine(){
  let vmImageUrl = "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fs3-ap-northeast-1.amazonaws.com%2Fpsh-ex-ftnikkei-3937bb4%2Fimages%2F2%2F7%2F4%2F3%2F25213472-3-eng-GB%2FCropped-158275071120200226N%20Seven-Eleven%20vending_Data.jpg?source=nar-cms"
  return (
    <div className="vendingMachine">
      <img className="vendingImg" src={vmImageUrl} alt="its a vending machine, bro"></img>
      <h2>Choose Your Snack... If You Dare!</h2>
      <ul>
        <li><Link  to="/bugles">Bugles!</Link></li>
        <li><Link  to="/fresca">Fresca!</Link></li>
        <li><Link  to="/chili">Questionable Chili!</Link></li>
      </ul>
    </div>
  )
}


export default VendingMachine