import React, { Component } from "react";
// import API from "../../utils/API";

function Results(props){
    return (
        <div>
            {!props.posts.length ? (
                <h1 className="text-center">No Results to Display</h1>
            ) : (
                    <div>
                        {props.posts.map(result => (
                            <div className="card mb-3" key={result._id}>
                                <div className="row">                                        
                                    <div className="col-md-10">
                                        <div className="card-body">
                                            <h5 className="card-title">{result.hashtag}</h5>
                                            <p className="card-text">{result.post}</p>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
        </div>
    )
}



export default Results;