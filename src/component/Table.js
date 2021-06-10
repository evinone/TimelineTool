import { useContext } from "react"

const useInput = () => {
  const data = JSON.parse(localStorage.getItem('TableData'));
  console.log(data)
  const tableData = data.map((val) => {
    return (
    <tr key={Math.random()}>
      <td>{val.unixDate}</td>
      <td>{val.standardDate}</td>
      <td>{val.currentDate}</td>
      <td>X</td>
    </tr>
    )}
  )

  return {tableData}
}

const unixTable = () => {
  const {tableData} = useInput()
return (
  <div>
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
        {tableData}
      </tbody>
    </table>
  </div>
)
}

export default unixTable