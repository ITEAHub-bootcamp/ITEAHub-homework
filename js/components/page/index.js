import React, {Component} from 'react';
import Tabledata from '../tabledata';
import {repositories} from '../../mocks/libs-comparison';

const categories = ['id','name','description','stargazers_count','watchers','forks','open_issues','score'];

export default class Page extends Component {
  constructor (...args) {
    super(...args);

    this.state = {
      repositories
    };
  }
// переписати з використанням двох непов'язаних компонентів
/*
<div>
<tab>
<table>
<chart>
</tab>
</div>
* 
* */
  render () {
    return <Tabledata repositories={this.state.repositories.items} categories={categories} />;
  }
}

