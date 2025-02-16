import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';

export class Navbar extends Component {
//   static propTypes = {

//   }

  render() {
    return (
      <div className="" >
         <nav className='flex justify-between' >{/*style={{backgroundColor:"#FFF8E6"}} */}
            <div className="LOGO/NAME pl-2 flex items-center ">
                <img src="./logo.png" className='w-10' alt="newspaper" />
                <div className='pl-2 text-[20px]'> NEWSMONKEY</div>

            </div>
            
                <ul className='NAVBAR list-none flex gap-3 pr-10 text-[20px]'>
                <li className='flex flex-col justify-center'><Link to="/">Home</Link></li>
                <li className='flex flex-col justify-center'><Link to="Health">Health</Link></li>  {/*to means it this path once this is pressed  */}
                <li className='flex flex-col justify-center'><Link to="Sports">Sports</Link></li>
                <li className='flex flex-col justify-center'><Link to="Entertainment">Entertainment</Link></li>
                <li className='flex flex-col justify-center'><Link to="Business">Business</Link></li>
                <li className='flex flex-col justify-center'><Link to="Science">Science</Link></li>
                <li className='flex flex-col justify-center'><Link to="Technology">Technology</Link></li>
                
                </ul>

              <div className='flex items-center'>
                <input type="search" placeholder=' search' className=' border-1 border-black rounded-[5px] p-1 mt-2'/>
                <button type='button' className='bg-black text-white rounded-[5px] mx-2 px-2 pb-2'>Sign In</button>
              </div>
            
        </nav> 
        {/* <div className="py-4 font-serif text-center text-5xl bg-[url('./hero-3.webp')] bg-cover h-screen">STAYING INFORMED , SIMPLIFIED</div>      */}
      </div>
    )
  }
}

export default Navbar
