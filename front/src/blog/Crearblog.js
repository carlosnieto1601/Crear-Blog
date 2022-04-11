import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const URI = "http://localhost:8000/blogs";


const Crearblog = () =>{

    const [title, settitle] = useState('')
    const [contents, setcontents] = useState('')
    const navigate = useNavigate()


    // procedimiento de guardar 

    const guardar = async (e) =>{
        e.preventDefault()
       await axios.post(URI, { title: title, contents: contents})
       navigate('/')
    }

return (
    <div>
        <h1> Crear cliente </h1>
        <form onSubmit={guardar}>
            <div className='mb-3'>
                <label className='form-label'> Titulo </label>
                 <input 
                    value={title}
                    onChange= {(e) => settitle(e.target.value)}
                    type='text'
                    className='form-control'
                 /> 
                 </div>
                 <div className='mb-3'>
                <label className='form-label'> Titulo </label>
                 <input 
                    value={contents}
                    onChange= {(e) => setcontents(e.target.value)}
                    type='text'
                    className='form-control'
                 /> 
                 </div>
                  
            <button type='submit' className='btn btn-primary center' > Guardar </button>
        </form>
    </div>
)

} 

export default Crearblog;