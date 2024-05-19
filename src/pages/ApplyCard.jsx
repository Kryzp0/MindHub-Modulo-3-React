import React from 'react'
import Title from '../components/Title'
import ProceedButton from '../components/ProceedButton'

const ApplyCard = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui agrego las acciones del envio del formulario hacia la API
        console.log("Formulario enviado!");
    };

    return (
        <>
            <Title title="Apply for a card" />
            <section className='flex flex-col items-start gap-4 pt-[120px]'>
                <form className="flex flex-col gap-4 max-w-sm mx-auto" onSubmit={handleSubmit}>
                    <label htmlFor="cardType" className="block mb-2 text-sm font-medium text-white">Select card type</label>
                    <select id="cardType" className="border border-gray-600 bg-gray-700 text-white text-sm rounded-lg block w-full p-2.5 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500">
                        <option value="">- Select your card type -</option>
                        <option>DEBIT</option>
                        <option>CREDIT</option>
                    </select>
                    <label htmlFor="cardColor" className="block mb-2 text-sm font-medium text-white">Select card mermbership (color)</label>
                    <select id="cardColor" className="border border-gray-600 bg-gray-700 text-white text-sm rounded-lg block w-full p-2.5 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500">
                        <option value="">- Select your card membership -</option>
                        <option>SILVER</option>
                        <option>GOLD</option>
                        <option>TITANIUM</option>
                    </select>
                    <ProceedButton />
                </form>
            </section>
        </>
    )
}

export default ApplyCard