import axios from "axios";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";




const App = ()=> {
  const [fullname,setFullname] = useState('');
  const [file,setFile] = useState<File | string>("")
  const handleFullnameChange = (e:ChangeEvent<HTMLInputElement>)=> {
    setFullname(e.target.value)
  }
  const handleFileChange = (e:ChangeEvent<HTMLInputElement>) => {
   if(e.target.files == null) return ;
    setFile(e.target.files[0])
    console.log(e.target.files[0])
  }
  const handleSubmit = async (e:FormEvent<HTMLElement>) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append('fullname',fullname)
    formdata.append('data',file)
    const config = {
      headers : {
         "Content-Type":"multipart/form-data"
      }
    }
    console.log(file)
     const res = await axios.post('http://localhost:8000/profil',formdata)
      .then(res=> {
       console.log(res)
       console.log(formdata)
      
      })
    
  }
  const [data,setData] = useState("")

  const getData = ()=> {
     axios.get('http://localhost:8000/profil')
     .then(res=> {
      setData(res.data[5].data)
     })
     
  }
  useEffect(()=> {getData(); console.log('useEffect work correctly')},[])

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder="Fullname" value={fullname} onChange={handleFullnameChange} />
        <input type="file" name="data" onChange={handleFileChange}/>
        <input type="submit" />
      </form>
      <div>
        <img className=" w-52 h-1/2" src={`http://localhost:8000/profil/${data}`} alt="this is the image" />
      </div>
    </div>
  )
}

export default App


















// import axios from 'axios';
// import React, { ChangeEvent, FormEvent, createContext, useContext, useEffect, useState } from 'react'
// import { BrowserRouter,Routes, Route } from 'react-router-dom'

// interface IUser {
//   fullname:string;
//   data:string;
// }

// function App() {
//   const [formdata, setFormdata] = useState<IUser>({fullname:"",data:""})
//   const [url,setUrl]= useState("")
//   const handleChange = (e:ChangeEvent<HTMLInputElement>)=> {
//     const {name,value} = e.target;
//     setFormdata({...formdata,[name]:value})
    
//     console.log(formdata)
//   }
   
//   const handlSubmit = (e:FormEvent<HTMLFormElement>) => {
//     e.preventDefault()
//     const formData = new FormData()
//     formData.append('data', formdata.data)
//     formData.append('fullname',formdata.fullname)
  
    
//     axios.post('http://localhost:8000/profil',formData)
//     .then(res=> {
     
//       console.log(res.data,[1])
//     })
//     .catch(error=> {console.log(error)}) 
//   }

//   useEffect(()=> {
//     axios.get('http://localhost:8000/')
//     .then(res=> {
//      setUrl('http://localhost/'+res.data[0].data)
//       console.log(url)
//     })
//   },[])

//   return (
//     <div>
//         <form action="" onSubmit={handlSubmit} className=' grid justify-center'>
//                <input className=' border border-cyan-700' type="text" value={formdata.fullname} name='fullname' onChange={handleChange}/>
//                <input className=' border border-cyan-700' type="file" name='data' value={formdata.data} onChange={handleChange}/>
//                <input type="submit" className='border bg-cyan-500 m-2' value='Send' />
//                 <img src={url } alt="" />
//         </form>
//     </div>
//   )
// }

// export default App
