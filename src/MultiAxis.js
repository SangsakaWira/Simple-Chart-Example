import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    datasets: [
        {
            label: 'Vibration',
            data: [12, 19, 3, 5, 2, 3, 4, 3, 1, 2],
            // fill: false,
            backgroundColor: 'red',
            borderColor: 'red',
            yAxisID: 'y-axis-1',
        },
        {
            label: 'Frequency',
            data: [1, 2, 1, 1, 2, 2, 1, 3, 12,10],
            // fill: false,
            backgroundColor: 'blue',
            borderColor: 'blue',
            yAxisID: 'y-axis-2',
        },
        {
            label: 'Temperature',
            data: [10, 22, 41, 13, 21, 54, 12, 32, 12, 24],
            // fill: false,
            backgroundColor: 'green',
            borderColor: 'green',
            yAxisID: 'y-axis-3',
        },
    ],
};

const options = {
    scales: {
        yAxes: [
            {
                type: 'linear',
                // display: true,
                label: "Vibration",
                // position: 'left',
                id: 'y-axis-1'
            }, {
                type: 'logarithmic',
                label: "Temperature",
                display: true,
                // position: 'right',
                id: 'y-axis-3'
            },
            {
                type: 'logarithmic',
                position: 'right',
                label: "Frequency",
                display: true,
                id: 'y-axis-2'
            }
        ]
    },
};

const MultiAxisLine = () => (
    <>
        <div className='header'>
            <h1 className='title'>Submersible Pump Analytics at PT Saka Pangkah Limited</h1>
        </div>
        <Line data={data} options={options} height={80} />
    </>
);

export default MultiAxisLine;