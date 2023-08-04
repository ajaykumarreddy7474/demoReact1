

import React from 'react'
import './Home-main.css';
import ReactPic from '../pages/home-Pic.jpg';
import ReactPic1 from '../google.jpeg';
import ReactPic2 from '../micro.jpg';
import ReactPic3 from '../netflix.jpg';
import ReactPic4 from '../amazon.jpg';
import ReactPic5 from '../facebook.jpg';
import ReactPic6 from '../ibm.jpg';
import ReactPic7 from '../acc.jpg';
import ReactPic8 from '../bar.jpg';
import ReactPic9 from '../gs.jpg';
import ReactPic10 from '../walll.jpg';
import ReactPic11 from '../ds.jpg';
import ReactPic12 from '../se.jpg';
import ReactPic13 from '../fed.jpg';
import ReactPic14 from '../pm.jpg';

export default function Home() {
  return (
    <div>

    <div className='mark'>
    <div class="marquee">
    <h3>
      <div class="marquee-wrapper">
        <div class="marquee-title">
          / We provide <span class="text-stroke-black">ROUTE</span>
          &amp; make you
          <span class="text-stroke-black">Successs</span> <br></br>/ We Hire
          <span class="text-stroke-black"> you </span>
          &amp; give you a
          <span class="text-stroke-black"> career</span>
        </div>
       
      </div>
    </h3>
  </div>
    </div>


    <h1 className='home1'>recRoute</h1>
    <p className='caption'>The Next Best recruitment  <br></br>ROUTE for your Carrer</p>
    <p className='desp'>A perdominant way to kic start your carrer with our recurment propaganda from our Top most Hirirng managers across the World</p>
 <img className='picone' src={ReactPic}></img>
 

 <div className='box1'></div>
 
 
 
 <div className='full'>
 <div class="signup-container">
  <h4>Sign Up for Our latest recruitment</h4>
  <form>
    <input type="email" value="Enter your email address..." class="email-input" placeholder="Enter your email" required></input>
    <button type="submit" class="submit-button">Sign Up</button>
  </form>
  </div>
</div>





<div className='box1'></div>

<div className='hire'>
<h1>Who we Hire?</h1>
<p>We will hire most talented students and passionte candidates accross the world with amazing skills. The Recuritment team focuses all kind of departmentss such as..</p>
  <div className='all-pics'><img  className='zoompics3' src={ReactPic11}  title='Data Scientists' ></img> <img className='zoompics1'src={ReactPic12} title='Software Engineers'></img> <img   className='zoompics2' src={ReactPic13} title='FrontEnd Developers'></img> <img   src={ReactPic14} title='Products Managers'></img></div>

  <div className='button1'> <button class="simple-button">Data Scientists</button> <button class="simple-button">Software Engineers</button> <button class="simple-button">FrontEnd Developers</button> <button class="simple-button">Products Managers</button> <button class="simple-button">Programmers</button></div>
  
  </div>


<div className='box1'></div>


<h1 className='boxes'>Our MileStones so far...</h1>

<div class="card-box">
        <div class="card card1"><h5><span className='big'>60%</span><br></br> students got recruited</h5></div>
        <div class="card card2"><h5><span className='big'>5X</span><br></br> faster responses</h5></div>
        <div class="card card3"><h5><span className='big'>95%</span><br></br> Placement Support</h5></div>
    </div>
    <div className='box1'></div>

<h1 className='textMark'>Our Top recruiters</h1>

<div className="marquee89">
  <p className='mark12'><img className='img1'src={ReactPic1}></img>    <img className='img1'src={ReactPic2}></img>    <img className='img1'src={ReactPic3}></img>  <img className='img1'src={ReactPic4}></img>    </p>
  </div>

<div>
<div className="marquee90">
  <p className='mark14'>    <img  id='leftside' className='img2'src={ReactPic5}></img>   <img  id='leftside' className='img2'src={ReactPic6}></img> <img id='leftside' className='img2'src={ReactPic7}></img> <img id='leftside' className='img2'src={ReactPic8}></img>  <img id='leftside' className='img2'src={ReactPic9}></img>  <img id='leftside' className='img2'src={ReactPic10}></img></p>
  </div>
</div>


<div className='footbody'>
<footer class="footer">
<div class="container">
  <div class="row">
    <div class="footer-col">
      <h4>company</h4>
      <ul>
        <li><a href="#">about us</a></li>
        <li><a href="#">our services</a></li>
        <li><a href="#">privacy policy</a></li>
        <li><a href="#">affiliate program</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>get help</h4>
      <ul>
        <li><a href="#">Process</a></li>
        <li><a href="#">Candidates</a></li>
        <li><a href="#">Interview</a></li>
        <li><a href="#">Offer Letters</a></li>
        <li><a href="#">Captital</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Recruitment</h4>
      <ul>
        <li><a href="#">Asia</a></li>
        <li><a href="#">North America</a></li>
        <li><a href="#">Australia</a></li>
        <li><a href="#">Africa</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>follow us</h4>
      <div class="social-links">
        <a href="#"><i class="fab fa-facebook-f"></i></a>
        <a href="#"><i class="fab fa-twitter"></i></a>
        <a href="#"><i class="fab fa-instagram"></i></a>
        <a href="#"><i class="fab fa-linkedin-in"></i></a>
      </div>
    </div>
  </div>
</div>
<h1 className='end'><span class="material-symbols-outlined">more_up </span>reRoute </h1>
<p className='endpara'>©2023 reRoute Hiring Services Limited</p>
</footer> 
</div>
    </div>
    
  )
}
