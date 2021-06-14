import react from "react"
const tableStyle = {
  margin: '0 20%',
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
  const {delTime,delAll,tableStateData} = props
return (
  <div style={tableStyle}>
    <div style={{position:'relative', marginTop: '30px'}}>
    <span style={{
      position: 'absolute',
      display: 'inline-block',
      fontSize: '18px',
      fontWeight: '600',
      left: 0
      }}>
        历史记录
        </span>
    <span
     style={{
      position: 'absolute',
      display: 'inline-block',
      fontSize: '18px',
      fontWeight: '600',
      right: 0
      }}
     onClick={delAll}
    >
      全部删除
      </span>
      </div>
      <br />
    <table border='1'>
      <thead>
        <tr>
          <th style={{width: '200px'}}>unix时间</th>
          <th style={{width: '240px'}}>普通时间</th>
          <th style={{width: '240px'}}>转换时间</th>
          <th style={{width: '80px'}}>操作</th>
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