import { Albumlist } from 'Albumslist'
import React from 'react';
import data from './data.json';
import {Header} from './Header';
import Albumslist from './Albumslist';
import './index.css';

console.log(data)

export const App = () => {
  return ( 
    <>
    < Header />
    < Albumslist />
    </>
  )
}