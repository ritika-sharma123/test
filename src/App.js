import React from 'react';
import Header from './components/Header';
import { makeStyles } from '@mui/styles';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import LoginPage from './pages/Login';

const useStyles = makeStyles({
  container:{
    height: '100vh',
  }
})


function App() {

  const classes = useStyles();

  return (
    <div className={classes.container}>
      {/* <Header/> */}
      <Routes>
        <Route path="/" element={<Navigate replace to="/Login" />} />
        <Route default path="/login" element={<LoginPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
