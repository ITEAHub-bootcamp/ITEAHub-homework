import React, {Component} from 'react';
import {repositories} from '../../mocks';
import PropTypes from 'prop-types'
import Charts from './../Charts';

import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';


export default class TableWithData extends Component {
    constructor (...args) {
        super(...args);

        this.state = {
            repositories,
            id: '',
            name: '',
            description: '',
            stargazers_count: '',
            watchers_count: '',
            forks: '',
            open_issues: '',
            chartCollections: [],
            selected: true
        }
        this.onRowSelected = this.onRowSelected.bind(this);
    }
    onRowSelected(rows) {
        console.log(rows)
        rows.map( i => {
            console.log(repositories.items)
            let rowData = repositories.items[i]
            console.log(rowData)
            this.setState({selected: rowData})
            this.state.chartCollections.push({
                name: rowData.name,
                data: [
                    rowData.stargazers_count,
                    rowData.watchers,
                    rowData.forks,
                    rowData.open_issues
                ]}

            );
        });

        this.setState({ chartCollections: this.state.chartCollections});

    }
    render () {
        return (
            <div>
                <Table multiSelectable={true}
                       onRowSelection={this.onRowSelected}>
                    <TableHeader displaySelectAll={false}>
                        <TableRow>
                            <TableHeaderColumn>id</TableHeaderColumn>
                            <TableHeaderColumn>name</TableHeaderColumn>
                            <TableHeaderColumn>description</TableHeaderColumn>
                            <TableHeaderColumn>count</TableHeaderColumn>
                            <TableHeaderColumn>watchers</TableHeaderColumn>
                            <TableHeaderColumn>forks</TableHeaderColumn>
                            <TableHeaderColumn>open_issues</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody stripedRows={true}>
                        {/*{ this.state.repositories.items.map((item,i) => {if (i<5) return( <RepRaws key={i} value={item} />) })}*/}
                        {/*{ this.state.repositories.items.map(item => <RepRaws key={item.id} value={item}  />) }*/}
                        {/*selected={this.state.repositories.items[i]!==-1}* --->Selected all items*/}
                        {this.state.repositories.items.map((item, i) =>
                            {if (i<5) return(
                                <TableRow key={i} value={item} >
                                    <TableRowColumn>{item.id}</TableRowColumn>
                                    <TableRowColumn>{item.name}</TableRowColumn>
                                    <TableRowColumn>{item.description}</TableRowColumn>
                                    <TableRowColumn>{item.stargazers_count}</TableRowColumn>
                                    <TableRowColumn>{item.watchers_count}</TableRowColumn>
                                    <TableRowColumn>{item.forks}</TableRowColumn>
                                    <TableRowColumn>{item.open_issues}</TableRowColumn>
                                </TableRow>
                            )}
                        )}

                    </TableBody>
                </Table>
                <Charts series={this.state.chartCollections} />
            </div>
        );
    }
}