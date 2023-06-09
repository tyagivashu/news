import React, { Component } from 'react'
import Newscard from './Newscard'
import vashu from './vashu.jpg'
import { Button } from 'react-bootstrap';
import Place from './Place';



export default class Casdlist extends Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            Article:[],
            pageNumber:1
          
        }
    }
    async componentDidMount() {
        const response= await  fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=9dbe30a71bff4ae1a758dbf08a270349&pagesize=9&page=${this.state.pageNumber}&category=${this.props.category}`)
        const data= await response.json()
        // console.log(data)
    this.setState({
        loading:false,
        Article:data.articles
        
    })
    }
    nextPagehandler = async () => {
        this.setState({
            loading: true,
            Article: [],
            pageNumber: this.state.pageNumber 
        })
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=9dbe30a71bff4ae1a758dbf08a270349&pagesize=9&page=${this.state.pageNumber + 1}&category=${this.props.category}`)
        const data = await response.json()
        // console.log(data)
        this.setState({
            loading: false,
            Article: data.articles,
            pageNumber: this.state.pageNumber + 1,
            totalresult:data.totalResults
        })
      }
      
      prevPagehandler = async () => {
        this.setState({
            loading: true,
            Article: [],
            pageNumber: this.state.pageNumber 
        })
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=9dbe30a71bff4ae1a758dbf08a270349&pagesize=9&page=${this.state.pageNumber - 1}&category=${this.props.category}`)
        const data = await response.json()
        // console.log(data)
        this.setState({
            loading: false,
            Article: data.articles,
            pageNumber: this.state.pageNumber - 1,
            totalresult:data.totalResults
        })
      }
      newsSearch = async()=>{
let keyword=document.getElementById("keyword")
// console.log(keyword.value);
this.setState({
    loading: true,
    Article: [],
    pageNumber: this.state.pageNumber 
})
const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=9dbe30a71bff4ae1a758dbf08a270349&pagesize=9&page=${this.state.pageNumber - 1}&q=${keyword.value}`)
const data = await response.json()
// console.log(data)
this.setState({
    loading: false,
    Article: data.articles,
    pageNumber: this.state.pageNumber - 1,
    totalresult:data.totalResults
})
      }
    render() { 
        return (
            <div className='container'>
                <div className='top-bar d-flex justify-content-between align-item center'>
                    <div className='left-section'>
                    <h1>Taza Khabar</h1>
                <p className='lead text-center'>See the latest news for all over the world</p>
                    </div>
              <div className='right-section d-flex flex-column-justify'>
              <input type="text" id="keyword"  className='my-5 form-control me-2' placeholder='Search News'></input>
          <Button variant='dark' onClick={this.newsSearch} className='my-5 form-control'> Search</Button>
              </div>
               
                </div>
              
                <div className='row'>
                    {this.state.loading && <Place/>}
                    {this.state.Article.map((element) => {
                        return <div className='col-md-6 col-lg-4 mb-3'>
                            <Newscard 
                            title={element.title}
                            discription={element.description?element.description:"no detail found at the moment"}
                            time={element.publishedAt}
                            image={element.urlToImage?element.urlToImage:vashu}
                            newsurl={element.url}
                            author={element.author?element.author:"Unkonwn Author"}
                            source={element.source.name}
                            
                            />
                            
                        </div>
                    })}

                    <br />

                </div>
                <div className='pagination-buttons my-3 d-flex justify-content-between'>
                <Button variant='dark' onClick={ this.prevPagehandler} disabled={this.state.pageNumber<=1} >Previous</Button>
                <Button variant='dark' onClick={this.nextPagehandler}disabled={this.state.pageNumber>=Math.ceil(this.state.totalresult/9)}>Next</Button>
                </div>
              
            </div>
        )
    }
}

