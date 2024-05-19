import React from 'react'
import Title from '../components/Title';
import { Carousel} from "flowbite-react";
import Loan from '../components/Loan';
import GetBanner from '../components/GetBanner';

const Loans = () => {
  return (
    <>
    <Title title="Your Loans" />
            <section className='flex flex-col items-center gap-4'>
                <div className='flex flex-wrap gap-6 pt-[120px]'>
                    <Loan type={"Mortgage"} amount={"400,000"} dateOfApplication={"20/06/23"}/>
                    <Loan type={"Personal"} amount={"50,000"} dateOfApplication={"05/08/23"}/>
                </div>
                <GetBanner type={"loan"} request={"apply"}/>
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