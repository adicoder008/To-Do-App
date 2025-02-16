import { useState } from 'react'
import PropTypes from 'prop-types';//imp line
import React, { Component } from 'react'
import Features from './Features'
import Loading from './Loading'
import InfiniteScroll from 'react-infinite-scroll-component';

export default class App extends Component {

  static defaultProps = { //You can define static defaultProps to set the default props for the class. They will be used for undefined and missing props, but not for null props.
    country: "us",
    pageNo: "1",
    category: "general"

  }

  static propType = {//not imp but we do this as coders so that its easy to find errors
    country: PropTypes.string,
    pageNo: PropTypes.number,
    category: PropTypes.string
  }

  constructor(props) {//if you want to use props in constructor, then take it as the parameter
    super(props); //why super() ans->In JavaScript, when a class extends another class (as App extends Component here), the super() function is required in the constructor.
    //super() calls the constructor of the parent class (Component) and must be invoked before accessing this in the constructor.
    console.log("constructor is running");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0

    }
    document.title = `${this.props.category}-NEWSMONEY`;
  }

  async updateNews() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2c308eef3d3d409381ffbe327d354d46&page=1`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log('Page:', this.state.page);
    console.log('Total Results:', this.state.totalResults);
    console.log('Articles:', this.state.articles);
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false })

  }

  async componentDidMount() {
    this.updateNews();
  }

  handlePrev = async () => {
    // this.setState(this.state.page-1); --> this is wrong because setstate() expects an
    //object or a function and not a direct value
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  }
  handleNext = async () => {//why async ? ANS is below
    this.setState({ page: this.state.page + 1 });
    this.updateNews();//since update news has await inside it and hence we should use async while in the start

  }

  fetchMoreData=async ()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2c308eef3d3d409381ffbe327d354d46&page=1`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: this.state.articles.concat(parsedData.articles), totalResults: parsedData.totalResults, loading: false ,page: this.state.page + 1})

  }

  render() {
    return (

      <div className='w-3/4 mx-auto'>
        <h2 className='text-3xl text-center my-5 '>TOP {`${this.props.category}-NEWSMONEY`} HEADLINES</h2>
        <div className='flex flex-wrap '>
          {/* infinite scrolling here */}
          <InfiniteScroll className='flex flex-wrap'
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            // style={{ display: 'flex', flexDirection: 'column-reverse' }} //To put endMessage and loader to the top.
            //inverse={true} //
            hasMore={this.state.articles.length!==this.state.totalResults}
            // loader={<h4>Loading...</h4>}
            scrollableTarget="scrollableDiv"
          >
            {this.state.articles.map((i) => { //in .map() it is imp to give a uniuqe key to all elemens going through map
              return <div key={i.url} className='p-2 w-1/3'>
                <Features description={i.description ? i.description : ""} title={i.title ? i.title : ""}
                  imageUrl={i.urlToImage} newsUrl={i.url} author={i.author} date={i.publishedAt} />
              </div>
            })}
          </InfiniteScroll>
          <div>
            {this.state.loading && < Loading />}
            {/* <div className='prev/next flex justify-between px-2 w-3/4 mx-auto pt-20'>
              <button disabled={this.state.page <= 1} className='bg-black rounded-sm ml-5 text-white p-2 px-3' onClick={this.handlePrev}>prev</button>{/*its inside class hence this. is used */}
              {/* <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 20)} className='bg-black rounded-sm mr-5 text-white p-2 px-3' onClick={this.handleNext}>next</button>
            </div> */} 

          </div>
        </div>
      </div>
    )
  }
}