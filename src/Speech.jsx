import React, { useState } from 'react'
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import Button from '@mui/material/Button';
import './index.css';
import useClipboard from 'react-use-clipboard';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckSharpIcon from '@mui/icons-material/CheckSharp';
const Speech = () => {
  const[text,settext]=useState()
   const[iscopied, setcopied]=useClipboard(text)
   
    const {transcript, listening, browserSupportsSpeechRecognition} = useSpeechRecognition();
    const[change, setchange]=useState(false)
    const listen=()=>SpeechRecognition.startListening({continuous:true})
      if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
      }
  return (
    <>
    <h5>HEYYY..!SPEECH TO TEXT CONVERTER IS HERE 💥 </h5>
      <center> <div className='content'>
    <h3> Speech Recognization</h3>
  <div  className='main' onClick={()=>{
    settext(transcript)
  }} >{transcript}
 </div>
  
  <div className="btn"><Button style={{
      backgroundColor: "#2a222f",
      paddingTop: "5px",
      width: "80px",
      boxShadow: "3px 3px 3px #6d6671",
      borderRadius: "10px",
      color: "white",
      height: "30px",
      marginBottom: "20px",
      fontSize:"10px",
      fontFamily:"m"
  }} onClick={listen}> Start</Button>
<Button  style={{
      backgroundColor: "#2a222f",
      paddingTop: "5px",
      width: "80px",
      boxShadow: "3px 3px 3px #6d6671",
      borderRadius: "10px",
      color: "white",
      height: "30px",
      marginBottom: "20px",
      fontSize:"10px",
      fontFamily:"m"
  }} onClick={SpeechRecognition.stopListening}>Stop</Button>

<Button  style={{
      backgroundColor: "#2a222f",
      
      width: "150px",
      boxShadow: "3px 3px 3px #6d6671",
      borderRadius: "10px",
      color: "white",
      height: "30px",
      marginBottom: "20px",
      fontSize:"10px",
       fontFamily:"m",
       paddingTop:"10px"

  }} onClick={setcopied}>{iscopied? "Copied" : "Copy to Clipboard"}</Button></div>

  
</div></center>
    </>
  
   
  )
}

export default Speech
