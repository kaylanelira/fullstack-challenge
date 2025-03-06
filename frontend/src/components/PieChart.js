import { PieChart, Pie, Cell, Legend } from 'recharts';

function PieChartParticipation({participations}) {
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF0020'];

  const chartData = participations.map(participation => ({
    name: participation.first_name,
    value: participation.participation_pct,
  }));

  if (!participations || participations.length === 0) {
    return <p>No data available</p>;
  }

  return (
    <PieChart width={700} height={400}>
      <Pie
        data={chartData}
        dataKey="value"
        nameKey="name"
        innerRadius={70}
        cy='10%'
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
      </Pie>
      <Legend align="right" layout='vertical' iconType='square' verticalAlign='center'/>
    </PieChart>
  );
}

export default PieChartParticipation