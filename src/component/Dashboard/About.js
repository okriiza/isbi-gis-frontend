import React from 'react';
import aboutimage from '../../image/about1.jpg';

function About() {
  return (
    <div id='about'>
        <div className='about-text'>
            <h2>Apa Saja Informasi yang Bisa Didapat & Bagaimana Cara Mengakses Sistem Informasi Peta Budaya Jawa Barat?</h2>
            <p>1. Beberapa unsur budaya yang sudah dikelompokkan berikut dengan penjelasan detail serta tata letak budaya tersebut</p>
            <p>2. Peta lokasi jawa barat yang sudah di desain sedemikin rupa yang mana bisa menampilkan lokasi dalam ruang lingkup jawa barat serta dilengkapi penanda tata letak budaya tertentu</p>

        </div>
        <div className='about-image'>
            <img src={aboutimage} alt=''/>
        </div>
    </div>
  )
}

export default About;