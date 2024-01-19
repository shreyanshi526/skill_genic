import React, { useState } from 'react'
import settingtop from '../assets/settingtop.png'
import dashboard from '../assets/dashboard.png'
import chat from '../assets/chat.png'
import activity from '../assets/activity.png'
import job from '../assets/job.png'
import interview from '../assets/interview.png'
import discount from '../assets/discount.png'
import company from '../assets/company.png'
import community from '../assets/community.png'
import team from '../assets/team.png'
import tool from '../assets/tool.png'
import report from '../assets/reports.png'
import setting from '../assets/settings.png'
import rightArrow from '../assets/chevron-right 2.png'
import expandIcon from '../assets/expand_icon.png'

const LeftNavbar = () => {
    const [collapsed, setCollapsed] = useState(false);

    const handleToggleCollapse = () => {
        setCollapsed(!collapsed);
    };
    const handleToggleOpen = () => {
        setCollapsed(false);
    };

    const navItems = [
        { image: chat, text: 'chat' },
        { image: activity, text: 'activity' },
        { heading: 'RECRUITMENT' },
        { image: job, text: 'job' },
        { image: interview, text: 'interview' },
        { image: discount, text: 'discount' },
        { heading: 'ORGANISATION' },
        { image: company, text: 'company' },
        { image: community, text: 'community' },
        { image: team, text: 'team' },
        { image: tool, text: 'tool' },
        { image: report, text: 'report' },
        { image: setting, text: 'setting' },

    ];

    return (
        <>
            {/* Navbar left */}
            <div className={`w-[11.5rem] sm:w-[11.5rem] md:w-[12rem] lg:w-[14.1rem] xl:w-[15rem] h-full bg-zinc-800 shadow flex flex-col ${(collapsed === false) ? 'block' : 'hidden'}`}>

                {/* logo */}
                <span className='flex mt-[2rem] gap-[0.55rem]'>
                    <img src={settingtop} className="w-9 h-9  ml-3  md:ml-[1rem] lg:ml-[1.35rem] xl:ml-[1.75rem] relative  inline-flex"></img>
                    <p className="text-white mt-1 text-xl font-semibold font-['Poppins'] tracking-tight">Logo</p>
                </span>

                {/* home */}
                <div className='flex items-center  mt-[3rem] gap-4 w-44 -ml-1 md:ml-1 lg:ml-6 pl-3  lg:w-48 h-11 hover:bg-yellow-300 hover:rounded-lg hover:text-black'>
                    <img src={dashboard} className='w-5 h-5   relative'></img>
                    <div className="text-stone-300 text-sm font-medium font-Poppins hover:text-black">Home</div>
                </div>

                {/* Map over the array to render images and text dynamically */}
                {navItems.map((item, index) => (
                    <span key={index} >
                        {item.heading ? (
                            <p className="text-gray-500 text-base font-medium font-Poppins mt-9 mb-5 ml-[2.44rem]">{item.heading}</p>
                        ) : (
                            <>
                                <div className='flex mt-[1rem] relative w-44 md:ml-1 lg:ml-7  lg:w-48 h-11 pt-3 hover:bg-yellow-300 hover:rounded-lg hover:text-black'>
                                    <div className='flex gap-4 ml-2'>
                                        <img src={item.image} className="w-5 h-5   relative cursor-pointer text-black" alt={item.text}></img>
                                        <p className="text-stone-300  text-sm font-medium font-Poppins cursor-pointer hover:text-black">{item.text}</p>
                                    </div>
                                    <img src={rightArrow} className='w-4 h-4 absolute right-1 cursor-pointer'></img>
                                </div>
                            </>
                        )}
                    </span>
                ))}

                <div className='flex w-44 md:ml-1 lg:ml-7  lg:w-48 mt-[13rem] mb-4 h-11 pl-3 items-center  hover:bg-yellow-300 hover:rounded-lg hover:text-black'>
                    <button onClick={handleToggleCollapse} className='flex flex-row'>
                        <div className="text-stone-300 text-xs sm:text-[1rem] hover:text-black font-Poppins leading-relaxed tracking-[0.0175rem]">Collapse</div>
                    </button>
                </div>
            </div>
            {/* collapse true */}
            <div className={`w-[4rem] h-full bg-zinc-800 shadow flex flex-col  ${(collapsed === true) ? 'block' : 'hidden'}`}>
                <div  className='flex flex-col gap-y-6 items-center mt-6 '>
                    <img src={dashboard} className='w-5 h-5 relative'></img>
                    {navItems.map((item, index) => (
                        <div key={index} className='flex flex-col' >
                            <img src={item.image} className="w-5 h-5  relative cursor-pointer text-black" alt={item.text} onClick={handleToggleOpen}></img>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default LeftNavbar