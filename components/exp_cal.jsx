import { useEffect, useState } from 'react';

const TimeDifference = () => {
    const [timeDifference, setTimeDifference] = useState('');
    const [yearDifference, setyearDifference] = useState('');

    useEffect(() => {
        const calculateTimeDifference = () => {
            const specificDate = new Date('2021-08-08T10:00:00');
            const currentDate = new Date();
            const timeDiffInMilliseconds = specificDate - currentDate;

            const isPastDate = timeDiffInMilliseconds < 0;
            const timeDiff = Math.abs(timeDiffInMilliseconds);

            const years = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365));
            let days = Math.floor((timeDiff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

            const weeks = Math.floor(days / 7);
            days %= 7;

            setTimeDifference(
                ` ${weeks} weeks, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`
            );
            setyearDifference(
                `${years}`
            )
        };

        calculateTimeDifference();

        const intervalId = setInterval(() => {
            calculateTimeDifference();
        }, 1000);

        // Clear the interval on component unmount to avoid memory leaks
        return () => clearInterval(intervalId);
    }, ['2021-08-08T10:00:00']);

    return (
        <div className=' group absolute bottom-0 p-4 text-primaryColor '>
            <div className='flex'>

                <h1 className=' md:text-9xl text-7xl font-extrabold flex items-end'>{yearDifference}</h1>
                <div className='mt-5'>
                    <h1 className='md:text-5xl text-2xl '> Year</h1><h1 className='md:text-5xl text-2xl '> Experience</h1>
                    {/* <h3 className='md:text-4xl text-2xl font-extrabold !leading-[0] mb-6'>  Experience</h3> */}
                </div>
            </div>
            <h2 className='text-xs  hidden group-hover:block'>{timeDifference}</h2>
        </div>
    );
};

export default TimeDifference;
