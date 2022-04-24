import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';


const MyCharts = () => {

    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]

    return (
        <div   className='dashboard-charts'>

            <div className='line-chart'>
                <LineChart width={500} height={400} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <Line dataKey="sell" stroke="#8884d8"></Line>
                    <XAxis dataKey="month"></XAxis>
                    <YAxis ></YAxis>
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5"></CartesianGrid>
                    <Tooltip></Tooltip>
                </LineChart>
            </div>

            <div className='bar-chart'>
                <BarChart width={500} height={400} data={data}>
                    <XAxis dataKey="month" stroke="#8884d8" />
                    <YAxis />
                    <Tooltip />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <Bar dataKey="sell" fill="#8884d8" barSize={30} />
                </BarChart>
            </div>

        </div>
    );
};

export default MyCharts;