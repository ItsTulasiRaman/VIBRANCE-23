import React from 'react'
import '../../components/Gallery/styles/style.css'
import arrow from '../../assets/Nav Arrow.webp'


function index() {
    return (
        <>
            <div className='slider-container flex items-center justify-center'>
                <div className='slider flex items-center justify-center flex-col'>
                    <div className='slider-row flex items-center justify-center'>
                    </div>
                    {/* <button className='viewmore flex items-center justify-center gap-4'>Click Here <img src={arrow} alt='arrow'/></button> */}
                </div>
            </div>
        </>
    )
}

export default index