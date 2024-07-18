"use client";

import CountUp from "react-countup";

const stats = [
    {
        num: 1,
        text: "Years of Experience",
    },
    {
        num: 10,
        text: "Projects Completed",
    },
    {
        num: 21,
        text: "Certifications Earned",
    },
    // { num: 1, text: "Awards Won", },
];

const Stats = () => {
    return (
        <section>
            <div className="container mx-auto">
                <div className="flex flex-wrap gap-6 max-w-[80vw] mx-w-[80vw] mx-auto xl:max-w-none">
                    {stats.map((item, index) => (
                        <div key={index}>
                            <CountUp 
                                end={item.num} 
                                duration={5} 
                                delay={2} 
                                className="text-4xl xl:text-6xl font-extrabold"
                            />
                            <p className="text-xl xl:text-2xl">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
