import React, {Component} from 'react';
import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import Chart from '../chartt/chart';
import tableData from '../../mocks'

const styles = {
  propContainer: {
    width: 200,
    overflow: 'hidden',
    margin: '20px auto 0',
  },
  propToggleHeader: {
    margin: '20px auto 10px',
  },
};




/**
 * A more complex example, allowing the table height to be set, and key boolean properties to be toggled.
 */
export default class List extends Component {
  constructor(...args){
    super(...args);

    this.state = {
      tableData: tableData,
      fixedHeader: true,
      fixedFooter: true,
      stripedRows: false,
      showRowHover: false,
      selectable: true,
      multiSelectable: true,
      enableSelectAll: false,
      deselectOnClickaway: true,
      showCheckboxes: true,
      height: '300px',
      hello: function (word) {
        console.log('hello', word);
      }
    };
    this._onRowSelection = this._onRowSelection.bind(this);
  }

  _onRowSelection(key) {

  console.log(key, this.state.tableData[key]);
  

};
  handleToggle = (event, toggled) => {

    this.setState({
      [event.target.name]: toggled,

    });
  };

  handleChange = (event) => {
    this.setState({height: event.target.value});
  };


  render() {
    return (
      <div>
        <Table
          onRowSelection={this._onRowSelection}
          height={this.state.height}
          fixedHeader={this.state.fixedHeader}
          fixedFooter={this.state.fixedFooter}
          selectable={this.state.selectable}
          multiSelectable={this.state.multiSelectable}
        >
          <TableHeader
            displaySelectAll={this.state.showCheckboxes}
            adjustForCheckbox={this.state.showCheckboxes}
            enableSelectAll={this.state.enableSelectAll}
          >
            <TableRow>
              <TableHeaderColumn colSpan="7" tooltip="Super Header" style={{textAlign: 'center'}}>
                Super Header
              </TableHeaderColumn>
            </TableRow>
            <TableRow>
              <TableHeaderColumn tooltip="The ID">ID</TableHeaderColumn>
              <TableHeaderColumn tooltip="The Name">Name</TableHeaderColumn>
              <TableHeaderColumn tooltip="The Description">Description</TableHeaderColumn>
              <TableHeaderColumn tooltip="The Stargazers Count">Stargazers_count</TableHeaderColumn>
              <TableHeaderColumn tooltip="The Wathers">Watchers</TableHeaderColumn>
              <TableHeaderColumn tooltip="The Forks">Forks</TableHeaderColumn>
              <TableHeaderColumn tooltip="The Open Issues">Open Issues</TableHeaderColumn>

            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={this.state.showCheckboxes}
            deselectOnClickaway={this.state.deselectOnClickaway}
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows}
          >
            {tableData.map( (row, index) => (
              <TableRow key={index}>
                <TableRowColumn>{index}</TableRowColumn>
                <TableRowColumn>{row.name}</TableRowColumn>
                <TableRowColumn>{row.description}</TableRowColumn>
                <TableRowColumn>{row.stargazers_count}</TableRowColumn>
                <TableRowColumn>{row.watchers}</TableRowColumn>
                <TableRowColumn>{row.forks}</TableRowColumn>
                <TableRowColumn>{row.open_issues}</TableRowColumn>
              </TableRow>
              ))}
          </TableBody>
        </Table>
        <Chart />
      </div>
    );
  }
}
