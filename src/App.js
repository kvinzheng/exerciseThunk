import React, { Component } from 'react';
import Search from './components/Search/Search.jsx';
import Table from './components/Table/Table.jsx';
import Button from './components/Button/Button.jsx';

import './App.css';

class App extends Component {

  ////////// Render
  render() {
    //get List from where? since it's not in the local state anymore
    const list = [];
    return (
      <div className="page">
        <div className="interactions">
          <Search>
            Search
          </Search>
        </div>
        <Table
          list={list}
        />
        <div className="interactions">
          <Button
            className="ButtonWithLoading"
          >
            More
          </Button>
        </div>
      </div>
    );
  }
}

export default App;
