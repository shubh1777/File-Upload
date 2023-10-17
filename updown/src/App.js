import {useRef,useState,useEffect} from 'react'
import './App.css';
import { uploadFile } from './services/api';
function App() {
  const [file, setFile]=useState('');
  const [result,setResult]=useState('');

  const fileInputRef=useRef();

  
  
  useEffect(() =>{
    const getImage = async()=>{
      if(file){
        const data=new FormData();
        data.append("name",file.name);
        data.append("file",file);

       let response= await uploadFile(data);
       setResult(response.path);
      }
    }
    getImage();
  },[file])

  const onUploadClick =()=>{
    fileInputRef.current.click();
  }
  console.log(file);

  return (
    <div className='container'>
     <div class='ripple-background'>
  <div class='circle xxlarge shade1'></div>
  <div class='circle xlarge shade2'></div>
  <div class='circle large shade3'></div>
  <div class='circle mediun shade4'></div>
  <div class='circle small shade5'></div>
  </div>
     
      <div className='wrapper'>
        <h1>Up-Down File Sharing</h1>
        <p>upload file and share the download link</p>

        <button onClick={()=> onUploadClick()}>upload</button>
        <input type="file"
        ref={fileInputRef}
        style={{display:'none'}} 
        onChange={(e) => setFile(e.target.files[0])}
        />

        <a href={result} target="_blank">{result}</a>
      </div>
      
    </div>
    
  );
}

export default App;
