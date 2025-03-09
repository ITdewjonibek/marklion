import React from 'react';
import Image from './imgf/image.png'; // Bir qadam orqaga chiqib, img papkasidan rasmni import qilish
import Imf from './imgf/image copy.png'
export default function Main() {
  return (
    <div className='main'>
      <img className='img1' src={Image} alt="Description" />
      <img className='img2' src={Imf}></img>
    </div>
  );
}
