import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div className="container">
  <footer className="py-3 my-4">
    <ul className="nav justify-center border-b-2 pb-3 mb-3 ">
      <li className="text-black text-[20px]"><a href="/" className=" px-2 ">Home</a></li>
      <li className="text-black text-[20px]"><a href="/" className=" px-2 ">Features</a></li>
      <li className="text-black text-[20px]"><a href="/" className=" px-2 ">Pricing</a></li>
      <li className="text-black text-[20px]"><a href="/" className=" px-2 ">FAQs</a></li>
      <li className="text-black text-[20px]"><a href="/" className=" px-2 ">About</a></li>
    </ul>
    <p className="text-center text-[20px]">© 2024 Company, Inc</p>
  </footer>
</div>
      </div>
    )
  }
}
