import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../main.css';
// import { useFormik  } from 'formik';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Rectangle_9 from '../images/Rectangle 9.png'
import Obw_image from '../images/Obw_Image.png'
import Main from '../main/index'

const PageTwo = () => {

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
      <h3 className='mt-5'>Question 2:</h3>
      </div><br></br><br></br>
      <div className="">
      <h3 className=''>Desciption</h3>
      <p className=''>You are working on an app for a company like Uber. You will be provided with the number of laps that the
user has taken and travel details (distance, speed and direction) of the laps. Write a program that calculates
the total duration of the trip and also the direction in which the customer has travelled.</p>
<h4>Input:</h4>
      <ul className='list'>
        <li>First line of the input will be the number of laps.</li>
        <li>The rest of the lines in the input will contain entry in the format of "Distance Speed Direction" for each lap.</li>
      </ul>
      <h4>Output:</h4>
      <ul className='list_two'>
        <li>1.First line of the output should show the total duration of the trip in minutes (1)</li>
        <li>2.Second line of the output should show the direction from the starting point (D)</li>
        <li>Constraints:</li>
        <li>1.Possible values of input direction are N, E, W, S</li>
        <ol className='list_three'>
            <li>N-North</li>
            <li>E-East</li>
            <li>W- West</li>
            <li>S-South</li>
        </ol><br></br>
        <li>2.Possible values of Output direction are (N, E, W, S, NE, NW, NS, SW)</li>
        <ol className='list_three'>
            <li>N-North</li>
            <li>E-East</li>
            <li>W- West</li>
            <li>S-South</li>
            <li>NE-North East</li>
            <li>NW-North West</li>
            <li>SE-South East</li>
            <li>SW-South West</li>
        </ol><br></br>
        <li>3. 0.0 KM less than Distance less than 99999.9 KM</li><br></br>
        <li>4.0.0 KMPH less than Speed less than 99999.9 KMPH</li><br></br>
        <li>5. First line of output (1), should be rounded up to the next integer if its a decimal value. You should not
round up the values when you do your calculations. When printing the result, it should be rounded up.</li><br></br>
    <li>Examples:</li>
    <li># 48.001 should be rounded up to 49.</li>
    <li>* 1.5 should be rounded up to 2</li>
    <li>* 5.9999 should be rounded up to 6</li><br></br>
    <li>Assumption:</li>
    <li>1. You can assume that the trip start location and trip end location will not be the same.</li>
    </ul>
      </div><br></br><br></br>
    </div>
      
    <div className="col-3 text-start">
    <ul className=' bg_color mt-5 pt-4'>
        <li>Sample Input</li><br></br>
        <li>3</li><br></br>
        <li>10 50.N</li>
        <li>5 100s</li>
        <li>1</li><br></br>
        <li>Sample Output</li><br></br>
        <li>35</li>
        <li>NE</li><br></br>
        <li>Explanation</li><br></br>
        <li>From the input, we can understand th
at there were 3 laps as the first line of input
says 3. In the first lap, they went

10 km in North direction at 50 KMPH s
peed. Then in the next lap, they went 2
0 km in East direction at 60 KMPH spe
ed. After that, they travelled 5 km in So
uth direction at 100 KMPH speed. Tota
| time will be 35 minutes if you calculat
e the duration from distance and spee
d. The following diagram shows that, t
hey travelled to North East direction, h
ence the second output is NE.</li><br></br>
<img className=' d-flex' src='' alt="BigCo Inc. logo" />
      </ul> 
    </div>
    <div className="col-1">

    </div>
   </div>
</div>
)
};

export default PageTwo;

