import React, { useState } from 'react';
import { Modal } from '@mui/material';
import cancel from '../../assets/cancel.png';
import { useForm } from "react-hook-form";
import GreenTick from '../../assets/Vector.png';
import arrow from '../../assets/downArrow.png'
import axios from 'axios';

const IntProcesModal = ({ open, Close, datas, setData, setFourthModalOpen, SetSubmitted }) => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const closeModal = () => {
        Close(); // Close the JobModal1
    };

    const onSubmit = async (data) => {
        setData({ ...datas, form3: data })
        // console.log('hi',datas)
        SetSubmitted(true)
        setFourthModalOpen(false);
    };

    const [rounds, setRounds] = useState([
        { id: 1, },
        { id: 2, },
        { id: 3, },
        { id: 4, },
    ]);

    const handleCancelRound = (id) => {
        // Remove the round with the specified id
        setRounds((prevRounds) => prevRounds.filter((round) => round.id !== id));
    };

    const handleAddRound = () => {
        // Add a new round with default values
        const newRound = {
            id: rounds.length + 1,
            name: `Round ${rounds.length + 1}`,
            description: 'Default Description',
        };
        setRounds((prevRounds) => [...prevRounds, newRound]);
    };

    return (
        <div>
            <Modal open={open} className='flex items-center justify-center '>
                <div className="w-[90%]  sm:w-[85%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[45%]  bg-white rounded-[1.875rem] shadow-md relative justify-center items-center">

                    {/* heading */}
                    <div>
                        <div className="text-black text-[1.15rem] font-600 font-Poppins mt-[1.95rem] flex justify-center cursor-default">Create a Job</div>
                        <img src={cancel} className="w-5 h-5 absolute right-5 -mt-7 cursor-pointer" onClick={closeModal} alt="cancel" />
                    </div>

                    {/* bullets */}
                    <div className='flex justify-center sm:flex-row gap-6  ml-3 sm:ml-0 mt-[1.3rem]'>
                        <span className='flex flex-row gap-2'>
                            <div className="w-5 h-5 bg-green-600 rounded-full flex justify-center ">
                                <img src={GreenTick} className='w-[0.59rem] h-2 mt-[0.40rem]'></img>
                            </div>
                            <p className="text-black text-xs font-400 mt-[0.15rem]  font-Poppins">Job Application </p>
                        </span>
                        <div className="flex flex-row gap-2 mb-2 sm:mb-0">
                            <div className="w-5 h-5 bg-green-600 rounded-full flex justify-center ">
                                <img src={GreenTick} className='w-[0.59rem] h-2 mt-[0.40rem]'></img>
                            </div>
                            <p className="text-black text-xs font-400 mt-[0.15rem] font-Poppins cursor-default">Job Description</p>
                        </div>
                        <div className="flex flex-row gap-2">
                            <span className="text-black text-xs font-semibold font-Outfit border-2 border-dotted border-black border-opacity-50 w-5 h-5 flex justify-center rounded-full">
                                3
                            </span>
                            <p className="text-black text-xs font-400 mt-[0.15rem] font-Poppins cursor-default">Interview Process</p>
                        </div>
                    </div>

                    {/* grey div1 */}
                    <div className="w-[90%] h-[4rem] ml-6 xl:ml-8 2xl:ml-10 flex items-center justify-center mt-3 bg-slate-50 rounded-[1.875rem]" >
                        <p className="w-[90%] h-[3rem]  text-center text-zinc-500 text-[0.73rem] font-medium font-Poppins cursor-default">A job represents a new opening, an open position, or a vacancy listing. Creating a job will allow you to add candidates to that job and advertise it on your career page and job boards.</p>
                    </div>

                    {/* interview Rounds list */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='w-full  flex flex-col gap-y-[0.25rem] justify-center items-center mt-[2.5rem] sm:mt-[1.5rem]'>
                            {/* rounds  */}
                            {rounds.map((round) => (
                                <div key={round.id} className='flex gap-2 relative w-3/4  items-center justify-center'>
                                    <div className="w-24 h-9 bg-white rounded-lg border border-black">
                                        <input placeholder='Round' className="text-neutral-400 w-[90%] pl-1 h-full text-[0.75rem] ml-1 font-500 font-Poppins" />
                                    </div>
                                    <div className="w-[45%] lg:w-[40%] h-9 bg-white rounded-lg border border-indigo-600 flex relative" >
                                        <input className="outline-none text-[0.75rem] w-[90%] ml-[0.4rem] flex items-center font-500 font-['Poppins']" placeholder='Description' />
                                        <img
                                            src={cancel}
                                            className='w-5 h-5 absolute mt-[0.5rem] -right-2'
                                            onClick={() => handleCancelRound(round.id)}
                                            alt="cancel"
                                        ></img>
                                    </div>
                                </div>
                            ))}
                            {/* add button */}
                            <button className="w-20 h-9 mr-[60%] ml-[22%] lg:ml-[27%] mt-[0.25rem]  bg-black rounded-lg" type='button' onClick={handleAddRound}>
                                <p className="text-white text-[0.75rem] font-medium font-Inter">Add Round</p>
                            </button>
                        </div>


                        {/* Last Part */}
                        <div className='grid grid-cols-2 mt-[0.75rem] ml-[2rem] sm:ml-[5rem] gap-x-6 justify-center items-center mr-4'>
                            <div>
                                <div className="text-black text-[0.75rem] font-semibold font-['Poppins'] mb-[0.4rem] cursor-default">Kindly Check the Skills</div>
                                <div className="w-[65%] h-8 bg-gray-100 rounded-lg flex items-center justify-center ">
                                    <input className="text-neutral-400  w-[90%] text-[0.7rem] pl-1 h-full font-medium font-['Poppins'] outline-none bg-gray-100" placeholder='Required skill' {...register("Neccessary_skill")} />
                                </div>
                            </div>
                            <div>
                                <div className="text-black text-[0.75rem] font-semibold font-['Poppins'] mb-[0.4rem] cursor-default">Any Platform or Qualification</div>
                                <div className="w-[65%] h-8 bg-gray-100 rounded-lg flex items-center justify-center" >
                                    <input className="text-neutral-400  w-[90%] text-[0.7rem] pl-1 h-full font-medium font-['Poppins'] outline-none bg-gray-100" placeholder='Qualification' {...register("Qualification")} />
                                </div>
                            </div>

                            <div>
                                <span className='flex flex-row justify-start mt-[0.5rem]'>
                                    <p className="text-black text-[0.75rem] font-semibold font-Poppins mt-[0.2rem] cursor-default">Finalize Questioner</p>
                                    <button className='w-20 h-5 bg-indigo-600 rounded ml-0 sm:ml-[1rem] '>
                                        <p className='text-white text-[0.5rem] font-normal font-Poppins cursor-pointer'>Edit with AI</p>
                                    </button>
                                </span>
                                <div className="w-[89%] h-[5.5rem]  bg-gray-100 rounded-lg cursor-text mt-2" >
                                    <textarea placeholder="Write questions for interns" className="w-full h-full bg-gray-100 p-2 text-[0.75rem] text-gray-500 font-500 font-Poppins focus:outline-none" {...register("Questions")} />
                                </div>
                            </div>

                            <div>
                                <span className='flex flex-row justify-start mt-[0.5rem]'>
                                    <p className="text-black text-[0.75rem] font-semibold font-Poppins mt-[0.2rem] cursor-default">Share Availability</p>
                                    <button className='w-20 h-5 bg-indigo-600 rounded ml-[1rem] '>
                                        <p className='text-white text-[0.5rem] font-normal font-Poppins cursor-pointer'>Edit with AI</p>
                                    </button>
                                </span>
                                <div className="w-[89%] h-[5.5rem]  bg-gray-100 rounded-lg cursor-text mt-2" >
                                    <textarea placeholder="if selected what is required availbility " className="w-full h-full bg-gray-100 p-2 text-[0.75rem] text-gray-500 font-500 font-Poppins focus:outline-none" {...register("Availablity")} />
                                </div>
                            </div>
                        </div>

                        {/* save button */}
                        <div className='flex justify-center items-center'>
                            <button type='submit' className="w-[23%] h-9 mb-2 bg-black rounded-lg mt-[1rem] flex justify-center items-center  ">
                                <p className="text-white text-[0.875rem] font-medium font-Poppins" >Submit</p>
                            </button>
                        </div>
                    </form>
                </div>
            </Modal>
        </div>
    );
};

export default IntProcesModal;
