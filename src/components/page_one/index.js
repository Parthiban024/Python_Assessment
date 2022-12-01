import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../main.css';
// import { useFormik  } from 'formik';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Ass_image_one from '../images/Ass_image_one.png'
import Obw_image from '../images/Obw_Image.png'
import Main from '../main/index'

const PageOne = () => {

return(
    <div className="container-fluid">
<div> 
  <img className='obw_logo d-flex' src={Obw_image} alt="BigCo Inc. logo" />
  <h3 className='text_one'>ASSESSMENT</h3>
  <Link to = "/main"  element={<Main/>} className=''>
  <button className='btn btn-secondary btn_one float-end btn_top'>Back</button>
  </Link>
</div>

 <div className="row">
    <div className="col-1"></div>
    <div className="col-7 text-start">
    <div className="">
      <h3 className='mt-5'>Question 1:</h3>
      </div><br></br><br></br>
      <div className="">
      <h3 className=''>Desciption</h3>
      <p className=''>We need to create a billing software for a shop. The program will be given below inputs:</p>
      <ul>
        <li>List of items available in the shop, its price and tax percentage.</li>
        <li>Details about the purchase made like the item purchased and the quantity of items will be provided.</li>
        <li>Details about the cash available in the shop like number of notes/coins available in each denomination.</li>
        <li>The program should calculate the price of the purchase and display the detailed bill as output.</li>
      </ul>
      <p>Clear explanations about the input and output are available in the below links:</p>
      <p className=''>Click to get Sample input / output</p>
      <Link to = "/sampleone"  element={<Main/>} className=''>
       <button className='btn btn-primary btn_one'>Sample One</button>
       </Link><br></br><br></br>
       <p className=''>Click to get Sample input / output</p>
       <Link to = "/sampletwo"  element={<Main/>} className=''>
       <button className='btn btn-primary btn_one'>Sample Two</button>
       </Link><br></br><br></br>
       <h3 className=''>Qustion 1</h3>
       <ul>
        <li>ltem code is always numeric and positive.</li>
        <li>Total number of items in the shop will be less than 100.</li>
        <li>Purchased item will always be present in the shop.</li>
        <li>Price, purchased quantity, items are always positive greater than = 0.</li>
        <li>Tax value can be greater than or equal to zero greater than = 0.</li>
        <li>Shop will always have enough cash to pay the balance.</li>
        <li>Final price will be rounded down to whole number.</li>
        <li>Denomination input will be in descending order of value.</li>
        <li>Don't hard code the currency value based on Indian Currencies. The input may take any value for the
currencies and so try to approach a generic logic instead of hard coded currency value. For example, don't
assume that Indian currencies like 2000, 500, 100 etc are only allowed. A currency of value 1500 may also be
allowed in the input.</li>
      </ul>
      </div><br></br><br></br>
    </div>
      
    <div className="col-3 text-start">
    <ul className=' bg_color mt-5 pt-4'>
        <li>Sample input</li><br></br>
        <li>2</li><br></br>
        <li>100|30.00112.00</li><br></br>
        <li>101/20.00|0.00</li><br></br>
        <li>1</li><br></br>
        <li>1011 | 5</li><br></br>
        <li>9</li><br></br>
        <li>2000 | 10</li><br></br>
        <li>500 | 10</li><br></br>
        <li>100 | 10</li><br></br>
        <li>50 | 10</li><br></br>
        <li>20 | 10</li><br></br>
        <li>10 | 10</li><br></br>
        <li>5 | 10</li><br></br>
        <li>2 | 10</li><br></br>
        <li>1 | 10</li><br></br>
        <li>100.00</li><br></br>
      </ul> 
    </div>
    <div className="col-1">

    </div>
   </div>
</div>
)
};

export default PageOne;

