import React, {Component} from 'react';
import './pie.scss';

import { Pie } from "react-chartjs-2";


let data = [9, 5, 3]
let labels = ["Desktop", "Tablet", "Mobile"]

let customLabels = labels.map((label,index) =>`${label}: ${data[index]}`)

const chartdata = {
  labels: customLabels,
  datasets: [
    {
      label: "Markets Monitored",
      backgroundColor: [
        "#197DE8",
        "#72A3D9",
        "#B2D7FF",
        "#00A6B4",
        "#6800B4",
      ],
      data: data,
    },
  ],
};

export default class PieComponent extends Component{
    render(){
        return (
          <div className="pie">
            <Pie
              data={chartdata}
              options={{
              legend: { display: true, position: "bottom" },

              datalabels: {
                  display: true,
                  color: "white",
              },
              tooltips: {
                  backgroundColor: "#5a6e7f",
              },
              }}
          />
          </div>
        )
    }
}