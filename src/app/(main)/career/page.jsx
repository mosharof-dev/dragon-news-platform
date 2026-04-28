import React from 'react';
import Image from 'next/image';
import { FaBriefcase, FaGraduationCap, FaHeartbeat, FaLaptopHouse, FaChevronRight, FaRegPaperPlane } from 'react-icons/fa';

export const metadata = {
    title: "Career | Dragon News",
    description: "Join the Dragon News team and help us shape the future of journalism. View open positions and apply today."
};

const CareerPage = () => {
    return (
        <div className="min-h-screen bg-base-100 text-base-content pb-10 scroll-smooth">
            {/* Hero Section */}
            <section className="relative bg-secondary text-secondary-content py-24 px-4 sm:px-6 lg:px-8 overflow-hidden rounded-b-[3rem] sm:rounded-b-[5rem] shadow-xl">
                {/* background patterns */}
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/10 to-transparent"></div>
                <div className="relative max-w-7xl mx-auto text-center z-10 flex flex-col items-center">
                    <div className="inline-block p-4 bg-white/20 backdrop-blur-sm rounded-full mb-6 border border-white/20 shadow-inner">
                        <FaBriefcase className="text-4xl drop-shadow-md" />
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
                        Build Your Career With <br className="hidden md:block" /> <span className="text-primary drop-shadow-md">Dragon News</span>
                    </h1>
                    <p className="mt-4 max-w-3xl mx-auto text-xl md:text-2xl opacity-90 leading-relaxed font-light">
                        We`re looking for passionate storytellers, innovative engineers, and creative minds to join our mission of delivering truth to the world.
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
                        <a href="#open-positions" className="btn btn-primary btn-lg rounded-full px-8 shadow-lg hover:scale-105 transition-transform border-none">View Open Positions</a>
                        <a href="#culture" className="btn btn-outline btn-lg rounded-full px-8 bg-base-100/10 text-secondary-content border-secondary-content/30 hover:bg-base-100/20 hover:border-secondary-content/50 hover:scale-105 transition-all">Our Culture</a>
                    </div>
                </div>
            </section>

            {/* Perks & Benefits */}
            <section id="culture" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-8">
                <div className="text-center mb-16">
                    <span className="text-secondary font-semibold tracking-wider uppercase text-sm mb-2 block">Perks & Benefits</span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Work With Us?</h2>
                    <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
                        We invest in our people. From comprehensive health coverage to continuous learning, we provide what you need to do your best work.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Health */}
                    <div className="bg-base-200 p-8 rounded-3xl hover:bg-primary/5 transition-colors duration-300 border border-transparent hover:border-primary/20 group shadow-sm hover:shadow-lg">
                        <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-content transition-all duration-300">
                            <FaHeartbeat className="text-2xl" />
                        </div>
                        <h3 className="text-2xl font-bold mb-3">Comprehensive Health</h3>
                        <p className="text-base-content/70 leading-relaxed">Top-tier medical, dental, and vision coverage for you and your dependents, plus mental wellness stipends.</p>
                    </div>
                    {/* Remote Work */}
                    <div className="bg-base-200 p-8 rounded-3xl hover:bg-secondary/5 transition-colors duration-300 border border-transparent hover:border-secondary/20 group shadow-sm hover:shadow-lg">
                        <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6 text-secondary group-hover:scale-110 group-hover:bg-secondary group-hover:text-secondary-content transition-all duration-300">
                            <FaLaptopHouse className="text-2xl" />
                        </div>
                        <h3 className="text-2xl font-bold mb-3">Flexible & Remote</h3>
                        <p className="text-base-content/70 leading-relaxed">Work from anywhere or join us in one of our global hubs. We value output over hours logged at a desk.</p>
                    </div>
                    {/* Learning */}
                    <div className="bg-base-200 p-8 rounded-3xl hover:bg-accent/5 transition-colors duration-300 border border-transparent hover:border-accent/20 group shadow-sm hover:shadow-lg">
                        <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 text-accent group-hover:scale-110 group-hover:bg-accent group-hover:text-accent-content transition-all duration-300">
                            <FaGraduationCap className="text-2xl" />
                        </div>
                        <h3 className="text-2xl font-bold mb-3">Continuous Growth</h3>
                        <p className="text-base-content/70 leading-relaxed">Annual learning stipends, conference allowances, and internal mentorship programs to accelerate your career.</p>
                    </div>
                </div>
            </section>

            {/* Image Break Section */}
            <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-10">
                <div className="relative w-full h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-2xl group">
                    <Image
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1470&auto=format&fit=crop"
                        alt="Team Collaboration"
                        fill
                        sizes="(max-width: 1280px) 100vw, 1280px"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-8 left-8 right-8 text-white">
                        <h3 className="text-3xl font-bold mb-2 drop-shadow-lg">Collaborative Culture</h3>
                        <p className="text-lg opacity-90 max-w-2xl font-light">Join a diverse team of thinkers, creators, and doers working together to redefine modern journalism.</p>
                    </div>
                </div>
            </section>

            {/* Open Positions */}
            <section id="open-positions" className="py-20 bg-base-200/50 px-4 sm:px-6 lg:px-8 mt-10 rounded-[3rem] mx-4 sm:mx-8 lg:mx-auto max-w-[90rem]">
                <div className="max-w-5xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div>
                            <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">Join The Team</span>
                            <h2 className="text-4xl md:text-5xl font-bold">Open Positions</h2>
                        </div>
                    </div>

                    <div className="space-y-6">
                        {/* Job 1 */}
                        <div className="bg-base-100 p-6 sm:p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-base-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 group hover:-translate-y-1">
                            <div>
                                <div className="flex flex-wrap gap-3 mb-3">
                                    <span className="badge badge-primary badge-outline font-medium">Editorial</span>
                                    <span className="badge badge-neutral font-medium">Remote</span>
                                </div>
                                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">Senior Investigative Journalist</h3>
                                <p className="text-base-content/60 mt-2 font-medium">Full-time &middot; London / Remote</p>
                            </div>
                            <button className="btn btn-outline btn-primary rounded-full group-hover:btn-primary shrink-0 transition-all w-full sm:w-auto">
                                Apply Now <FaChevronRight className="ml-1" />
                            </button>
                        </div>

                        {/* Job 2 */}
                        <div className="bg-base-100 p-6 sm:p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-base-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 group hover:-translate-y-1">
                            <div>
                                <div className="flex flex-wrap gap-3 mb-3">
                                    <span className="badge badge-secondary badge-outline font-medium">Engineering</span>
                                    <span className="badge badge-neutral font-medium">On-site</span>
                                </div>
                                <h3 className="text-2xl font-bold group-hover:text-secondary transition-colors">Frontend Developer (Next.js)</h3>
                                <p className="text-base-content/60 mt-2 font-medium">Full-time &middot; New York</p>
                            </div>
                            <button className="btn btn-outline btn-secondary rounded-full group-hover:btn-secondary shrink-0 transition-all w-full sm:w-auto">
                                Apply Now <FaChevronRight className="ml-1" />
                            </button>
                        </div>

                        {/* Job 3 */}
                        <div className="bg-base-100 p-6 sm:p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-base-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 group hover:-translate-y-1">
                            <div>
                                <div className="flex flex-wrap gap-3 mb-3">
                                    <span className="badge badge-accent badge-outline font-medium">Marketing</span>
                                    <span className="badge badge-neutral font-medium">Hybrid</span>
                                </div>
                                <h3 className="text-2xl font-bold group-hover:text-accent transition-colors">Digital Marketing Strategist</h3>
                                <p className="text-base-content/60 mt-2 font-medium">Full-time &middot; San Francisco / Hybrid</p>
                            </div>
                            <button className="btn btn-outline btn-accent rounded-full group-hover:btn-accent shrink-0 transition-all w-full sm:w-auto">
                                Apply Now <FaChevronRight className="ml-1" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* General Application CTA */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto my-10">
                <div className="bg-neutral rounded-[3rem] p-10 md:p-16 text-center text-neutral-content relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                    <div className="relative z-10 flex flex-col items-center">
                        <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-6 border border-white/20">
                            <FaRegPaperPlane className="text-3xl text-primary drop-shadow-md" />
                        </div>
                        <h2 className="text-3xl md:text-5xl font-extrabold mb-4 drop-shadow-sm">Don`t see a perfect fit?</h2>
                        <p className="text-xl opacity-80 max-w-2xl mx-auto mb-8 font-light">
                            We`re always on the lookout for incredible talent. Send us your resume and we`ll keep you in mind for future opportunities.
                        </p>
                        <button className="btn btn-primary btn-lg rounded-full px-10 shadow-lg border-none hover:scale-105 transition-transform">
                            Submit General Application
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CareerPage;