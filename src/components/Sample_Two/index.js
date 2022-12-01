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
import Sample_Two from '../images/sample_2.png'
import Main from '../main/index'

const SampleTwo = () => {

return(
    <div className="container-fluid">
<div> 
  <img className='obw_logo d-flex' src={Obw_image} alt="BigCo Inc. logo" />
  <h3 className='text_one'>ASSESSMENT</h3>
  <Link to = "/pageone"  element={<Main/>} className=''>
  <button className='btn btn-secondary btn_one float-end btn_top'>Back to Qn 1</button>
  </Link>
</div>

 <div className="row">
    <div className='col-2'></div>
    <div className='col-8'>
 <img className='d-flex img-fluid sample_img' src={Sample_Two} alt="BigCo Inc. logo" />
 </div>
 <div className='col-2'></div>
</div>
</div>
)
};

export default SampleTwo;

