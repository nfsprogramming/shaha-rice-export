
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, ShoppingBag, Globe, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Certifications } from '../components/Certifications';

export const Home = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    // Generate random grains for background effect
    const grains = Array.from({ length: 20 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: 10 + Math.random() * 10,
        delay: Math.random() * 5,
        scale: 0.5 + Math.random() * 0.5,
    }));

    return (
        <div className="min-h-screen bg-[#050505] text-white">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                {/* Background Video */}
                <div className="absolute inset-0 z-0">
                    <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-40 scale-105">
                        <source src="https://assets.mixkit.co/videos/preview/mixkit-rice-paddy-field-in-asia-3253-large.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/60 to-[#050505] z-10 pointer-events-none" />

                {/* Floating Rice Effect Layer */}
                {grains.map((grain) => (
                    <motion.div
                        key={grain.id}
                        className="absolute bg-white/80 rounded-full blur-[1px] z-10"
                        style={{
                            left: `${grain.x}%`,
                            top: `${grain.y}%`,
                            width: `${4 * grain.scale}px`,
                            height: `${12 * grain.scale}px`,
                            opacity: 0.3,
                        }}
                        animate={{
                            y: [-20, 20, -20],
                            rotate: [0, 180, 360],
                        }}
                        transition={{
                            duration: grain.duration,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: grain.delay,
                        }}
                    />
                ))}

                <div className="container mx-auto px-6 relative z-20 flex flex-col md:flex-row items-center justify-center h-full">
                    <motion.div style={{ y: y1 }} className="md:w-1/2 text-center md:text-left mb-12 md:mb-0 mt-24">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="text-[#C5A266] text-xs md:text-xl font-light tracking-[0.2em] md:tracking-[0.5em] mb-4 uppercase"
                        >
                            Premium Export Quality
                        </motion.h2>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.8 }}
                            className="font-serif text-4xl md:text-7xl lg:text-8xl leading-tight mb-8 text-[#E1C699]"
                        >
                            Weightless <br /> <span className="italic">Elegance.</span>
                        </motion.h1>
                        <p className="text-gray-400 text-sm md:text-base max-w-md mx-auto md:mx-0 leading-relaxed tracking-wide mb-10">
                            Experience the ethereal lightness of the world's finest long-grain rice. Culinary perfection suspended in time.
                        </p>
                        <div className="flex flex-col md:flex-row gap-6 justify-center md:justify-start items-center">
                            <Link to="/products">
                                <button className="px-8 py-3 border border-[#E1C699]/30 bg-[#E1C699]/10 hover:bg-[#E1C699]/20 backdrop-blur-sm text-xs uppercase tracking-[0.25em] text-[#E1C699] transition-all">
                                    Our Products
                                </button>
                            </Link>
                            <Link to="/contact">
                                <button className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-gray-500 hover:text-white transition-colors">
                                    <span className="w-8 h-[1px] bg-[#E1C699]"></span> Export Inquiry
                                </button>
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div style={{ y: y2 }} className="md:w-1/2 relative flex justify-center items-center">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-[#C5A266]/10 rounded-full blur-3xl animate-pulse"></div>
                            <img src="/rice-hero.png" alt="Floating Rice" className="relative w-full max-w-[500px] h-auto object-contain drop-shadow-2xl" />
                        </div>
                    </motion.div>
                </div>

                <motion.div style={{ opacity }} className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 z-20">
                    <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
                    <ChevronDown className="w-4 h-4 animate-bounce" />
                </motion.div>
            </section>

            {/* Trust & Compliance Ribbon */}
            <Certifications />

            {/* Feature Section */}
            <section className="py-24 bg-[#080808]">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                        <FeatureCard icon={<Award />} title="Premium Grade" description="Hand-selected grains ensuring the highest quality for valid connoisseurs." />
                        <FeatureCard icon={<Globe />} title="Global Export" description="Delivering excellence to kitchens across the globe with intact freshness." />
                        <FeatureCard icon={<ShoppingBag />} title="Direct Sourcing" description="From the fertile fields directly to your table, maintaining purity." />
                    </div>
                </div>
            </section>

            {/* Global Footprint Map */}
            <section className="py-32 bg-black relative overflow-hidden">
                <div className="container mx-auto px-6 text-center relative z-10">
                    <span className="text-[#C5A266] uppercase tracking-[0.3em] text-xs">Global Reach</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-white mt-4 mb-16">Exporting <span className="italic text-gray-500">Excellence</span></h2>

                    <div className="relative w-full max-w-5xl mx-auto aspect-[16/9] bg-[#111] rounded-2xl border border-white/5 overflow-hidden group">
                        <div className="absolute inset-0 opacity-30 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-cover bg-center invert filter brightness-50 contrast-125"></div>

                        {/* Glowing Nodes */}
                        <MapNode x={55} y={40} label="Dubai Base" />
                        <MapNode x={48} y={35} label="EU Hub" />
                        <MapNode x={60} y={60} label="African Trade" />
                        <MapNode x={80} y={45} label="Southeast Asia" />
                        <MapNode x={25} y={40} label="USA Logistics" />
                    </div>
                </div>
            </section>
        </div>
    );
};

const MapNode = ({ x, y, label }: { x: number, y: number, label: string }) => (
    <div className="absolute group cursor-pointer" style={{ left: `${x}%`, top: `${y}%` }}>
        <div className="relative flex items-center justify-center">
            <div className="w-3 h-3 bg-[#C5A266] rounded-full z-10 shadow-[0_0_10px_#C5A266]" />
            <div className="absolute w-8 h-8 bg-[#C5A266]/20 rounded-full animate-ping" />
        </div>
        <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur px-3 py-1 rounded border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20">
            <span className="text-[#C5A266] text-[10px] uppercase font-bold tracking-widest">{label}</span>
        </div>
    </div>
);

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
    return (
        <div className="group pl-8 relative overflow-hidden transition-all duration-500 hover:pl-10">
            <div className="absolute top-0 left-0 w-[1px] h-full bg-[#E1C699]/20 group-hover:bg-[#E1C699] transition-colors duration-500"></div>
            <div className="mb-6 text-[#E1C699] transform transition-all duration-700 ease-out group-hover:scale-150 group-hover:opacity-0 group-hover:blur-sm origin-left">
                {icon}
            </div>
            <h3 className="text-xl font-serif mb-3 text-white">{title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed group-hover:text-[#E1C699]/80 transition-colors">{description}</p>
        </div>
    );
}
