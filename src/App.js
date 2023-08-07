import axios from "axios";
import React, { useEffect, useState } from "react";
import {Button} from "react-bootstrap";
import VistaWeb from "./VistaWeb";
import DocuPdf from "./DocuPdf";
import { PDFViewer,PDFDownloadLink } from "@react-pdf/renderer";
function App() {

  const [randomCite, setRandomCite] = useState(null)
  const Random=Math.floor(numeroAleatorioDecimales())
  const [verWeb, setVerWeb] = useState(false)
  const [verPdf, setfVerPdf] = useState(false)
  
  const Menu = () => {
    return(

      <nav>
       <Button onClick={()=>{
        setVerWeb(!verWeb);
        setfVerPdf(false);
       }}>{verWeb ? " Ocultar Web" : " Ver Web" }</Button>

       <Button onClick={()=>{
        setfVerPdf(!verPdf);
        setVerWeb(false)
       }}>{verPdf ? "Ocultar PDF" : "Ver PDF"}</Button>
       <PDFDownloadLink document={<DocuPdf texto={randomCite}/>}fileName="Caso.pdf">

       <Button >Descargar PDF</Button>
       </PDFDownloadLink>

    </nav>
      );
  };
  useEffect(() => {
  const URL=`https://baconipsum.com/api/?type=all-meat&paras=${Random}&start-with-lorem=1`
    
  axios.get(URL)
  .then(res=>setRandomCite(res.data))
  .catch(err=>console.log(err))
}, [])
console.log(randomCite)


function numeroAleatorioDecimales() {
   var min=0, max=10
  var num = Math.random() * (max - min);
  return num + min;
}

  return (

    <div style={{minHeight:"100vh"}}>
      hola
      <Menu/>
      {randomCite ? 
      <>
    { verWeb ? <VistaWeb texto={randomCite}/>: null}
    { verPdf ?(
      <PDFViewer style={{width:"100%", height:"100vh"}}>
        <DocuPdf texto={randomCite}/>
      </PDFViewer>
     ): null}

      </> :null}
      
    
    
    
    </div>
  );
}

export default App;

