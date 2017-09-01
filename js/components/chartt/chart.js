import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Bar, Line, Pie} from 'react-chartjs-2';
import tableData from '../../mocks'
// import fusioncharts from 'fusioncharts';
// // Load the charts module
// import charts from 'fusioncharts/fusioncharts.charts';
// import ReactFC from 'react-fusioncharts';


export default class Chart extends Component{
  constructor(...args){
    super(...args);
    this.state = {
     chartData:{
       labels: ['free', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
       datasets:[
         {
           label:'Population',
           data:[
             617594,
             181045,
             153060,
             106519,
             105162,
             95072
           ],
           backgroundColor:[
             'rgba(255, 99, 132, 0.6)',
             'rgba(54, 162, 235, 0.6)',
             'rgba(255, 206, 86, 0.6)',
             'rgba(75, 192, 192, 0.6)',
             'rgba(153, 102, 255, 0.6)',
             'rgba(255, 159, 64, 0.6)',
             'rgba(255, 99, 132, 0.6)'
           ]
         },
         {
           label:'lklklk',
           data:[
             61759,
             18105,
             15360,
             10519,
             15162,
             5072
           ],
           backgroundColor:[
             'rgba(255, 99, 132, 0.6)',
             'rgba(54, 162, 235, 0.6)',
             'rgba(255, 206, 86, 0.6)',
             'rgba(75, 192, 192, 0.6)',
             'rgba(153, 102, 255, 0.6)',
             'rgba(255, 159, 64, 0.6)',
             'rgba(255, 99, 132, 0.6)'
           ]
         }
       ]
     }
   }
  }
  render(){
    return(
      <div className="chart">
      <Bar
data={this.state.chartData}
options={{}}
/>
      </div>
    )
  }
}
