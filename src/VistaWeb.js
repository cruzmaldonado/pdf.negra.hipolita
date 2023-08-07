import React from 'react'

const VistaWeb = ({texto}) => {
  return (
    <div
    style={{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"
    }}
    
    >
        <h1 style={{ color: "#3388af", fontSize: "42px" }}>
        Titulo del artículo
      </h1>
        <img src="https://picsum.photos/600/400"
        alt="random Image"
        style={{maxWidth:"600px",minHeight:"400px"}}></img>
        <p 
        style={{color:"gray",fontSize:"12px",fontSize:"italic", padding:"10px 100px "}}
        >
        {texto? texto :"..."}</p>
    </div>
  )
}

export default VistaWeb