import React from 'react';
import Image from 'next/image';
import { FaRegNewspaper, FaGlobeAmericas, FaShieldAlt, FaBolt, FaPenNib, FaUsers } from 'react-icons/fa';

export const metadata = {
  title: "About Us | Dragon News",
  description: "Learn more about Dragon News, our mission, vision, and the team behind the stories."
};

const AboutUsPage = () => {
    return (
        <div className="min-h-screen bg-base-100 text-base-content pb-10">
            {/* Hero Section */}
            <section className="relative bg-neutral text-neutral-content py-24 px-4 sm:px-6 lg:px-8 overflow-hidden rounded-b-[3rem] sm:rounded-b-[5rem] shadow-xl">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                </div>
                <div className="relative max-w-7xl mx-auto text-center z-10 flex flex-col items-center">
                    <div className="inline-block p-4 bg-primary/20 rounded-full mb-6 text-primary">
                        <FaPenNib className="text-4xl" />
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
                        About <span className="text-primary drop-shadow-md">Dragon News</span>
                    </h1>
                    <p className="mt-4 max-w-3xl mx-auto text-xl md:text-2xl opacity-90 leading-relaxed">
                        Igniting truth in every story. We are your premier source for global and local news, delivered with speed, accuracy, and unwavering integrity.
                    </p>
                </div>
            </section>

            {/* Our Story & Mission */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row gap-16 items-center">
                    <div className="flex-1 space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary font-semibold text-sm mb-2">
                            <FaRegNewspaper />
                            <span>Our Origins</span>
                        </div>
                        <h2 className="text-4xl font-bold leading-tight">
                            A Legacy of <br className="hidden md:block"/> Unbiased Reporting
                        </h2>
                        <p className="text-lg leading-relaxed text-base-content/80">
                            Founded with a fiery passion for journalism, Dragon News started as a small independent blog and has grown into a leading global news platform. Our journey has always been driven by a single purpose: to keep the public informed with clear, comprehensive, and courageous reporting.
                        </p>
                        <p className="text-lg leading-relaxed text-base-content/80">
                            In a world full of noise, we strive to be the signal. Our dedicated team of journalists, editors, and analysts work around the clock to bring you stories that matter, from breaking global events to in-depth local investigations.
                        </p>
                        <div className="pt-4">
                            <button className="btn btn-primary rounded-full px-8">Read Our Full History</button>
                        </div>
                    </div>
                    <div className="flex-1 relative">
                        <div className="relative h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl group">
                            <Image 
                                src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1000&auto=format&fit=crop" 
                                alt="Newsroom" 
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-6 left-6 right-6 text-white">
                                <h3 className="text-2xl font-bold mb-1">Our Global Headquarters</h3>
                                <p className="opacity-90 text-sm">Where the stories come to life, 24/7.</p>
                            </div>
                        </div>
                        {/* Decorative element */}
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/20 rounded-full blur-3xl -z-10"></div>
                        <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10"></div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-20 bg-base-200/50 px-4 sm:px-6 lg:px-8 mt-10 rounded-[3rem] mx-4 sm:mx-8 lg:mx-auto max-w-[90rem]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">Our Pillars</span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Core Values</h2>
                        <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
                            The unshakable principles that guide our reporting and shape our newsroom culture every single day.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Value 1 */}
                        <div className="bg-base-100 p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-base-200 hover:border-primary/30 group hover:-translate-y-2">
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-content transition-all duration-300">
                                <FaShieldAlt className="text-3xl" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Integrity First</h3>
                            <p className="text-base-content/70 text-lg leading-relaxed">
                                We are committed to the truth. Our reporting is independent, completely unbiased, and fact-checked rigorously before publication.
                            </p>
                        </div>
                        
                        {/* Value 2 */}
                        <div className="bg-base-100 p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-base-200 hover:border-secondary/30 group hover:-translate-y-2">
                            <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-8 text-secondary group-hover:scale-110 group-hover:bg-secondary group-hover:text-secondary-content transition-all duration-300">
                                <FaBolt className="text-3xl" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Lightning Fast</h3>
                            <p className="text-base-content/70 text-lg leading-relaxed">
                                In a fast-paced world, we ensure you get the breaking news as it happens, without ever compromising on accuracy or depth.
                            </p>
                        </div>

                        {/* Value 3 */}
                        <div className="bg-base-100 p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-base-200 hover:border-accent/30 group hover:-translate-y-2">
                            <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-8 text-accent group-hover:scale-110 group-hover:bg-accent group-hover:text-accent-content transition-all duration-300">
                                <FaGlobeAmericas className="text-3xl" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Global Perspective</h3>
                            <p className="text-base-content/70 text-lg leading-relaxed">
                                We connect local stories to global trends, giving you a comprehensive, 360-degree view of the world and its intricate connections.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Meet the Team */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-secondary font-semibold tracking-wider uppercase text-sm mb-2 block">The People Behind The Stories</span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Editorial Leadership</h2>
                    <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
                        Meet the experienced professionals guiding the Dragon News vision with passion and expertise.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {[
                        { name: "Sarah Jenkins", role: "Editor-in-Chief", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop" },
                        { name: "David Chen", role: "Head of Investigative", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop" },
                        { name: "Elena Rodriguez", role: "Global Correspondent", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop" },
                        { name: "Michael Chang", role: "Chief Technology Officer", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop" }
                    ].map((member, idx) => (
                        <div key={idx} className="group flex flex-col items-center text-center">
                            <div className="relative w-52 h-52 mb-6 rounded-full overflow-hidden shadow-lg p-1 bg-gradient-to-tr from-primary to-secondary group-hover:scale-105 transition-all duration-300">
                                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-base-100">
                                    <Image 
                                        src={member.img} 
                                        alt={member.name} 
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="object-cover transition-transform duration-500 group-hover:scale-110" 
                                    />
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                            <p className="text-primary font-medium tracking-wide">{member.role}</p>
                            <div className="mt-4 flex gap-3 text-base-content/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                {/* Social placeholders */}
                                <div className="w-8 h-8 rounded-full bg-base-200 flex items-center justify-center hover:bg-primary hover:text-primary-content cursor-pointer transition-colors"><FaGlobeAmericas size={14} /></div>
                                <div className="w-8 h-8 rounded-full bg-base-200 flex items-center justify-center hover:bg-secondary hover:text-secondary-content cursor-pointer transition-colors"><FaPenNib size={14} /></div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-br from-primary to-primary-content/20 text-primary-content relative overflow-hidden mt-10 rounded-[3rem] mx-4 sm:mx-8 lg:mx-auto max-w-7xl shadow-2xl">
                {/* Background glowing effects */}
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-96 h-96 bg-black/10 rounded-full blur-3xl"></div>
                
                <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
                    <div className="inline-block p-4 bg-white/10 backdrop-blur-md rounded-2xl mb-8 border border-white/20">
                        <FaRegNewspaper className="text-5xl drop-shadow-lg" />
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold mb-8 drop-shadow-md">Stay Informed. Stay Ahead.</h2>
                    <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-2xl mx-auto font-light">
                        Join millions of readers who trust Dragon News for their daily updates. Subscribe to our newsletter today and never miss a beat.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto">
                        <input type="email" placeholder="Enter your email address" className="input input-lg w-full rounded-full text-base-content bg-base-100 focus:outline-none focus:ring-4 focus:ring-white/30" />
                        <button className="btn btn-neutral btn-lg px-10 rounded-full w-full sm:w-auto shadow-lg hover:scale-105 transition-transform border-none">
                            Subscribe Now
                        </button>
                    </div>
                    <p className="mt-6 text-sm opacity-75 font-light">No spam, just top-tier journalism. Unsubscribe at any time.</p>
                </div>
            </section>
        </div>
    );
};

export default AboutUsPage;