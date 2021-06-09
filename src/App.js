import React from "react";
import Input from "./component/Input/index";

const appStyle = {
  maxWidth: 1300,
  minHeight: 574,
  backgroundColor: 'pink'
};

const App = () => {
  return (
    <div style={appStyle}>
      unix时间戳工具
      <Input />
    </div>
  )
};

export default App;
