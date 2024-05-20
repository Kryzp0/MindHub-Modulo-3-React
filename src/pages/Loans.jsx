import React, { useEffect, useState } from 'react'
import Title from '../components/Title';
import { Carousel } from "flowbite-react";
import Loan from '../components/Loan';
import GetBanner from '../components/GetBanner';
import axios from 'axios';

const Loans = () => {

  const [data, setData] = useState([]);

  const getData = () => {
    axios.get('http://localhost:8080/api/clients/4')
      .then(response => {
        console.log();
        console.log(response.data.loans);
        setData(response.data.loans);
      })
      .catch(error => {
        console.log(error);
      });
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <>
      <Title title="Your Loans" />
      <section className='flex flex-col items-center gap-4'>
        <div className='flex flex-wrap gap-6 pt-[120px]'>
          {
            data.length > 0 ?
              (
                data.map(loan => <Loan key={loan.id} type={loan.name} amount={loan.amount} dateOfApplication={loan.date} />)
              ) : (<p className='text-white text-lg'>No loans available.</p>)
          }
        </div>
        <GetBanner type={"loan"} request={"apply"} linkTo={"/apply-loan"} />
      </section>
      <div className="h-44 p-6">
        <Carousel>
          <img src="/banner1.jpg" alt="..." />
          <img src="/banner2.png" alt="..." />
          <img src="/banner3.jpg" alt="..." />
          <img src="/banner4.jpg" alt="..." />
        </Carousel>
      </div>
    </>
  )
}

export default Loans