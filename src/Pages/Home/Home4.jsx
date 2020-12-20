import React, { Component } from 'react';
import './Home4.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 
class Home4 extends Component {
    state = {  

    }
    toggle=()=>{
        let sec= document.getElementById('sec')
        let nav = document.getElementById('navigation')
        sec.classList.toggle('active')
        nav.classList.toggle('active')
    }
    render() { 
        return ( 
       <>   
        <body>
            <section className="banner" id="sec">
                <header >
                    <a href="#" className="logo">GW</a>
                    <div className="toggle" onClick={this.toggle}></div>
                </header>
             <div className="content">
                <h2>dlroW olleH, <br/><span>Bayu Darmawan</span> </h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda excepturi, quae, eius perspiciatis accusantium nam labore quidem sequi eveniet, sapiente non. Tempore beatae explicabo vitae perferendis pariatur nemo neque fugiat!</p>
                <a href="#"> Hire Me</a>
            </div>
            <ul className="sci">
                <li><a href="#" src="facebook.png">

                    <FontAwesomeIcon icon={['fab', 'facebook']} className="ikon" />
                </a></li>
                <li><a href="#" src="twitter.png">
                    <FontAwesomeIcon icon={['fab', 'linkedin']} className="ikon"/>
                </a></li>
                <li><a href="#" src="linkedin.png">
                    <FontAwesomeIcon icon={['fab', 'github']}className="ikon" />      
                </a></li>
            </ul> 
            </section>
             <div className="navigation" id="navigation">
                <ul>
                    <li className="ahref"><a href="#" >Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="/portofolio">Portfolio</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div> 
        </body>

       </>
        )  
    }
}
 
export default Home4;