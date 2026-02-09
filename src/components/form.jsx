import React, { useState } from 'react';

const Form = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        companyName: '',
        workEmail: '',
        phoneNumber: '',
        role: '',
        industry: '',
        projectRequirement: ''
    });

    const roles = [
        'Creative Director',
        'Head of Production',
        'Marketing Leader',
        'Studio Owner',
        'CEO / Founder',
        'Brand Manager',
        'Other'
    ];

    const industries = [
        'Textile & Garments',
        'Jewellery & Diamonds',
        'Lifestyle & Fashion Brands',
        'Real Estate & Construction',
        'Hospitality & Travel',
        'E-Commerce & Retail',
        'Media & Entertainment',
        'Healthcare & Wellness',
        'Other'
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add your form submission logic here
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative w-[95%] max-w-[700px] max-h-[90vh] overflow-y-auto bg-[#0A0A0A] border border-[rgba(255,255,255,0.1)] rounded-2xl p-6 md:p-8 shadow-[0_0_60px_rgba(139,92,246,0.2)]">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors text-2xl"
                >
                    ✕
                </button>

                {/* Title */}
                <h2 className="text-xl md:text-2xl font-bold text-white mb-6 pr-8">
                    Get Your Personalized Demo
                </h2>

                {/* Form */}
                <form onSubmit={handleSubmit}>
                    {/* Row 1: Full Name & Company Name */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="block text-gray-300 font-bold text-sm mb-2">
                                Full Name <span className="text-white-400">*</span>
                            </label>
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                placeholder="Enter your full name"
                                required
                                className="w-full bg-transparent border border-[rgba(255,255,255,0.15)] rounded-lg px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#8B5CF6] transition-colors"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-300 font-bold text-sm mb-2">
                                Company Name <span className="text-white-400">*</span>
                            </label>
                            <input
                                type="text"
                                name="companyName"
                                value={formData.companyName}
                                onChange={handleChange}
                                placeholder="Enter Your Company Name"
                                required
                                className="w-full bg-transparent border border-[rgba(255,255,255,0.15)] rounded-lg px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#8B5CF6] transition-colors"
                            />
                        </div>
                    </div>

                    {/* Row 2: Work Email & Phone Number */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="block text-gray-300 font-bold text-sm mb-2">
                                Work Email <span className="text-white-400">*</span>
                            </label>
                            <input
                                type="email"
                                name="workEmail"
                                value={formData.workEmail}
                                onChange={handleChange}
                                placeholder="you@company.com"
                                required
                                className="w-full bg-transparent border border-[rgba(255,255,255,0.15)] rounded-lg px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#8B5CF6] transition-colors"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-300 font-bold text-sm mb-2">
                                Phone Number <span className="text-white-400">*</span>
                            </label>
                            <input
                                type="tel"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                placeholder="+91 (555) 000-0000"
                                required
                                className="w-full bg-transparent border border-[rgba(255,255,255,0.15)] rounded-lg px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#8B5CF6] transition-colors"
                            />
                        </div>
                    </div>

                    {/* Row 3: Role & Industry */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="block text-gray-300 font-bold text-sm mb-2">
                                Role <span className="text-white-400">*</span>
                            </label>
                            <select
                                name="role"
                                value={formData.role}
                                onChange={handleChange}
                                required
                                className="w-full bg-[#0A0A0A] border border-[rgba(255,255,255,0.15)] rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#8B5CF6] transition-colors appearance-none cursor-pointer"
                                style={{
                                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239CA3AF'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'right 12px center',
                                    backgroundSize: '20px'
                                }}
                            >
                                <option value="" disabled className="bg-[#0A0A0A]">Your Role</option>
                                {roles.map((role, index) => (
                                    <option key={index} value={role} className="bg-[#0A0A0A]">{role}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="block text-gray-300 font-bold text-sm mb-2">
                                Industry / Business Type <span className="text-white-400">*</span>
                            </label>
                            <select
                                name="industry"
                                value={formData.industry}
                                onChange={handleChange}
                                required
                                className="w-full bg-[#0A0A0A] border border-[rgba(255,255,255,0.15)] rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#8B5CF6] transition-colors appearance-none cursor-pointer"
                                style={{
                                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239CA3AF'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'right 12px center',
                                    backgroundSize: '20px'
                                }}
                            >
                                <option value="" disabled className="bg-[#0A0A0A]">Select your industry</option>
                                {industries.map((industry, index) => (
                                    <option key={index} value={industry} className="bg-[#0A0A0A]">{industry}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Row 4: Project Requirement */}
                    <div className="mb-6">
                        <label className="block text-gray-300 font-bold text-sm mb-2">
                            Project Requirement
                        </label>
                        <textarea
                            name="projectRequirement"
                            value={formData.projectRequirement}
                            onChange={handleChange}
                            placeholder='Example: "We need product videos for 50 SKUs in 5 languages"'
                            rows={4}
                            className="w-full bg-transparent border border-[rgba(255,255,255,0.15)] rounded-lg px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#8B5CF6] transition-colors resize-none"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="bg-[#8B5CF6] text-white font-semibold py-3 px-8 rounded-full flex items-center gap-2 hover:bg-[#7C4FE0] transition-colors shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:shadow-[0_0_30px_rgba(139,92,246,0.6)]"
                        >
                            <span>✦</span>
                            Submit Your Request
                            <span>✦</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Form;
