import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import fetch from './api/DataService';
import Table from 'react-bootstrap/Table';



function App() {
  const [transactions, setTransactions] = useState([]);
  const [customers, setCustomers] = useState({});

  const calculateRewards = (transactionList) => {
    var byCustomer = {};
    if(transactionList) {
      transactionList.map(entry => {
        let points = 0;
        let over100 = entry.amount - 100;

        if(over100 > 0) {
          points += 50 + (over100*2); 
        } else if(entry.amount > 50) {
          points += (entry.amount - 50)*1;
        }

        const month = new Date(entry.transactionDate).toLocaleString('default', { month: 'long' });

        var customer = byCustomer[entry.customerId] || {};
        customer.customerId = entry.customerId;
        customer.name = entry.name;

        if(!customer.transactions) {
          customer.transactions = [];
        } 
        customer.transactions.push({...entry, points});

        if(customer.totalTransactions) {
          customer.totalTransactions += 1;
        } else {
          customer.totalTransactions = 1;
        }

        if(customer.totalPoints) {
          customer.totalPoints += points;
        } else {
          customer.totalPoints = points;
        }

        var byMonth = customer.byMonth || {};

        var monthRecord = byMonth[month] || {};

        if(!monthRecord.transactions) {
          monthRecord.transactions = [];
        } 
        monthRecord.transactions.push({...entry, points});

        if(monthRecord.totalTransactions) {
          monthRecord.totalTransactions += 1;
        } else {
          monthRecord.totalTransactions = 1;
        }

        if(monthRecord.totalPoints) {
          monthRecord.totalPoints += points;
        } else {
          monthRecord.totalPoints = points;
        }

        byMonth[month] = monthRecord;

        customer.byMonth = byMonth;

        byCustomer[entry.customerId] = customer;
      });
    }

    return Object.values(byCustomer);
  }

  useEffect(() => { 
    fetch().then((data)=> {   
      const results = calculateRewards(data);
      console.log(JSON.stringify(results));
      setTransactions(data);          
      setCustomers(results);
    });
  },[]);

  return customers && customers.length > 0 ? (
    <div className="App">
      <header className="App-header">
        Reward App
      </header>
      <div>
        <Table striped bordered hover>
          <thead>
            <tr key={"header"}>
              <th>Customer Id</th>
              <th>Customer Name</th>
              <th>Total Transactions</th>
              <th>Total Points</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, i) => {
              return (
                <>
                  <tr key={i}>
                    <td>{customer.customerId}</td>
                    <td>{customer.name}</td>
                    <td>{customer.totalTransactions}</td>
                    <td>{customer.totalPoints}</td>
                  </tr>
                  <tr key={"subRow"+i}>
                    <td colSpan={4}>
                      <Table striped bordered hover>
                        <thead>
                          <tr key={"sub-header"}>
                            <th>Month</th>
                            <th>Total Transactions (Month)</th>
                            <th>Total Points (Month)</th>
                          </tr>
                        </thead>
                        <tbody>
                        { Object.keys(customer.byMonth).map(key => {
                             return (<tr key={i + "-" + key}>
                                  <td>{key}</td>
                                  <td>{customer.byMonth[key]?.totalTransactions}</td>
                                  <td>{customer.byMonth[key]?.totalPoints}</td>
                              </tr>)
                            })
                          }
                        </tbody>
                      </Table>
                    </td>
                  </tr>
                </>
                )
            })}
          </tbody>
        </Table>
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
}

export default App;
