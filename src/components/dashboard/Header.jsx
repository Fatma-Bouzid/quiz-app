import React, {useState} from 'react';
import {BsJustify} from 'react-icons/bs';
import { IoIosSearch } from "react-icons/io";
import './header.css'

export const Header =() => {
    

    return(
        <div>
            <header className='header'>
                
                <div className='searchbox'>
                    <IoIosSearch className='icon'/>
                    <input placeholder='Search..' />
                </div>
                <div>
                    <button  className='startquiz'>Start Quiz</button>
                </div>
                
            </header>
        </div>
    );
};