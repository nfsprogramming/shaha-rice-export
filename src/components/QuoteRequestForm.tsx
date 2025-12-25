
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

export const QuoteRequestForm = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        variety: '',
        finish: '',
        quantity: '',
        packaging: '',
        port: '',
        email: ''
    });

    const handleNext = () => setStep(s => s + 1);
    // const handleBack = () => setStep(s => s - 1);

    const steps = [
        { title: "Select Variety", field: "variety", options: ["1121 Basmati", "1509 Basmati", "Sona Masoori", "Others"] },
        { title: "Processing", field: "finish", options: ["Creamy Sella", "Golden Sella", "Steam", "Raw"] },
        { title: "Packaging", field: "packaging", options: ["5kg", "10kg", "25kg", "50kg Bulk"] },
        { title: "Destination", field: "details", isInput: true }
    ];

    const updateField = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        if (step < steps.length) {
            setTimeout(handleNext, 300);
        }
    };

    return (
        <div className="w-full max-w-4xl mx-auto bg-[#0a0a0a] border border-white/10 p-1">
            <div className="grid grid-cols-1 md:grid-cols-12 min-h-[500px]">
                {/* Progress Sidebar */}
                <div className="md:col-span-4 bg-[#111] p-8 relative flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/5">
                    <div>
                        <h3 className="text-[#C5A266] font-serif text-2xl mb-8">Quote Configuration</h3>
                        <div className="space-y-6">
                            {steps.map((s, i) => (
                                <div key={i} className={`flex items-center gap-4 transition-all duration-300 ${i + 1 === step ? 'opacity-100' : 'opacity-40'}`}>
                                    <div className={`w-8 h-8 rounded-full border ${i + 1 === step ? 'border-[#C5A266] text-[#C5A266]' : i + 1 < step ? 'bg-[#C5A266] border-[#C5A266] text-black' : 'border-white/20 text-white'} flex items-center justify-center text-xs font-bold`}>
                                        {i + 1 < step ? <Check className="w-4 h-4" /> : i + 1}
                                    </div>
                                    <span className="text-sm uppercase tracking-widest text-white">{s.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    {step > 1 && (
                        <div className="text-xs text-gray-500 mt-8">
                            Current Selection: <br />
                            <span className="text-white">{formData.variety} {formData.finish && `/ ${formData.finish}`}</span>
                        </div>
                    )}
                </div>

                {/* Interaction Area */}
                <div className="md:col-span-8 p-8 md:p-12 relative flex flex-col justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={step}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="w-full"
                        >
                            <h4 className="text-3xl font-light text-white mb-8">
                                {steps[step - 1].title}
                            </h4>

                            {steps[step - 1].isInput ? (
                                <div className="space-y-6">
                                    <div className="group relative">
                                        <input
                                            type="text"
                                            placeholder="Port of Discharge"
                                            className="w-full bg-transparent border-b border-white/20 py-4 text-xl text-white focus:outline-none focus:border-[#C5A266] transition-colors"
                                            onChange={(e) => setFormData({ ...formData, port: e.target.value })}
                                        />
                                    </div>
                                    <div className="group relative">
                                        <input
                                            type="email"
                                            placeholder="Business Email"
                                            className="w-full bg-transparent border-b border-white/20 py-4 text-xl text-white focus:outline-none focus:border-[#C5A266] transition-colors"
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        />
                                    </div>
                                    <button className="mt-8 bg-[#C5A266] hover:bg-white text-black px-8 py-4 uppercase tracking-[0.2em] text-xs font-bold transition-colors w-full md:w-auto">
                                        Initialize Request
                                    </button>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {steps[step - 1].options?.map((opt) => (
                                        <button
                                            key={opt}
                                            onClick={() => updateField(steps[step - 1].field, opt)}
                                            className="group flex items-center justify-between p-6 border border-white/10 hover:border-[#C5A266] hover:bg-[#C5A266]/5 transition-all duration-300 text-left"
                                        >
                                            <span className="text-white font-serif text-lg group-hover:text-[#C5A266] transition-colors">{opt}</span>
                                            <ArrowRight className="w-5 h-5 text-transparent group-hover:text-[#C5A266] -translate-x-2 group-hover:translate-x-0 transition-all" />
                                        </button>
                                    ))}
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};
