import React, { useEffect, useState } from 'react'
import Modal from '../components/Modal'
import { UseDispatch,useDispatch,useSelector } from 'react-redux';
import { getUserList, incByAmount, increament } from '../redux/Slices/userDetails';
import { Table } from './../components/Table';

export const Home = () => {

  let dispatch=useDispatch();

  let counter=useSelector((state)=>state.user.inc);
  let data=useSelector((state)=>state.user.data);
  let loading=useSelector((state)=>state.user.loading);
  let error=useSelector((state)=>state.user.error);

  useEffect(()=>{
    dispatch((getUserList()));
  },[dispatch]);
  console.log(data,loading,error);

  const [head,setHead]=useState([{title:"name"},{title:"description"},{title:"address"}]);

  const [row,setRow]=useState([{title:"bakht"},])

  return (
    <div className='w-full p-2'>
    <div>Counte Value:{counter}</div>
      <button className='w-[150px] h-[50px] rounded-md bg-blue-500 m-3 text-white' onClick={()=>dispatch(increament())}>inc</button>
      <button className='w-[150px] h-[50px] rounded-md bg-blue-500 text-white' onClick={()=>dispatch(incByAmount(0))}>inc</button>
    <div>
      {
        loading && <div>Loading</div>
      }
    </div>
    <div>
      {
        data && data.map((item,index)=>{
          return <p>{index}</p>
        })

          
          
      }
    </div>
    </div>
  )
}
