import React, {Component} from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import {Tabs, Tab} from 'material-ui/Tabs';
import Diagram from '../diagram';

const multiSelectable = true,
      enableSelectAll = false,
      selectable = true,
      deselectOnClickaway = false,
      categoriesY = ['stargazers_count','watchers','forks','open_issues','score'];

export default class Tabledata extends Component {
  constructor  (...args) {
    super(...args);

    this.state = {
      valueTab: 'a',
      selected: []
    };

    this.selectRows = this.selectRows.bind(this);
  }

  selectRows = (selectedRows) => {
    this.setState({
      selected: selectedRows
    });
  };

  get charts () {
    return this.state.selected.length ? <Diagram repositories={this.props.repositories} listSelectedRows={this.state.selected} categoriesY={categoriesY} /> : null;
  }

  isSelected = (index) => {
    return this.state.selected.indexOf(index) !== -1;
  };

  handleTabChange = (value) => {
    this.setState({ valueTab: value });
  };

  render () {
    return (
      <div>
        <Tabs
          value={this.state.valueTab}
          onChange={this.handleTabChange}
        >
          <Tab label="Table data" value="a">
            <div>
              <Table selectable={selectable} multiSelectable={multiSelectable} onRowSelection={ this.selectRows } >
                <TableHeader enableSelectAll={enableSelectAll}>
                  <TableRow>
                    {this.props.categories.map(item => <TableHeaderColumn key={item}>{item}</TableHeaderColumn>)}
                  </TableRow>
                </TableHeader>
                <TableBody showRowHover deselectOnClickaway={deselectOnClickaway}>
                  {this.props.repositories.map((item, ind) => <TableRow key={item.id}  selected={this.isSelected(ind)}>
                      {this.props.categories.map(
                        field => <TableRowColumn key={field}>{item[field]}</TableRowColumn>
                      )}
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </Tab>
          <Tab label="Charts" value="b">
            <div>
              { this.charts }
            </div>
          </Tab>
        </Tabs>
      </div>
     )
  }
}
