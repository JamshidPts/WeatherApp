import React from 'react';

function About() {
    return (
        <div className='desktop:h-[screen] landscape-phone:mt-20 laptop:mt-0 laptop:h-[90vh] tablet:h-[90vh] phone:h-[90vh] grid place-items-center'>
            <div className='min-h-[60vh] dark:bg-[#2a2a2a] bg-[#F2F3F4] shadow-md rounded-lg text-center p-[20px] m-auto'>
                <h1 className='text-[30px] font-bold text-[#2a2a2a] tracking-wide dark:text-[#E0E0E0] pt-[20px]'>
                    About Us
                </h1>
                <p className='text-[18px] text-[#2a2a2a] dark:text-[#E0E0E0] mt-[20px]'>
                    Welcome to WeatherApp! Our mission is to provide you with accurate, real-time weather information wherever you are. 
                </p>
                <p className='text-[18px] text-[#2a2a2a] dark:text-[#E0E0E0] mt-[20px]'>
                    Whether you're planning your day, traveling, or just curious about the weather, we've got you covered. 
                    Our app offers local weather updates, detailed humidity levels, and wind speed data. 
                </p>
                <p className='text-[18px] text-[#2a2a2a] dark:text-[#E0E0E0] mt-[20px]'>
                    With a clean, intuitive design and support for light and dark themes, we aim to make checking the weather an effortless and enjoyable experience.
                </p>
                <p className='text-[18px] text-[#2a2a2a] dark:text-[#E0E0E0] mt-[20px]'>
                    Thank you for using WeatherApp. If you have any feedback or suggestions, feel free to contact us!
                </p>
            </div>
        </div>
    );
}

export default About;
