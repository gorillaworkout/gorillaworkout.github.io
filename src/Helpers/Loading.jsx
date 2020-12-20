import React, { Component } from 'react';
import ReactLoading from 'react-loading';

class Loading extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                 <ReactLoading type={type} color={color} height={'20%'} width={'20%'} />
            </div>
         );
    }
}
 
export default Loading;