import React from 'react'
import "./Footer.css";

function Footer() {
  return (
    <div>
        <ul className='flex justify-center'>
            <li>
                <h3>Choco Pap</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam minima odio at veritatis asperiores hic earum ex pariatur unde placeat.</p>
            </li>
            <li>
                <h3>Contact</h3>
                <p>Adresse : 51 rue du chocolat 75000 Paris</p>
                <p>Téléphone : 01 23 45 67 89</p>
                <p>Horaires : 9h00-17h00 du Lundi au vendredi</p>
            </li>
            <li>Logos réseaux sociaux</li>
        </ul>
    </div>
  )
}

export default Footer