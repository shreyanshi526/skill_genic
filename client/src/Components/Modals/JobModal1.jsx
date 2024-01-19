// JobModal1.jsx
import React, { useState } from 'react';
import cancel from '../../assets/cancel.png';
import form from '../../assets/form.png';
import { Modal } from '@mui/material';

const JobModal1 = ({ open, closeModal, setSecondModalOpen, setFirstModalOpen, setData }) => {

    const[isModalOpen,setModalOpen] = useState(false);
 
    const handleClose = () => {
       closeModal();
    }

    const handleNextModalClick = () => {
        setSecondModalOpen(true);
        setFirstModalOpen(false)
        // closeModal();
    }
     

    return (
        <>
            <Modal open={open} className='flex items-center justify-center'>
                <div className="w-[24rem] h-[14rem] sm:w-[26rem] md:w-[32rem] xl:w-[38rem] bg-white rounded-[1.875rem] shadow-md relative">
                    <div className="text-black text-xl font-Poppins mt-[1rem] flex justify-center">Create a Job</div>
                    <img src={cancel} className="w-5 h-5 absolute right-3 top-4 cursor-pointer" onClick={handleClose} alt="cancel" />
                    <div className="w-[21rem] h-[10rem] sm:w-[24rem] md:w-[30rem] xl:w-[36rem] bg-slate-50 rounded-3xl mt-2  flex justify-center items-center ml-6 sm:ml-4">
                        <div id='inner-div' onClick={handleNextModalClick} className="w-28 h-[7.5rem] bg-white rounded-xl border border-indigo-600 flex flex-col items-center justify-center cursor-pointer">
                            <img src={form} className="w-8 h-8 relative mb-[1.06rem]" alt="form" />
                            <p className="text-indigo-600 text-xs font-Poppins">Post Job With AI</p>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
}

export default JobModal1;