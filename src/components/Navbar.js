import React, { useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './index.css'
import files from './trending_list'



export default function Navbar() {
    const [data,setData]=useState('')
    let navigate=useNavigate()
    const onChange=(event)=>{
        setData(event.target.value)
    }
    const onClick=(event)=>{
        console.log('onclick event');
        navigate('/account')
    }
    
    return (
        <div className='root'>
            <div className="start">
                <img src='/images/disney-hotstar-logo-dark.svg' alt='not found' width={120}/>
                <ul>
                    <li><Link to='/'> Home</Link></li>
                    <li><Link to='/popular'>Popular</Link></li>
                    <li><Link to='/movies'>Movies</Link></li>
                    <li><Link to='/series'>Series</Link></li>   
                </ul>
            </div>
            <div className="input-login">
                <div className="input">
                    <input type="text" placeholder='Search' onChange={onChange} />
                    <div id="dropdown">
                        {
                            files.map((value)=>{
                                if(data!=='')
                                    if(value.title.toLowerCase().includes(data.toLowerCase()))
                                        return <div className='item'>
                                                    <Link to={`/series/${value.title}`} className='link'>
                                                        <img src={`../images/${value.file_name}`} alt="not found" width={100} height={55}/>
                                                    </Link>
                                                    <Link to={`/series/${value.title}`} className='link'>
                                                          <h3>{value.title}</h3>
                                                    </Link>
                                                </div>
                                return null
                            })
                        }
                    </div>
                </div>
                <div className='login'>
                    <i className='material-icons'>account_circle</i>
                    <button onClick={onClick}>testUser</button>
                </div>
            </div>
        </div>
    )
}
