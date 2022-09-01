import React from 'react';
import img from './assets/images/2710.png';
import './App.css';
function App() {
  return (
    <>
      <div className="container">
      <div className="container-fluid">
      <div className="firstHalf">
        <h3>Billing & Accounts</h3>
        <div className="firstImg">
         <div className="imgBx">
          <button className='btn btn1'>HR</button>
         <img src={img} alt="" />
         </div>
         <div className="about">
          <div className="firsthalf">
          <p className='one'>Human Resource Module</p>
          <div className='manage'>
          <p>Manage your human resources in </p>
          <p>one place with ease and do much more...</p>
          </div>
          </div>
          <div className="secondhalf">
            <p>For as low as</p>
            <p><b>N 40,000 NGN</b>per employer</p>
          </div>
         </div>
        </div>
        <div className="firstImg">
         <div className="imgBx">
          <button className='btn btn2'>Payroll</button>
         <img src={img} alt="" />
         </div>
         <div className="about">
          <div className="firsthalf">
          <p className='one'>Payroll Module</p>
          <div className='manage'>
          <p>Manage your payroll and salary payment in </p>
          <p>one place with ease and do much more...</p>
          </div>
          </div>
          <div className="secondhalf">
            <p>For as low as</p>
            <p><b>N 60,000 NGN</b>per employer</p>
          </div>
         </div>
        </div>
        <div className="firstImg">
         <div className="imgBx">
          <button className='btn btn3'>Leave Management</button>
         <img src={img} alt="" />
         </div>
         <div className="about">
          <div className="firsthalf">
          <p className='one'>Leave Management Module</p>
          <div className='manage'>
          <p>Manage your human resources in </p>
          <p>one place with ease and do much more...</p>
          </div>
          </div>
          <div className="secondhalf">
            <p>For as low as</p>
            <p><b>N 30,000 NGN</b>per employer</p>
          </div>
         </div>
        </div>
      </div>
      <div className="secondHalf">
        <h5 className='cloud'>CloudletHR</h5>
        <div className="industry">
        <p>Industry tested no1 software solution for</p>
           <p>modern human resource providers</p>
            <p>over the world</p>
        </div>
        <div className="paying">
          <p>Paying</p>
          <b className='money'>N 40,000 NGN</b>
          <p className="bottom">for 300 employees</p>
        </div>
        <div className="button">
           <div className="try"></div>
          <button>Make Payment</button>
        </div>
      </div>
      </div>
      </div>
    </>
  );
}
export default App;
