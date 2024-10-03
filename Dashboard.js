import React from 'react';

function Dashboard({ records }) {
  const totalIncome = records.reduce((sum, record) => sum + record.income, 0);
  const totalProfit = records.reduce((sum, record) => sum + record.profit, 0);
  const totalLoss = records.reduce((sum, record) => sum + record.loss, 0);

  return (
    <div>
      <h2>~ Dashboard ~</h2>
      <p>Total Income: Rs.{totalIncome}</p>
      <p>Total Profit: Rs.{totalProfit}</p>
      <p>Total Loss: Rs.{totalLoss}</p>
    </div>
  );
}

export default Dashboard;
