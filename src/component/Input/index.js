import React, {useEffect, useState} from 'react';
import { render } from 'react-dom';

function Input() {
  const time = Math.round(new Date().getTime());
  const [unixTime, setUnixTime] = useState(time);
  const [standardTime, setStandardTime] = useState(0);

  const handleClick = (props) => {
   console.log(time);
   const val = time.toLocaleString()
   console.log(val.split(','));
  //  val = val.replace(',')
   console.log(val);
   console.log(typeof(val));
  //  console.log(unixTime);
   
  //  console.log(standardTime);
   
  // console.log(new Date());
  };
  
  useEffect(() => {
    console.log('到useeffect里面了')
  }, [unixTime])

   function handleChange(event) {
    console.log('发生改变');
    console.log(unixTime);
    setUnixTime( () => {
      return event.target.value;
    })
  };

  return (
    <div>
      这是input
      <input  type="text" value={unixTime} onChange={handleChange} placeholder="请输入unix时间" />
      <span>毫秒</span>
      <button
        onClick={handleClick}
      >转换</button>
      <input type="text" placeholder="请输入普通时间" />
    </div>
  );
}

  
export default Input;