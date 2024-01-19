import React, { useState, useEffect } from "react";
import JobModal1 from "./Modals/JobModal1";
import AddJob from "./Modals/AddJob";
import JobDesModal from "./Modals/JobDesModal";
import IntProcesModal from "./Modals/IntProcesModal";
import LeftNavbar from "../utils/LeftNavbar";
import search from "../assets/search 1.png";
import bell from "../assets/bell.png";
import dot from "../assets/redDot.png";
import dp from "../assets/Rectangle 40860.png";
import menu from "../assets/menu.png";
import price from "../assets/price.png";
import location from "../assets/location.png";
import experience from "../assets/experience.png";
import logo from "../assets/image 43.png";
import { Switch } from "@mui/material";
import axios from "axios";
import { RecoilRoot } from "recoil";
import { useForm } from "react-hook-form";

const Landing = () => {
    const [isFirstModalOpen, setFirstModalOpen] = useState(false);
    const [isSecondModalOpen, setSecondModalOpen] = useState(false);
    const [isThirdModalOpen, setThirdModalOpen] = useState(false);
    const [isFourthModalOpen, setFourthModalOpen] = useState(false);
    const [jobsDetails, setJobsDetails] = useState([]);
    const [isSubmitted, SetSubmitted] = useState(false)

    const [data, setData] = useState({});

    const openModal = () => {
        setFirstModalOpen(true);
    };

    const closeModal = () => {
        setFirstModalOpen(false);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:5000/user/jobDetails"
                );
                setJobsDetails(response.data || []);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);


    useEffect(() => {
        console.log(data);
    }, [data])

    const submit = async (data) => {
        try {
            const response = await axios.post(
                "http://localhost:5000/admin/createJob",
                data,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    useEffect(() => {
        if (isSubmitted) {
            submit(data);
            SetSubmitted(false)
        }
    })

    const fields = [
        { image: location, value: "form1.Location" },
        { image: experience, value: "experience" },
    ];

    const renderFields = (job) => {
        return fields.map((field, index) => (
            <div key={index} className="flex gap-x-2 items-center">
                <img src={field.image} className="w-4 h-4 md:w-6 md:h-6 relative" alt="" />
                <div className="text-neutral-500 text-xs mg:text-sm font-medium font-['Poppins'] cursor-default">
                    {Array.isArray(field.value)
                        ? field.formatter(field.value.map((prop) => job[prop]))
                        : getNestedValue(job, field.value) || "2 years experience"}
                </div>
            </div>
        ));
    };

    // Helper function to access nested properties
    const getNestedValue = (object, path) => {
        const pathArray = path.split('.');
        return pathArray.reduce((acc, key) => (acc && acc[key] !== 'undefined' ? acc[key] : undefined), object);
    };


    return (
        <RecoilRoot>
            <>
                <div className="flex bg-slate-100 h-full w-full relative">
                    <div className="">
                        <LeftNavbar className="flex-nowrap" />
                    </div>
                    {/* body */}
                    <div className="h-screen w-full bg-slate-100 relative ">
                        {/* top bar 1 (visible only on lg, xl, and 2xl) */}
                        <div className=" w-[97%]  h-14 bg-white rounded-xl relative flex justify-between items-center ml-1 md:ml-3 lg:ml-5 mt-4 sm:pl-2 sm:pr-2  ">
                            <div className="flex items-center pl-3 w-3/4 md:w-1/2">
                                <div className="w-28 h-12 bg-slate-50 rounded-lg pl-2">
                                    <div className="text-neutral-400 text-[0.5rem] mt-2 font-medium font-['Poppins']">
                                        Your Organization
                                    </div>
                                    <div className="text-black text-xs mt-1 font-semibold font-['Poppins']">
                                        Skill genic
                                    </div>
                                </div>
                                <div className=" hidden sm:flex md:flex lg:flex w-[55%] xl:w-[32%] 2xl:w-[36%] 2xl:flex h-9 bg-slate-50 rounded-xl xl:flex items-center ml-4 pl-2 gap-4">
                                    <img src={search} className="w-6 h-6 relative"></img>
                                    <div className="text-gray-400 text-sm font-normal font-['Poppins']">
                                        Search
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-3 pr-3 md:w-1/2  justify-end">
                                <div className="w-11 h-11 bg-orange-50 rounded-lg relative flex flex-shrink-0 justify-center items-center ">
                                    <img
                                        src={dot}
                                        className="absolute top-[0.7rem] right-[1.5px]"
                                    ></img>
                                    <img src={bell} className="w-6 h-6 relative "></img>
                                </div>
                                <img src={dp} className="w-11 h-11 rounded-xl"></img>
                            </div>
                        </div>

                        {/* search  */}

                        <div className="flex sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden h-9 mt-4 bg-white w-[93%] border-2 border-stone-100 rounded-xl  items-center ml-2 pl-2 gap-4">
                            <div className="flex gap-x-3 justify-center items-center">
                                <img src={search} className="w-6 h-6 relative"></img>
                                <div className="text-gray-400 text-sm font-normal font-['Poppins']">
                                    Search
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row w-[97%] justify-center items-center sm:justify-between lg:ml-4">
                            <div className="text-black text-xl md:text-2xl font-medium font-Poppins ml-4 mt-4 ">
                                Active Jobs
                            </div>
                            <div className="flex gap-2 sm:justify-between sm:gap-4 mt-2 relative ">
                                <div className=" w-20 h-9 sm:w-32 sm:h-12  bg-white rounded-lg border border-black flex items-center justify-center sm:gap-1 ">
                                    <div className="text-black pl-2 sm:text-base text-xs sm:pl-4 font-medium font-['Poppins']">
                                        Active
                                    </div>
                                    <div className="flex sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden">
                                        <Switch size="small" />
                                    </div>
                                    <div className="hidden sm:flex md:flex lg:flex xl:flex 2xl:flex">
                                        <Switch />
                                    </div>
                                </div>
                                <div className=" w-20 h-9  pl-2  pt-1 sm:w-36 sm:h-12 sm:pt-0 sm:pl-3 bg-black rounded-lg flex items-center justify-center cursor-pointer ">
                                    <div
                                        className="w-24 h-5 text-white sm:text-base text-xs font-medium font-['Poppins'] "
                                        onClick={openModal}
                                    >
                                        Create Job{" "}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* populate cards */}
                        <div className="flex flex-wrap justify-center mt-5 gap-2 gap-y-7 md:justify-evenly">
                            {jobsDetails.map((job) => (
                                <div
                                    key={job._id}
                                    className=" shadow-md w-[90%] mg:w-[78%] sm:w-[45%] md:w-[45%] lg:w-[33%] xl:w-[23%]   rounded-lg bg-white relative"
                                >
                                    <img
                                        src={menu}
                                        className="h-4 mg:h-6 absolute right-5 top-4"
                                    ></img>
                                    <div className=" flex flex-col pl-4 mt-3 mg:mt-5  gap-y-4">
                                        <div className=" w-8 h-7  mg:w-12 mg:h-12 bg-slate-50 rounded-full flex items-center justify-center ">
                                            <img
                                                src={logo}
                                                className="w-5 h-5 mg:w-7 mg:h-7 relative"
                                            ></img>
                                        </div>
                                        <div className="text-black text-sm sm:text-[1rem] md:text-xl font-medium  font-['Poppins'] cursor-default">
                                            {job.form1.position_name}
                                        </div>
                                        <div className="flex gap-x-2 items-center">
                                        <img src={price} className="w-4 h-4 md:w-6 md:h-6 relative" alt="" />
                                            <div className="text-neutral-500 text-xs mg:text-sm font-medium font-['Poppins'] cursor-default">
                                                {job.form1.minimumSalary} -  {job.form1.maximumSalary}
                                            </div>
                                        </div>
                                        {/* Render dynamically fetched fields */}
                                        {renderFields(job)}
                                    </div>
                                    <div className="flex items-center w-full gap-2 pl-2 pr-2 mt-3 mb-2 mg:mb-0 md:mb-2">
                                        <div className="w-[32%] h-7 bg-indigo-600 rounded-3xl flex items-center justify-center">
                                            <div className="text-white  text-[0.5rem] mg:text-[0.6rem] sm:text-[0.5rem] md:text-[0.7rem] font-normal font-['Poppins'] cursor-default">
                                                14 Application
                                            </div>
                                        </div>
                                        <div className="w-[32%] h-7 bg-amber-500 rounded-3xl flex items-center justify-center">
                                            <div className="text-white text-[0.5rem] mg:text-[0.6rem] sm:text-[0.5rem] md:text-[0.7rem] font-normal font-['Poppins'] cursor-default">
                                                12 in progress
                                            </div>
                                        </div>
                                        <div className="w-[32%] h-7 bg-green-500 rounded-3xl flex items-center justify-center">
                                            <div className="text-white text-[0.5rem] mg:text-[0.6rem] sm:text-[0.5rem] md:text-[0.7rem] font-normal font-['Poppins'] cursor-default">
                                                14 Selected
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {isFirstModalOpen && (
                    <JobModal1
                        closeModal={closeModal}
                        setSecondModalOpen={setSecondModalOpen}
                        setFirstModalOpen={setFirstModalOpen}
                        open={isFirstModalOpen}
                        setData={setData}
                    />
                )}
                {isSecondModalOpen && (
                    <AddJob
                        open={isSecondModalOpen}
                        setThirdModalOpen={setThirdModalOpen}
                        setSecondModalOpen={setSecondModalOpen}
                        Close={() => setSecondModalOpen(false)}
                        datas={data}
                        setData={setData}
                    />
                )}
                {isThirdModalOpen && (
                    <JobDesModal
                        open={isThirdModalOpen}
                        setThirdModalOpen={setThirdModalOpen}
                        setFourthModalOpen={setFourthModalOpen}
                        Close={() => setThirdModalOpen(false)}
                        datas={data}
                        setData={setData}
                    />
                )}
                {isFourthModalOpen && (
                    <IntProcesModal
                        open={isFourthModalOpen}
                        Close={() => setFourthModalOpen(false)}
                        setFourthModalOpen={setFourthModalOpen}
                        datas={data}
                        setData={setData}
                        SetSubmitted={SetSubmitted}
                    />
                )}
            </>
        </RecoilRoot>
    );
};

export default Landing;
