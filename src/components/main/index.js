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


const Main = () => {

return(
    <div className="container-fluid text-center">
<div> 
  <img className='obw_logo d-flex' src={Obw_image} alt="BigCo Inc. logo" />
  <h3 className='text_one'>ASSESSMENT</h3>
</div>
 <div className="row text-start">
  <div className='col-1'></div>
    <div className="col-5 ms-5">
      <div className="">
      <h3 className='text_two'>PYTHON ASSESSMENT:</h3>
      </div><br></br><br></br>
      <div className="">
      <h3 className=''>Qustion 1</h3>
      <h5 className='mt-3 '>Create a billing software for a shop &nbsp;&nbsp;
      <Link to = "/pageone" className=''>
      <button className='btn btn-primary btn_one'>view</button>
      </Link></h5>
     </div><br></br><br></br>
      <div className="">
      <h3 className=''>Qustion 2</h3>
      <h5 className='mt-3'>Create a billing software for a shop &nbsp;&nbsp;
      <Link to = "/pagetwo" className=''>
      <button className='btn btn-primary btn_one'>view</button>
      </Link></h5>
     </div>
    </div>
    <div className="col-5">
      <div className="Image_One">
        <img className='' src={Ass_image_one} alt="BigCo Inc. logo" />
      </div>
    </div>
<div className='col-3'></div>
   </div>
</div>
)
};

export default Main;

