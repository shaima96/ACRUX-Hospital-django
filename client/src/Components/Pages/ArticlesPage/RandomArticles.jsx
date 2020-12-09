import React, { Component } from 'react';
import { connect } from "react-redux"
import {viewArticles} from '../../../Redux/Articles/articlesAction'
class Articles extends Component {
    state = {
        title:'',
        image:'',
        article:''
    }
componentDidMount = async () => {
        var api = await fetch(`http://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=756bad764879424c9c65361163f46baa`)
        var data = await api.json();
        console.log( "artilcles",data)
        //this.props.viewArticles(data)
         this.setState({
             title:data.articles[0],
             image :"image",
             article:"abooooooooooooooooout"
         })
        
      
    }


    render() {
        return (

               <div>
                   {this.state.title}
               </div>

        )
    }

}
const mapDispatchToProps = (dispatch) => {
    return {
    
      viewArticles : articles =>dispatch(viewArticles(articles))
    }
  }
  const mapStateToProps = (state) => {
    return {
        articles :state.data
    }
  }
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(Articles);

