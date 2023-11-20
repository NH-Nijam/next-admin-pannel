'use client'
import style from './chart.module.css'
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const Chart = () => {
    const data = [
        {
          name: 'Sat',
          visit: 4000,
          clilck: 2400,
         
        },
        {
          name: 'Sun',
          visit: 3000,
          clilck: 1398,
     
        },
        {
          name: 'Mon',
          visit: 2000,
          clilck: 9800,
      
        },
        {
          name: 'Tue',
          visit: 2780,
          clilck: 3908,
      
        },
        {
          name: 'Wed',
          visit: 1890,
          clilck: 4800,
          
        },
        {
          name: 'Thu',
          visit: 2390,
          clilck: 3800,
       
        },
        {
          name: 'Fri',
          visit: 3490,
          clilck: 4300,
         
        },
      ];
    return (
        <div className={style.container}>
            <h2 className={style.title}>Weekly Recap</h2>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip contentStyle={{background:'#151c2c', border:'none'}}/>
                    <Legend />
                    <Line type="monotone" dataKey="clilck" stroke="#8884d8" strokeDasharray="5 5" />
                    <Line type="monotone" dataKey="visit" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart;