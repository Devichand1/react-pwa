import React, { useState } from 'react'
import { QrReader } from 'react-qr-reader'
import './scanner.css'
import {MdArrowBack, MdOutlineFlashOff} from 'react-icons/md'

const QRScanner = () => {
  const [data, setdata] = useState()

  const handleScanned=(result)=>{
  console.log(result)
  }
  return (

   <div className='container' >
   <div className='scan-header' >
   <MdArrowBack size={25}  color='#fff' />
    <h3>Scan QR code</h3> 
    <MdOutlineFlashOff style={{marginLeft:"auto"}}  size={25}  color='#fff'/>
   </div>
 <QrReader 
 scanDelay={100}
 containerStyle={{
   backgroundColor:"#00000099",
   width:'100%',
   display:"flex",
   jusstifyContent:"center",
   alignItems:"center",
   height:"100vh"
 }}
 videoStyle={{
  width:'80%',
  marginLeft:"10%",
  borderRadius:"10px"

 }}
 videoContainerStyle={{
  width:'100%',
  borderRadius:"10px"

 }}
        onResult={(result, error) => {
          if (!!result) {
            handleScanned(result)
          }

          if (!!error) {
            console.info(error);
          }
        }}

      />
   </div>
   
    
  )
}

export default QRScanner