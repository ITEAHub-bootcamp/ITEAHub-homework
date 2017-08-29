import React, {Component} from 'react';
import {repositories} from '../../mocks';
import PropTypes from 'prop-types'
import MyHighchart from '../highchart';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

import styles from './table.scss';

// class Article extends Component {
//   static propTypes = {
//     item: PropTypes.shape({
//       date: PropTypes.string.isRequired,
//       text: PropTypes.string.isRequired,
//       title: PropTypes.string.isRequired
//     }).isRequired,
//     deleteItem: PropTypes.func
//   };

//   render () {
//     return (
//       <ListItem className={styles.article}>
//         <div><b>date:</b> {this.props.item.date}</div>
//         <div><b>title:</b> {this.props.item.title}</div>
//         <div><b>text:</b> {this.props.item.text}</div>
//         <div>
//           <button>edit article</button>
//           <button onClick={this.props.deleteItem}>delete article</button>
//         </div>
//       </ListItem>
//     );
//   }
// }

// export default class Articles extends Component {
//   constructor (...args) {
//     super(...args);

//     this.state = {
//       articles,
//       title: '',
//       text: ''
//     };

//     this.onInputChanged = this.onInputChanged.bind(this);
//     this.addArticle = this.addArticle.bind(this);
//   }

//   deleteArticle (id) {
//     return () => {
//       const articles = this.state.articles.filter(item => item.id !== id);

//       this.setState({articles});
//     }
//   }

//   addArticle (e) {
//     e.preventDefault();
//     const {title, text} = this.state;
//     const article = {
//       id: Date.now(),
//       text,
//       title,
//       date: new Date().toString()
//     };

//     this.setState({articles: [article, ...this.state.articles]})
//   }

//   onInputChanged (e) {
//     const field = e.target.name;
//     const {value} = e.target;

//     this.setState({[field]: value});
//   }

//   render () {
//     return (
//       <div>
//         <form onSubmit={this.addArticle}>
//           <h2>Create article</h2>
//           <div>
//             <TextField className={styles['parent-size']}
//                        fullWidth={true}
//                        value={this.state.title}
//                        name="title"
//                        onChange={this.onInputChanged}
//                        placeholder="title"
//                        type="text"/>
//           </div>
//           <div>
//             <TextField className={styles['parent-size']}
//                        fullWidth={true}
//                        value={this.state.text}
//                        name="text"
//                        onChange={this.onInputChanged}
//                        placeholder="text" />
//           </div>
//           <input value="Create article" type="submit"/>
//         </form>
//         <List>
//           { this.state.articles.map(item => <Article key={item.id} item={item} deleteItem={this.deleteArticle(item.id)} />) }
//         </List>
//       </div>
//     );
//   }
// 

const i18n = {
  en: {
    name: 'Name'
  },
  ua: {
    name: 'Ім\'я'
  },
}
export default class TableExampleControlled extends Component {
  constructor (...args) {
    super(...args);

    this.state = {
      language: 'en',
      repositories: repositories.items,
      visibleElements: repositories.items.filter((item, id) => id < 5 ),
      itemsShow: 5,
      selected: [],
      selectable: true,
      multiSelectable: true,
      enableSelectAll: false,
      showHeaderCheckboxes: false
    };


  }
  // state = {
    
  // };
  isSelected = (index) => {
    return this.state.selected.indexOf(index) !== -1;
  };

  handleRowSelection = (selectedRows) => {
    this.setState({
      selected: selectedRows,
    });
  };

  render() {
    return (
      <div>
        <Table onRowSelection={this.handleRowSelection} selectable={this.state.selectable}
            multiSelectable={this.state.multiSelectable}>
          <TableHeader displaySelectAll={this.state.showHeaderCheckboxes}>
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>{i18n[this.state.language].name}</TableHeaderColumn>
              <TableHeaderColumn>Status</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {
              this.state.visibleElements.map( (row, index) => (
              <TableRow key={index} selected={this.isSelected(index)}>
                <TableRowColumn>{row.id}</TableRowColumn>
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
        <MyHighchart container={'test_chart'}/>
        <div id="test_chart"></div>
      </div>
    );
  }
}