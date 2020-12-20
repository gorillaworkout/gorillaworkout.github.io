import React, { Component } from 'react';
import './Loading.css'
class Loading extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="body-loading"> 
                <div className="loader">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div> 
            </div>
        )    
}
}
 
export default Loading;