import React, {Component} from 'react';
// import {articles} from '../../mocks';
import {repositories} from '../../mocks/libs-comparison';
// import PropTypes from 'prop-types'
// import {List, ListItem, TextField} from 'material-ui';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import ReactHighcharts from 'react-highcharts';

// import styles from './list.scss';

class TableData extends Component {
  constructor  (...args) {
    super(...args);

    this.state = {
      multiSelectable: true,
      enableSelectAll: false,
      selectable: true
    };
  }

  render () {
    return (
      <Table selectable={this.state.selectable} multiSelectable={this.state.multiSelectable} onRowSelection={ selectedRows => this.props.selectRows( selectedRows.map(item => this.props.repositories[item].id) ) } >
        <TableHeader enableSelectAll={this.state.enableSelectAll}>
          <TableRow>
            {this.props.categories.map(item => <TableHeaderColumn key={item}>{item}</TableHeaderColumn>)}
          </TableRow>
        </TableHeader>
        <TableBody>
          {this.props.repositories.map(item => <TableRow key={item.id}><TableRowColumn>{item.id}</TableRowColumn><TableRowColumn>{item.name}</TableRowColumn><TableRowColumn>{item.description}</TableRowColumn><TableRowColumn>{item.stargazers_count}</TableRowColumn><TableRowColumn>{item.watchers}</TableRowColumn><TableRowColumn>{item.forks}</TableRowColumn><TableRowColumn>{item.open_issues}</TableRowColumn><TableRowColumn>{item.score}</TableRowColumn></TableRow> )}
        </TableBody>
      </Table>
    );
  }
}

class DiagramCharts extends Component {
  constructor  (...args) {
    super(...args);

    this.state = {
      configcharts : {
        colors: ['#7cb5ec', '#f7a35c', '#90ee7e', 'red', '#7798BF', '#ff0066', '#eeaaee', '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
        chart: { type: 'bar' },
        title: { text: 'Stats repositories' },
        legend: { enabled: true, reversed: true },
        xAxis: {
          categories: this.props.repositories.map( item => item.name)
        },
        yAxis: {
          min: 0,
          title: { text: 'Numerical characteristics' }
        },
        plotOptions: {
          series: { stacking: 'normal' }
        },
        series:  this.props.categoriesY.map( item => { let arr = {}; arr.name=item; arr.data=this.props.listSelectedRows.map( zn => this.props.repositories[zn][item] ); return arr;} )
      }
    };
  }

  render() {
    return  <ReactHighcharts config={this.state.configcharts} />
  }
}

export default class Articles extends Component {
  constructor (...args) {
    super(...args);

    this.state = {
      repositories,
      categories: ['id','name','description','stargazers_count','watchers','forks','open_issues','score'],
      categoriesY: ['stargazers_count','watchers','forks','open_issues','score'],
      listSelectedRows: [],
      title: '',
      text: ''
    };

    this.selectRows = this.selectRows.bind(this);
  }

  selectRows ( arr ) {
    console.log(this);
    this.setState({listSelectedRows: arr});
    console.log( arr );
  }

  render () {
    return (
    <div>
       <TableData repositories={this.state.repositories.items} categories={this.state.categories}  selectRows={this.selectRows}/>
       <hr/>
       <DiagramCharts repositories={this.state.repositories.items} listSelectedRows={this.state.listSelectedRows} categoriesY={this.state.categoriesY} />
    </div>
    );
  }
}
