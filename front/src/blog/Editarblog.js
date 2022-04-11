import axios from 'axios';
import { useEffect, useState } from 'react';
import {  useNavigate , useParams} from 'react-router-dom';

const URI = "http://localhost:8000/blogs";

const CompEditBlog = () => {

    const [title, setTitle] = useState('')
    const [contents, setContents] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

        const update = async (e) =>{
            e.preventDefault()
            await axios.put(URI+ id, {
                title:title,
                contents:contents
            })
            navigate('/')

        }

   useEffect(() => {
    getBlogById()
},[])

const getBlogById =  async (e) => {
   const res=  await axios.get(URI+id)
    setTitle (res.data.title)
    setContents (res.data.contents)
}

return (

    <div>
        <h1> Crear cliente </h1>
        <form onSubmit={update}>
            <div className='mb-3'>
                <label className='form-label'> Titulo </label>
                 <input 
                    value={title}
                    onChange= {(e) => setTitle(e.target.value)}
                    type='text'
                    className='form-control'
                 /> 
                 </div>
                 <div className='mb-3'>
                <label className='form-label'> Contents </label>
                 <input 
                    value={contents}
                    onChange= {(e) => setContents(e.target.value)}
                    type='text'
                    className='form-control'
                 /> 
                 </div>
                  
            <button type='sibmit' className='btn btn-primary' > Guardar </button>
        </form>
    </div>
)

}

export default CompEditBlog;