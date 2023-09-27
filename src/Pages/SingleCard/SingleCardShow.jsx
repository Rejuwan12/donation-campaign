import  { PureComponent } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Label } from 'recharts';

const CONSTANT_VALUE = 12;
const LOCAL_STORAGE_KEY = 'donation';

const COLORS = ['#FF444A', '#00C49F'];

export default class Statistics extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      changingValue: JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [],
    };
  }

  render() {
    const changingValueLength = this.state.changingValue ? this.state.changingValue.length : 0;
    const constantValueDegree = ((CONSTANT_VALUE - changingValueLength) * 30).toFixed(2);
    const changingValueDegree = (changingValueLength * 30).toFixed(2);

    const data = [
      { name: 'Total Donation', value: parseFloat(constantValueDegree) },
      { name: 'Your Donation', value: parseFloat(changingValueDegree) },
    ];

    // Calculate percentages
    const totalValue = data.reduce((total, entry) => total + entry.value, 0);
    const dataWithPercentage = data.map((entry) => ({
      name: entry.name,
      value: entry.value,
      percentage: ((entry.value / totalValue) * 100).toFixed(2),
    }));

    return (
      <div>
        <ResponsiveContainer width="100%" height={400}>
          <PieChart width={400} height={400}>
            <Pie
              data={dataWithPercentage}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {dataWithPercentage.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
              <Label
                valueKey="percentage"
                position="center"
                content={({ value }) => `${value}%`}
                fill="#000"
              />
            </Pie>
            <Legend verticalAlign="bottom" height={36} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
