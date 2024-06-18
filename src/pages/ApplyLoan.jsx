import React, { useState, useEffect } from 'react';
import Title from '../components/Title'
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import ProceedButton from '../components/ProceedButton';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'; 
import 'sweetalert2/dist/sweetalert2.min.css';

const ApplyLoan = () => {

  const [loanType, setLoanType] = useState('');
  const [installments, setInstallments] = useState([]);
  const [selectedAccount, setSelectedAccount] = useState('');
  const [amount, setAmount] = useState('');
  const [payments, setPayments] = useState(0);

  const token = useSelector(store => store.loginReducer.token) || localStorage.getItem('token');
  const navigate = useNavigate();
  const [loans, setLoans] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {

    axios.get('https://homebanking-dife.onrender.com/api/loans/', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        console.log(response.data);
        setLoans(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [])

  useEffect(() => {

    axios.get('https://homebanking-dife.onrender.com/api/clients/current', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        console.log(response.data);
        setData(response.data.accounts);
      })
      .catch(error => {
        console.log(error);
      });
  }, [])

  useEffect(() => {
    switch (loanType) {
      case 'Personal':
        setInstallments([6, 12, 24]);
        break;
      case 'Mortgage':
        setInstallments([12, 24, 36, 48, 60]);
        break;
      case 'Automotive':
        setInstallments([6, 12, 24, 36]);
        break;
      default:
        setInstallments([]);
        break;
    }
  }, [loanType]);

  const handleLoanTypeChange = (e) => {
    setLoanType(e.target.value);
  };

  const handlePaymentsChange = (e) => {
    setPayments(e.target.value);
  };

  const handleAccountChange = (e) => {
    setSelectedAccount(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, apply it!'
    });

    if (result.isConfirmed) {
      try {
        const formData = {
          name: loanType,
          amount: amount,
          payments: payments,
          accountNumber: selectedAccount
        };


        await axios.post('https://homebanking-dife.onrender.com/api/loans/apply', formData, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        Swal.fire({
          title: 'Applied!',
          text: 'Your loan has been applied successfully.',
          icon: 'success'
      });
        navigate('/loans');
      } catch (error) {
                const errorMessage = error.response.data;
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: errorMessage,
                  });
                console.log(error);
      }

    }
  };

  return (
    <>
      <Title title="Apply for a loan" />
      <section className='flex flex-col items-start gap-4 pt-[120px]'>
        <form className="flex flex-col gap-4 max-w-sm mx-auto" onSubmit={handleSubmit}>
          <label htmlFor="loanType" className="block mb-2 text-sm font-medium text-white">Loan type</label>
          <select id="loanType" value={loanType} onChange={handleLoanTypeChange} className="border border-gray-600 bg-gray-700 text-white text-sm rounded-lg block w-full p-2.5 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500">
            <option value="">- Select your loan -</option>
            {loans.map(loan => <option key={loan.id} value={loan.name}>{loan.name}</option>)}
          </select>
          <label htmlFor="originatingAccount" className="block mb-2 text-sm font-medium text-white">Originating account</label>
          <select id="originatingAccount" onChange={handleAccountChange} className="border border-gray-600 bg-gray-700 text-white text-sm rounded-lg block w-full p-2.5 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500">
            <option value="">- Select your account -</option>
            {data.map(account => <option key={account.id} value={account.number}>{account.number}</option>)}
          </select>
          <label htmlFor="amount" className="block mb-2 text-sm font-medium text-white">Amount:</label>
          <div className="flex">
            <span className="inline-flex items-center px-3 text-sm border border-e-0 rounded-s-md bg-gray-600 text-gray-400 border-gray-600">
              <RiMoneyDollarCircleFill />
            </span>
            <input type="number" id="amount" onChange={handleAmountChange} className="text-right rounded-none rounded-e-lg border block flex-1 min-w-0 w-full text-sm p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Enter your amount" />
          </div>
          <label htmlFor="installments" className="block mb-2 text-sm font-medium text-white">Installments</label>
          <select id="installments" onChange={handlePaymentsChange} className="border border-gray-600 bg-gray-700 text-white text-sm rounded-lg block w-full p-2.5 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500">
            <option value="">- Select your installments -</option>
            {installments.map((installment, index) => (
              <option key={index} value={installment}>{installment}</option>
            ))}
          </select>
          <ProceedButton />
        </form>
      </section>
    </>
  );
}


export default ApplyLoan