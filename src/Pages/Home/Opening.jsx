import React, { Component } from 'react';
import './Opening.css'
import Moon from './../../Assets/moon.jpg'
import {Link,NavLink} from 'react-router-dom'
import Jello from 'react-reveal/Jello';

class Opening extends Component {
    state = {  }

  

     
    render() { 
        return ( 
            <>
            <Jello>
                <div className="body-home3">
                    {/* <Link to='/home4'> */}
                    <a href="/newhome" className="home-3">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    {/* <Link to='/' style={{textDecoration:'none'}}><p>GorillaWorkout</p></Link> */}
                    GorillaWorkout
                </a>
                    {/* </Link> */}
            

                </div>
            </Jello>
           
           </>
        )
    }
}
 
export default Opening;