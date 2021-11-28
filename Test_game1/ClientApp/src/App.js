import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import './custom.css'
import {Edit} from "./components/Edit";
import { ListUnits} from "./components/List";

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={ListUnits} />
        <Route path='/list' component={ListUnits} />
        <Route path="/edit/:id" component={Edit}/>
        <Route path="/create" component={Edit}/> 
            
      </Layout>
    );
  }
}
