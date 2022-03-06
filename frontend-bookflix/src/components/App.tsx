import React, { Component } from 'react';
import CreateLink from './createLink';
import LinkList from './LinkList';
import Header from './Header';
import Login from './Login';
import Search from './Search';
import { Navigate, Route, Routes } from 'react-router-dom';

class App extends Component {
  render() {
    return <div className="center">
              <Header />
            <div className="ph3 pv1 background-gray">
              <Routes>
                  <Route path='/' element={<Navigate replace to="/new/1" />}></Route>
                  <Route path='/create' element={<CreateLink />}></Route>
                  <Route path='/login' element={<Login />}></Route>
                  <Route path='/search' element={<Search />}></Route>
                  <Route path='/top' element={<LinkList />}></Route>
                  <Route path='/new/:page' element={<LinkList />}></Route>
              </Routes>
            </div>
     </div>
  };
};

export default App;
