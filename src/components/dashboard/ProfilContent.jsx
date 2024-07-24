import React from 'react';
import './content.css';
import Homme from '../../assets/homme.jpg';
import { TiFlag } from "react-icons/ti";
import { IoIosTime } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";

const ProfileContent = () => {
  return (
    <div className="profilecontent--container">
      <img src={Homme} alt="Google logo" className="Homme" />
      <div className="userinfo">
        <h1 className='loginuser'>Oluwatobi Olowu</h1>
        <p className='soustitreloginuser'>Bonus booster 24lv</p>
        <div className="timing">
          <div className='itemprofile'>
            <TiFlag className='icon' />
            <div>
              <p className='itemtime'>27</p>
              <p className='quiztime'>Quiz Passed</p>
            </div>
          </div>
          <div className='itemprofile'>
            <IoIosTime className='icon' />
            <div>
              <p className='itemtime'>27min</p>
              <p className='quiztime'>Fastest Time</p>
            </div>
          </div>
          <div className='itemprofile'>
            <FaCheckCircle className='icon' />
            <div>
              <p className='itemtime'>200</p>
              <p className='quiztime'>Correct Answers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileContent;
