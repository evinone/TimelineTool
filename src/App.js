import React, {useState, useEffect} from "react";
import Input from "./component/Input";
import Table from "./component/Table";
import dayjs from "dayjs";

const appStyle = {
  maxWidth: 1300,
  minHeight: 574,
  fontSize: '18px',
  textAlign: 'center',
  margin: '0 auto',
  backgroundColor: 'pink'
};

const useInput = () => {
  const [tableStateData, setTableStateDdata] = useState([])

  useEffect(()=>{
    let tableData = JSON.parse(localStorage.getItem('TableData'))
    if(!tableData) {
      tableData = []
    }
    setTableStateDdata(tableData)
  },[])

  const addTime = (unixDate, standardDate, currentDate) => {
      let tableDataList = {
        unixDate: unixDate,
        standardDate: standardDate,
        currentDate: currentDate,
      }
      const newList = [tableDataList, ...tableStateData]
      setTableStateDdata(newList)
      localStorage.setItem('TableData', JSON.stringify(newList))
  }

  const delTime = (id) => {
      const newList = [...tableStateData]
      const filterList = newList.map((value,index)=>({...value,id:index})).filter(item=>item.id !== id)
      setTableStateDdata(filterList)
      localStorage.setItem('TableData', JSON.stringify(filterList))
      console.log(tableStateData)
    
  }

  return {addTime, delTime,  tableStateData}
}

const App = () => {
  const {addTime, delTime, tableStateData} = useInput()
  return (
    <div style={appStyle}>
      <h1 style={{textAlign: 'center'}}>unix时间戳工具</h1>
      <Input addTime={addTime} />
      <Table 
      delTime={delTime}
      tableStateData={tableStateData}
      />
    </div>
  )
};

export default App;
