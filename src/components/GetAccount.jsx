import React from 'react';
import { Banner, Button } from 'flowbite-react';

const GetAccount = ({ type, request, handleSubmit }) => {
    return (
        <Banner className='flex justify-center py-6'>
            <div className="flex w-[90%] flex-col justify-between rounded-lg border p-4 shadow-sm border-gray-600 bg-gray-700 md:flex-row">
                <div className="mb-3 mr-4 flex flex-col items-start md:mb-0 md:flex-row md:items-center">
                    <div className="mb-2 flex items-center border-gray-600 md:mb-0 md:mr-4 md:border-r md:pr-4">
                        <img src="/logo.png" className="mr-2 h-10 lg:h-14" alt="Logo" />
                        <span className="self-center whitespace-nowrap text-lg font-semibold text-white md:pr-6">
                            GhiBank
                        </span>
                    </div>
                    <p className="flex items-center text-sm font-normal text-gray-400">
                        {"Don't have an " + type + " yet or need to " + request + " another one, don't worry, you can request your " + type + " here!"}
                    </p>
                </div>
                <div className="flex shrink-0 items-center">
                    <Button onClick={handleSubmit}>{"Get " + type}</Button>
                </div>
            </div>
        </Banner>
    );
};

export default GetAccount;
