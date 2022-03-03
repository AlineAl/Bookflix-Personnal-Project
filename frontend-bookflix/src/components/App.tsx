import React, { Component } from 'react';
import CreateLink from './createLink';
import LinkList from './LinkList';
import Header from './Header';
import Login from './Login';
import { Route, Routes } from 'react-router-dom';

class App extends Component {
  render() {
    return <div className="center">
              <Header />
            <div className="ph3 pv1 background-gray">
              <Routes>
                  <Route path='/' element={<LinkList />}></Route>
                  <Route path='/create' element={<CreateLink />}></Route>
                  <Route path='/login' element={<Login />}></Route>
              </Routes>
            </div>
     </div>
  };
};

export default App;
