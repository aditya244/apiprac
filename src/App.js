import React, { Component } from 'react';
import './App.css';
import { Button } from 'reactstrap';
import axios from 'axios';

class App extends Component{
  state =  {
    posts : [],
  }

  onClickHandler = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts/')
      .then((response) => {
        console.log(response)
        const posts = response.data.slice(0,5);
        this.setState({
         posts : posts
        })
      })
      .catch((response) => {
        console.log(response)
      })
    

  }

  render() {
    const post_data = this.state.posts.map((post) => {
      return <tr>
                <td className="tdId">{post.userId}</td>
                <td className="tdId">{post.id}</td>
                <td className="tdTitle">{post.title}</td>
                <td className="tdTitle">{post.body}</td>
              </tr>
      // for (var keys in post) {
      //   return <td> {post[keys]} </td>
      // }
    });

    // const post_data = this.state.posts.map((post) => {
    //   return <td className="tdId" key={post.id}>{post.title}</td>
    // });

      // return (
      //          <td className="tdtitle" key={post.id}>{post.title}</td>
      // )
      //<li key={post.id}>{post.title}</li>

    // const id = this.state.posts.map((post) => {
    //   return <td className="tdId" key={post.id}>{post.id}</td>
    // });

    return (
      <div className="App">
        <p><Button color="success" onClick = {this.onClickHandler}>Submit</Button> </p>  
         <table className="table">
           {/* <th>
             <td className="tdId">User Id</td>
             <td className="tdId">Id</td>
             <td className="tdTitle">Title</td>
             <td className="tdTitle">Body</td>
           </th> */}
          <tbody>
            {post_data}
          </tbody>
        </table> 
      </div>
    );
  }
}

export default App;
