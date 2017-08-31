import React, {Component} from 'react';
import Tabledata from '../tabledata';
import {repositories} from '../../mocks/libs-comparison';

export default class Page extends Component {
  constructor (...args) {
    super(...args);

    this.state = {
      repositories,
      categories: ['id','name','description','stargazers_count','watchers','forks','open_issues','score']
    };

  }

  render () {
    return (
      <div>
        <Tabledata repositories={this.state.repositories.items} categories={this.state.categories} />
      </div>
    );
  }
}
