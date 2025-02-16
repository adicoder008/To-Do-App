import React, { Component } from 'react'

export default class Features extends Component {
  render() { //In React, when you create a class component, any data passed to it as attributes (props) is accessible through this.props
    let { title, description, imageUrl,newsUrl ,date,author} = this.props;  //destructuring->to extract things out of props
    //destructuring should happen outside the return() statement
    return (
      // <div className='flex justify-around'>
      
        <div className='h-[450px] flex flex-col border border-solid border-gray-500 rounded-sm'>
          <img className='' src={imageUrl || './public/newsHero.webp'} alt={title || 'news image'}/>
          <div className='flex flex-col '>
            <h5 className='font-bold'>{title}</h5>
            <p>{description}</p>
            <p>author</p>
            <p>By {!author?"":author} Date:{new Date(date).toGMTString()}</p>
            <button target className='bg-red-500 rounded-[5px]' ><a href={newsUrl} target='_blank'>Read more</a></button>
          </div>
        </div>
        

    )
  }
}
