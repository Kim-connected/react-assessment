import React, {Component} from 'react';
import PostData from '../data/posts.json';

import PostDetail from './PostDetail';

class PostSorting extends Component{
  constructor(props) {
    super(props)
    this.toggleListRevese = this.toggleListRevese.bind(this)
    this.toggleSortDate = this.toggleSortDate.bind(this)
    this.state ={
      postList: []
    }
  }

  toggleSortDate (event) {
    const postList = this.state
    let newPostList = postList
    this.setState({
      postList: newPostList.sort((a,b)=> a.date > b.date)
    })
  }

  

  toggleListRevese (event){
    const postList = this.state
    let newPostList = postList.reverse()
    this.setState({
      postList: newPostList
    })
  }

  componentDidMount (){
    const postList = PostData
    this.setState({
      isOldestFirst: true,
    })
  }
}
