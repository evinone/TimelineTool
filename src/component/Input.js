import React, {useEffect, useState} from 'react';
import { render } from 'react-dom';
import dayjs from 'dayjs';

const useInput = (addTime) => {
  let unixState = true;
  const time = Math.round(new Date().getTime());
  const date = dayjs(time).format('YYYY/MM/DD HH:mm:ss');
  let currentTime = dayjs(new Date()).format('YYYY/MM/DD HH:mm:ss')
  const [unixTime, setUnixTime] = useState(time);
  const [standardTime, setStandardTime] = useState(date);

  const handleClick = () => {
  if(unixState){
    // 时间戳转换日期
    // console.log(unixTime, typeof(unixTime));
    const val = dayjs(unixTime).format('YYYY/MM/DD HH:mm:ss');
    setStandardTime(() => val);
    setUnixTime(() => unixTime);

    // console.log(val);
  } else {
    //  日期转换成时间戳
    const unixVal = dayjs(standardTime).valueOf();
    setUnixTime(() => unixVal);
    setStandardTime(() => standardTime);
    // console.log(unixVal);
  }
  console.log(unixTime, standardTime, currentTime)
  addTime(unixTime, standardTime, currentTime)
  };

  useEffect(() => {
    // console.log('到useeffect里面了')
    unixState = true;
    // console.log(unixTime)
  }, [unixTime])
  useEffect(() => {
    // console.log('到useeffect里面了')
    unixState = false;
    // console.log(standardTime)
  }, [standardTime]);

  const unixTimeChange = (event) => {
    // console.log('unix发生改变');
    setUnixTime( () => parseInt(event.target.value));
  };

  const standardTimeChange = (event) => {
    // console.log('standard发生改变');
    setStandardTime( () => event.target.value);
  };

  return {unixTime, standardTime, unixTimeChange, standardTimeChange, handleClick}
}

const Input = ({addTime}) => {
  // input转换框
  const {unixTime, standardTime, unixTimeChange, standardTimeChange, handleClick} = useInput(addTime);
  return (
    <>
    <div>
      <span style={{paddingRight: '10px'}}>Unix时间</span>
      <input
       value={unixTime}
       onChange={unixTimeChange}
       placeholder="请输入unix时间"
       style={{
         height: '33px',
         width: '200px',
         fontSize: '17px'
       }}
       />
      <span style={{fontSize: '13px'}}>毫秒</span>
      <button
        onClick={handleClick}
        style={{
          width:'100px',
          height:'35px',
          backgroundColor: '#2b97ff',
          border:0,
          borderRadius:'3px',
          fontSize: '19px',
          margin: '0 10px'
      }}
      >
        转换
      </button>
      时间（年/月/日 时:分:秒）
      <input
       value={standardTime}
       onChange={standardTimeChange}
       placeholder="请输入普通时间"
       style={{
        height: '33px',
        width: '200px',
        fontSize: '17px'
      }}
      />
    </div>
    </>
  );
}

  
export default Input;