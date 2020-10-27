import React, { Component } from "react";
import API from "../utils/API";
import Results from "../components/Results";

class Posts extends Component {
    state = {
        SavedPosts: [],
    }

    componentDidMount() {
        API.getPosts()
            .then(SavedPosts => 
                
                {console.log(SavedPosts)
                    this.setState({ SavedPosts: SavedPosts.data })})
            .catch(err => console.error(err));
    }

    render() {
        return (
            <div className="container">
                <h2>Saved posts</h2>
                <Results posts={this.state.SavedPosts} />
            </div>
        )
    }
}

export default Posts;