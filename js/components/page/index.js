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

  render () {
    return <Tabledata repositories={this.state.repositories.items.slice(4,10)} categories={categories} />;
  }
}
