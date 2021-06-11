import React, {useEffect, useState} from 'react';
import { render } from 'react-dom';
import dayjs from 'dayjs';

const useInput = () => {
  let unixState = true;
  const time = Math.round(new Date().getTime());
  const date = dayjs(time).format('YYYY/MM/DD HH:mm:ss');
  let currentTime = dayjs(new Date()).format('YYYY/MM/DD HH:mm:ss')
  const [unixTime, setUnixTime] = useState(time);
  const [standardTime, setStandardTime] = useState(date);

  const handleClick = (addTime) => {
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
  // addTime(unixTime, standardTime, currentTime)
  };

  useEffect(() => {
    console.log('到useeffect里面了')
    unixState = true;
    console.log(unixTime)
  }, [unixTime])
  useEffect(() => {
    console.log('到useeffect里面了')
    unixState = false;
    console.log(standardTime)
  }, [standardTime]);

  const unixTimeChange = (event) => {
    console.log('unix发生改变');
    setUnixTime( () => parseInt(event.target.value));
  };

  const standardTimeChange = (event) => {
    console.log('standard发生改变');
    setStandardTime( () => event.target.value);
  };

  return {unixTime, setUnixTime, standardTime, setStandardTime, unixState, unixTimeChange, standardTimeChange, currentTime}
}

const Input = ({addTime}) => {
  const handleClick = (addTime) => {
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
    props.addTime(unixTime, standardTime, currentTime)
    };
  // input转换框
  const {unixTime, setUnixTime, standardTime, setStandardTime, unixState, unixTimeChange, standardTimeChange, currentTime} = useInput();
  return (
    <>
    <div>
      <span style={{}}>Unix时间</span>
      <input
       value={unixTime}
       onChange={unixTimeChange}
       placeholder="请输入unix时间"
       />
      <span>毫秒</span>
      {/* <button
        onClick={handleClick()}
      > */}
      <button
        onClick={handleClick}
      >
        转换
      </button>
      时间（年/月/日 时:分:秒）
      <input
       value={standardTime}
       onChange={standardTimeChange}
       placeholder="请输入普通时间"
      />
    </div>
    </>
  );
}

  
export default Input;