import React, {Component} from 'react';
import ReactHighcharts from 'react-highcharts';

const configs = {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Stacked bar chart',
        align: 'center',
        x: -5,
        y: 40
    },
    xAxis: {
        categories: ['stargazers_count', 'watchers', 'forks', 'open_issues']
    },
    yAxis: {
        title: {
            text: 'Title'
        }
    },
    tooltip: {
        backgroundColor: '#FCFFC5'
    },
    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },
    legend: {
        backgroundColor: '#FCFFC5',
        borderColor: '#C98657',
        borderWidth: 1,
        reversed: true
    },
}

export default class Charts extends Component {
    render () {
        console.log(this.props.series);
        configs.series = this.props.series;
        return <ReactHighcharts config = {configs}></ReactHighcharts>;
    }
}