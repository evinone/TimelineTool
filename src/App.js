import React from "react";
import Input from "./component/Input";
import Table from "./component/Table";
const appStyle = {
  maxWidth: 1300,
  minHeight: 574,
  // backgroundColor: 'pink'
};

const useInput = () => {
  
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
