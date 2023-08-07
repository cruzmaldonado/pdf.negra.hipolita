import React from 'react'
import { Document, Page, Text, View, Image } from "@react-pdf/renderer";

const DocuPdf = ({texto}) => {
  return (
    <Document>
    <Page size="LEGAL">

    <View
    style={{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"
    }}
    
    >
        <Text style={{ color: "#3388af", fontSize: "42px" }}>
        Titulo del artículo
      </Text>
        <Image src="https://picsum.photos/600/400"
        alt="random Image"
        style={{maxWidth:"600px",minHeight:"400px"}}></Image>
        <Text 
        style={{color:"black",fontSize:"12px",fontSize:"italic", padding:"10px 100px "}}
        >
        {texto? texto :"..."}</Text>
        <Text style={{ textAlign: "justify", marginTop: "22px",padding:"10px" }}>
            {texto ? texto : null}
          </Text>
    </View>
    </Page>
    </Document>
  )
}

export default DocuPdf