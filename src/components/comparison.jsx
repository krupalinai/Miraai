import React from 'react';
import { motion } from 'framer-motion';
import rightIcon from '../assets/images/right.svg';

const DoBest = () => {
    const comparisonData = [
        {
            area: "Content Creation",
            diy: "Limited tools and skills",
            miraai: "Advanced AI + Professional Experts"
        },
        {
            area: "Design Quality",
            diy: "Basic and inconsistent",
            miraai: "Premium, brand-focused designs"
        },
        {
            area: "Production Speed",
            diy: "Slow and manual",
            miraai: "Fast and AI-powered delivery"
        },
        {
            area: "Cost Efficiency",
            diy: "Trial and error approach",
            miraai: "Optimized and affordable pricing"
        },
        {
            area: "Creative Strategy",
            diy: "Basic editing software",
            miraai: "Data-driven planning"
        },
        {
            area: "Editing & Effects",
            diy: "Basic editing software",
            miraai: "Professional-grade editing tools"
        },
        {
            area: "Scalability",
            diy: "Hard to scale campaigns",
            miraai: "Easily scalable production"
        },
        {
            area: "Final Output",
            diy: "Average results",
            miraai: "High-impact, conversion-focused output"
        }
    ];

    return (
        <section className="bg-[#000004] py-12 md:py-20 px-4 md:px-8">
            <style>{styles}</style>
            <div className="max-w-[1200px] mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-10 md:mb-16 tracking-tight px-4 leading-tight">
                    Do It Yourself Vs Miraai Expert Team
                </h2>

                {/* Desktop Table View - Hidden on Mobile */}
                <div className="hidden md:block overflow-x-auto rounded-3xl border border-[#262626] bg-[#000004]">
                    <table className="w-full text-left border-collapse comparison-table">
                        <thead>
                            <tr>
                                <th className="p-6 text-white font-bold bg-[#8B5CF680] w-[25%] rounded-tl-3xl text-center border-r border-[#262626]">Area</th>
                                <th className="p-6 text-white font-bold text-center w-[37.5%] border-b border-r border-[#262626]">Do It Yourself</th>
                                <th className="p-6 text-white font-bold text-center w-[37.5%] border-b border-[#262626] rounded-tr-3xl">Miraai Expert Team</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comparisonData.map((row, index) => (
                                <tr
                                    key={index}
                                    className="group border-b border-[#262626] last:border-0 hover:bg-white/[0.08] transition-all duration-300 cursor-default"
                                >
                                    <td className="p-6 text-gray-300 font-medium bg-[#8B5CF660] group-hover:bg-[#8B5CF6] border-r border-[#262626] text-sm md:text-base transition-all duration-300">
                                        {row.area}
                                    </td>
                                    <td className="p-6 text-gray-400 text-sm md:text-base border-r border-[#262626] group-hover:text-white transition-colors duration-300">
                                        <div className="flex items-center gap-3">
                                            <span className="text-red-500 font-bold">✕</span>
                                            {row.diy}
                                        </div>
                                    </td>
                                    <td className="p-6 text-gray-200 text-sm md:text-base group-hover:text-white transition-colors duration-300">
                                        <div className="flex items-center gap-3">
                                            <img src={rightIcon} alt="Check" className="w-5 h-5 flex-shrink-0 filter drop-shadow-[0_0_3px_rgba(59,130,246,0.5)]" />
                                            {row.miraai}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Mobile Card View - Hidden on Desktop */}
                <div className="md:hidden flex flex-col gap-6">
                    {comparisonData.map((row, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-[#0A0A0B] border border-[#262626] rounded-2xl p-6 flex flex-col gap-5 shadow-2xl relative overflow-hidden group"
                        >
                            {/* Subtle background glow */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#8B5CF640] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                            <h3 className="text-white font-bold text-xl text-center pb-3 border-b border-white/10">
                                {row.area}
                            </h3>

                            <div className="flex flex-col gap-4">
                                {/* DIY Side */}
                                <div className="flex items-start gap-4">
                                    <span className="text-red-500 font-bold text-lg leading-none mt-1">✕</span>
                                    <div className="flex flex-col">
                                        <p className="text-gray-300 text-[15px] leading-relaxed">
                                            {row.diy}
                                        </p>
                                    </div>
                                </div>

                                {/* Miraai Side */}
                                <div className="flex items-start gap-4">
                                    <img src={rightIcon} alt="Check" className="w-6 h-6 flex-shrink-0 mt-0.5 filter drop-shadow-[0_0_5px_rgba(59,130,246,0.4)]" />
                                    <div className="flex flex-col">
                                        <p className="text-white text-[15px] font-medium leading-relaxed">
                                            {row.miraai}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const styles = `
.comparison-table tr:hover td {
    background-color: rgba(255, 255, 255, 0.08) !important;
}
.comparison-table tr:hover td:first-child {
    background-color: #8B5CF6 !important;
}
`;

export default DoBest;
