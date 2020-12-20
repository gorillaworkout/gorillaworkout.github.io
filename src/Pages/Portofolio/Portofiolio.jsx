import React, { Component } from 'react';
import './Portofolio.css'
import moon from './../../Assets/moon.jpg'
import fuji from './../../Assets/fuji.jpg'
import round from './../../Assets/round.jpg'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import {AiFillGithub} from 'react-icons/ai'
import {RiReactjsFill} from 'react-icons/ri'
class Portofolio extends Component {
    state = {  }
    render() { 
        return ( 
            <>
            <section className="port-banner" id="sec">
                <header>
                    <a href="/newhome" className="port-logo">GW</a>
                </header>

            </section>
            

            {/* BATAS */}
        <div className="body-port">
            <div className="container">
               <div className="card">
                   <div className="imgBx">
                    <img src={moon} alt=""/>
                   </div>
                   <div className="content">
                    <Popup trigger={<button className="button">Touch Me</button>} className="button" position="left center">
                        <div className="div-pop"> 
                            <a href="#" target="_blank"> <RiReactjsFill/>Open Project</a>
                        </div>
                        <div className="div-pop">
                            <a href="#" target="_blank"><AiFillGithub/>  Open GitHub</a>
                        </div>

                        </Popup>
                    <h2>Earth</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                   </div>
               </div>

               <div className="card">
                   <div className="imgBx">
                    <img src={fuji} alt=""/>
                   </div>
                   <div className="content">
                   <Popup trigger={<button className="button">Touch Me</button>} position="top center">
                        <div className="div-pop"> 
                            <a href="#" target="_blank"> <RiReactjsFill/>Open Project</a>
                        </div>
                        <div className="div-pop">
                            <a href="#" target="_blank"><AiFillGithub/>  Open GitHub</a>
                        </div>

                        </Popup>
                        <h2>Mountain</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                   </div>
               </div>

               <div className="card">
                   <div className="imgBx">
                    <img src={round} alt=""/>
                   </div>
                   <div className="content">
                    <Popup trigger={<button className="button">Touch Me</button>} position="right center">
                        <div className="div-pop"> 
                            <a href="#" target="_blank"> <RiReactjsFill/>Open Project</a>
                        </div>
                        <div className="div-pop">
                            <a href="#" target="_blank"><AiFillGithub/>  Open GitHub</a>
                        </div>

                        </Popup>
                        <h2>Fire</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                   </div>
               </div>
            </div>
        </div>
            </>
         );
    }
}
 
export default Portofolio;