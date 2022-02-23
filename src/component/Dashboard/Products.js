import React from 'react';
import Productbox from './Productbox';
import pimage1 from '../../image/isbi1.jpg'
import pimage2 from '../../image/isbi2.jpg'
import pimage3 from '../../image/isbi3.jpg'


function Products() {
  return (
    <div id='products'>
        <h1>Untuk Siapa Sistem Informasi Ini dibuat?</h1>
        <h3>Secara umum tentunya diperuntukkan untuk penggiat budaya serta pihak yang masih peduli untuk melestarikan budaya yang ada di Jawa Barat, yang mana budaya tersebut adalah bentuk warisan yang sangat berharga dari para leluhur kita.Khususnya untuk pihak terkait yang ada di lingkungan ISBI Bandung, seperti pihak Dosen terkait budaya tertentu, berikut Mahasiswa ISBI Bandung, dengan tujuan sebagai penyedia informasi akurat berikut menjadi bahan atau topik penelitian bagi pihak dosen maupun mahasiswa terkait budaya</h3>
        <div className='a-container'>
            <Productbox image={pimage1} title="Mahasiswa ISBI"/>
            <Productbox image={pimage2} title="Dosen ISBI"/>
            <Productbox image={pimage3} title="Penggiat budaya atau masyarakat umum"/>
        </div>

    </div>
  )
}

export default Products;