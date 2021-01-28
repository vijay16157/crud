import React, { Component } from "react";
import Chart from "react-apexcharts";


class Apps extends Component {
  constructor(props) {
    super(props);

    this.state = {
          
      series: [50, 10, 5],
      options: {
       
        labels: ['open', 'Resolved', 'In progress'],
        responsive: [{
         
        }]
      },
    
    
    };
  }

  render() {
    return (
      <div className="apps">
        <div id="chart">
  <Chart options={this.state.options} series={this.state.series} type="pie" width={320} />
</div>
    
        
      </div>
    );
  }
}

export default Apps;