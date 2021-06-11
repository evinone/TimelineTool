import react from "react"
const tableStyle = {
  margin: '0 auto',

}

const ShowData = ({showTableData,delTime}) => {
  // console.log(showTableData)
  return <>
  {
    showTableData.map((val, index) => {
      return (
     <tr key={Math.random()}>
       <td>{val.unixDate}</td>
       <td>{val.standardDate}</td>
       <td>{val.currentDate}</td>
       <td onClick={() => delTime(index)}>X</td>
     </tr>
     )}
   )
  }
  </>
  
}

const unixTable = (props) => {
  const {delTime,tableStateData} = props
return (
  <div style={tableStyle}>
    <h3 style={{textAlign: 'left'}}>历史记录</h3>
    <table border='1'>
      <thead>
        <tr>
          <th>unix时间</th>
          <th>普通时间</th>
          <th>转换时间</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <ShowData delTime={delTime} showTableData={tableStateData} />
      </tbody>
    </table>
  </div>
)
}

export default unixTable