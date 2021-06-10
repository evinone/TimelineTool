import React, {useEffect, useState, createContext, useContext, Component,} from 'react';
import { render } from 'react-dom';
import dayjs from 'dayjs';

const useInput = ()=>{
  const time = Math.round(new Date().getTime());
  const date = dayjs(time).format('YYYY/MM/DD HH:mm:ss');
  let unixState = true;
  let currentTime = dayjs(new Date()).format('YYYY/MM/DD HH:mm:ss')
  const [unixTime, setUnixTime] = useState(time);
  const [standardTime, setStandardTime] = useState(date);
  let tableData = [{
    unixDate: unixTime,
    standardDate: standardTime,
    currentDate: currentTime
  }]
  localStorage.setItem('TableData', JSON.stringify(tableData))
  console.log(tableData)

  const handleClick = () => {
  if(unixState){
    // 时间戳转换日期
    console.log(unixTime, typeof(unixTime));
    const val = dayjs(unixTime).format('YYYY/MM/DD HH:mm:ss');
    setStandardTime(() => val);
    console.log(val);
  } else {
    //  日期转换成时间戳
    const unixVal = dayjs(standardTime).valueOf();
    setUnixTime(() => unixVal);
    console.log(unixVal);
  }
  let data = {
    unixDate: unixTime,
    standardDate: standardTime,
    currentDate: dayjs(new Date()).format('YYYY/MM/DD HH:mm:ss'),
  }
  tableData.push(data)
  localStorage.setItem('TableData', tableData)
  console.log(tableData)
  };

  useEffect(() => {
    console.log('到useeffect里面了')
    unixState = true;
  }, [unixTime])
  useEffect(() => {
    console.log('到useeffect里面了')
    unixState = false;
  }, [standardTime]);

  const unixTimeChange = (event) => {
    console.log('unix发生改变');
    setUnixTime( () => parseInt(event.target.value));
  };

  const standardTimeChange = (event) => {
    console.log('standard发生改变');
    // setStandardTime( () => dayjs(event.target.value).format('YYYY/MM/DD HH:mm:ss'));
    setStandardTime( () => event.target.value);
  }  ;

  return {unixTime, standardTime, handleClick, unixTimeChange, standardTimeChange, tableData}
}

const Input = () => {
  // input输入框
  const {unixTime, standardTime, handleClick, unixTimeChange, standardTimeChange, tableData} = useInput();
    
  return (
    <>
    <div>
      Unix时间戳
      <input  type="text" value={unixTime} onChange={unixTimeChange} placeholder="请输入unix时间" />
      <span>毫秒</span>
      <button
        onClick={handleClick}
      >转换</button>
      时间（年/月/日 时:分:秒）
      <input type="text" value={standardTime} onChange={standardTimeChange} placeholder="请输入普通时间" />
    </div>
    </>
  );
}

  
export default Input;