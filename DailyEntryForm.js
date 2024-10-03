import React, { useState } from 'react';

function DailyEntryForm({ addRecord }) {
  const [date, setDate] = useState('');
  const [income, setIncome] = useState('');
  const [expenses, setExpenses] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const profit = Math.max(income - expenses, 0);
    const loss = Math.max(expenses - income, 0);

    addRecord({
      date,
      income: parseFloat(income),
      expenses: parseFloat(expenses),
      profit,
      loss
    });

   
    setDate('');
    setIncome('');
    setExpenses('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>-- Daily Entry --</h2>

      <td>Date:</td>
      <input 
        type="date" 
        value={date} 
        onChange={(e) => setDate(e.target.value)} 
        required 
      />

     <td>Income:</td>
      <input 
        type="number" 
        value={income} 
        onChange={(e) => setIncome(e.target.value)} 
        required 
      />

   
    <td>Cost:</td>
      <input 
        type="number" 
        value={expenses} 
        onChange={(e) => setExpenses(e.target.value)} 
        required 
      />
   <td><br></br><button type="submit"class="button" style={{color:'brown'}}>Add Record</button></td>
   

    </form>
  );
}

export default DailyEntryForm;




//-------------
