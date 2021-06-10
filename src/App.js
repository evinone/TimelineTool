import React from "react";
import Input from "./component/Input";
import Table from "./component/Table";
const appStyle = {
  maxWidth: 1300,
  minHeight: 574,
  // backgroundColor: 'pink'
};

const useInput = () => {
  const time = Math.round(new Date().getTime());
  const date = dayjs(time).format('YYYY/MM/DD HH:mm:ss');
  const [unixTime, setUnixTime] = useState(time);
  const [standardTime, setStandardTime] = useState(date);
  let currentTime = dayjs(new Date()).format('YYYY/MM/DD HH:mm:ss')

  let tableData = [{
    unixDate: unixTime,
    standardDate: standardTime,
    currentDate: currentTime
  }]
  localStorage.setItem('TableData', JSON.stringify(tableData))

  delTime()

}

const App = () => {
  
  return (
    <div style={appStyle}>
      unix时间戳工具
      <Input />
      <Table />
    </div>
  )
};

export default App;
