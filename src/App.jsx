import React from 'react';
// import Redux from './Pages/Redux';
import TodoRedux from './Pages/TodoRedux';
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div>
      {/* <Redux /> */}
      <TodoRedux />
      <Toaster position='top-right' />
    </div>
  );
}

export default App;
