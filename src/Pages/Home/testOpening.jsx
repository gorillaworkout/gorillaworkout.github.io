import React, { Component } from 'react';
import './testOpening.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Modal from 'react-awesome-modal';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import {toast} from 'react-toastify'  
const MySwal = withReactContent(Swal)
 
class testOpening extends Component {
    state = {  
        visible:false,
        nama:'',
        email:'',
        subject:'',
        message:''
    }

    onChangeName=(e)=>{
        this.setState({nama:e.target.value})
    }
    onChangeEmail=(e)=>{
        this.setState({email:e.target.value})
    }
    onChangeSubject=(e)=>{
        this.setState({subject:e.target.value})
    }
    onChangeMessage=(e)=>{
        this.setState({message:e.target.value})
    }

    toggle=()=>{
        let sec= document.getElementById('sec')
        let nav = document.getElementById('navigation')
        sec.classList.toggle('active')
        nav.classList.toggle('active')
    }

    componentDidMount(){
        var slider  = document.getElementById('slider')
        var active = document.getElementById('active')
        var line1 = document.getElementById('line1')  
        var line2 = document.getElementById('line2')
        var line3 = document.getElementById('line3')
        var line4 = document.getElementById('line4')
    
          line1.onclick=function(){
              slider.style.transform = 'translateX(0)'
              active.style.top = '0px';
          }
          line2.onclick=function(){
            slider.style.transform = 'translateX(-25%)'
            active.style.top = '80px';
        }
        line3.onclick=function(){
            slider.style.transform = 'translateX(-50%)'
            active.style.top = '160px';
        }
        line4.onclick=function(){
            slider.style.transform = 'translateX(-75%)'
            active.style.top = '240px';
        }
        
    }

    openModal=()=>{
        this.setState({visible:true})
    }
    closeModal=()=>{
        if(this.state.nama =='' || this.state.email=='' || this.state.subject=='' || this.state.message==''){
            this.setState({visible:false})
            toast.error('Fill the column first!', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }else {
            this.setState({visible:false})
            toast.error('Email TouchDown! Thanks!', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });

        }
        
        
    }
    onChangeadd=(e,property)=>{
        this.setState({...this.addform,[property]:e.target.value})
    }

    render() { 
        console.log(this.state.nama)
        console.log(this.state.email)
        console.log(this.state.subject)
        console.log(this.state.message)
        return ( 
       <>   
        <body>
            <section className="banner" id="sec">
                <header >
                    <a href="#" className="logo">GW</a>
                    <div className="toggle" onClick={this.toggle}></div>
                </header>
             {/* <div className="content">
                
            </div> */}
            <div className="msg-container">
                    <div id="slider">
                        <div className="msg-col">
                          <h1>Hi!</h1>
                          <p> do Good and Good will COME to you </p>
                        
                        <a href="#" onClick={()=>this.openModal()}>Contact Me</a>
                        <div className="div-modal">
                            <Modal visible={this.state.visible} className="div-modal" width="600" height="300" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                                <div className="modal-test">
                                    <div className="div-1">
                                        <p>Get in Touch With Me</p>
                                    </div>
                                    <div className="div-1">
                                        <input type="text" placeholder="Name" value={this.state.nama}  onChange={this.onChangeName}/>
                                    </div>
                                    <div className="div-1">
                                        <input type="text" placeholder="Email" value={this.state.email} onChange={this.onChangeEmail}/>
                                    </div>
                                    <div className="div-1">
                                        <input type="text" placeholder="Subject" value={this.state.subject} onChange={this.onChangeSubject}/>
                                    </div>
                                    <div className="div-1">
                                        <textarea name="Message" id="" cols="15" rows="5" placeholder="Message" value={this.state.message} onChange={this.onChangeMessage}></textarea>
                                    </div>
                                    {/* <a href="javascript:void(0);"  onClick={() => this.closeModal()}>Send</a> */}
                                    <div onClick={() => this.closeModal()} className="btn-send">
                                            
                                        <p>Send</p>
                                    </div>
                                </div>
                            </Modal>
                        </div>
                        {/* batas */}
                        </div>
                        <div className="msg-col">
                          <h1>My Name</h1>
                          <p> do Good and Good will COME to you </p>
                        {/* <a href="#" onClick={()=>this.openModal()}>Contact Me</a> */}
                        <div className="div-modal">
                            <Modal visible={this.state.visible} className="div-modal" width="500" height="300" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                                <div className="modal-test">
                                    <div className="div-1">
                                        <p>Get in Touch With Me</p>
                                    </div>
                                    <div className="div-1">
                                        <input type="text" placeholder="Name" value={this.state.nama}  onChange={this.onChangeName}/>
                                    </div>
                                    <div className="div-1">
                                        <input type="text" placeholder="Email" value={this.state.email} onChange={this.onChangeEmail}/>
                                    </div>
                                    <div className="div-1">
                                        <input type="text" placeholder="Subject" value={this.state.subject} onChange={this.onChangeSubject}/>
                                    </div>
                                    <div className="div-1">
                                        <textarea name="Message" id="" cols="15" rows="5" placeholder="Message" value={this.state.message} onChange={this.onChangeMessage}></textarea>
                                    </div>
                                    {/* <a href="javascript:void(0);"  onClick={() => this.closeModal()}>Send</a> */}
                                    <div onClick={() => this.closeModal()} className="btn-send">
                                            
                                        <p>Send</p>
                                    </div>
                                </div>
                            </Modal>
                        </div>

                        </div>
                        {/* batas */}
                        <div className="msg-col">
                          <h1>Is</h1>
                          <p> Solo Traveller </p>
                        
                        {/* <a href="#" onClick={()=>this.openModal()}>Contact Me</a> */}
                        <div className="div-modal">
                            <Modal visible={this.state.visible} className="div-modal" width="500" height="300" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                                <div className="modal-test">
                                    <div className="div-1">
                                        <p>Get in Touch With Me</p>
                                    </div>
                                    <div className="div-1">
                                        <input type="text" placeholder="Name" value={this.state.nama}  onChange={this.onChangeName}/>
                                    </div>
                                    <div className="div-1">
                                        <input type="text" placeholder="Email" value={this.state.email} onChange={this.onChangeEmail}/>
                                    </div>
                                    <div className="div-1">
                                        <input type="text" placeholder="Subject" value={this.state.subject} onChange={this.onChangeSubject}/>
                                    </div>
                                    <div className="div-1">
                                        <textarea name="Message" id="" cols="15" rows="5" placeholder="Message" value={this.state.message} onChange={this.onChangeMessage}></textarea>
                                    </div>
                                    {/* <a href="javascript:void(0);"  onClick={() => this.closeModal()}>Send</a> */}
                                    <div onClick={() => this.closeModal()} className="btn-send">
                                            
                                        <p>Send</p>
                                    </div>
                                </div>
                            </Modal>
                        </div>

                        </div>

                        {/* batas */}
                        <div className="msg-col">
                          <h1>Bayu Darmawan</h1>
                          <p>the day you plant the seed is NOT THE DAY YOU EAT THE FRUIT</p>
                        
                        {/* <a href="#" onClick={()=>this.openModal()}>Contact Me</a> */}
                        <div className="div-modal">
                            <Modal visible={this.state.visible} className="div-modal" width="600" height="300" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                                <div className="modal-test">
                                    <div className="div-1">
                                        <p>Get in Touch With Me</p>
                                    </div>
                                    <div className="div-1">
                                        <input type="text" placeholder="Name" value={this.state.nama}  onChange={this.onChangeName}/>
                                    </div>
                                    <div className="div-1">
                                        <input type="text" placeholder="Email" value={this.state.email} onChange={this.onChangeEmail}/>
                                    </div>
                                    <div className="div-1">
                                        <input type="text" placeholder="Subject" value={this.state.subject} onChange={this.onChangeSubject}/>
                                    </div>
                                    <div className="div-1">
                                        <textarea name="Message" id="" cols="15" rows="5" placeholder="Message" value={this.state.message} onChange={this.onChangeMessage}></textarea>
                                    </div>
                                    {/* <a href="javascript:void(0);"  onClick={() => this.closeModal()}>Send</a> */}
                                    <div onClick={() => this.closeModal()} className="btn-send">
                                            
                                        <p>Send</p>
                                    </div>
                                </div>
                            </Modal>
                        </div>

                        </div>
                    </div>
            </div>
            
            <div className="controller">
                <div id="line1" ></div>
                <div id="line2" ></div>
                <div id="line3"  ></div>
                <div id="line4" ></div>
                <div id="active" ></div>
            </div>




            <ul className="sci">
                <li><a href="https://www.instagram.com/gorillaworkout/"  target="_blank" src="instagram.png">

                    <FontAwesomeIcon icon={['fab', 'instagram']} className="ikon" />
                </a></li>
                <li><a href="https://www.linkedin.com/in/bayu-darmawan-09470a1b8/" src="twitter.png" target="_blank">
                    <FontAwesomeIcon icon={['fab', 'linkedin']} className="ikon"/>
                </a></li>
                <li><a href="https://github.com/gorillaworkout" src="github.png" target="_blank">
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
 
export default testOpening;