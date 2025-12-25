


const certs = [
    { name: "ISO 22000", id: "ISO" },
    { name: "HACCP Certified", id: "HACCP" },
    { name: "GMP Standard", id: "GMP" },
    { name: "FSSAI", id: "FSSAI" },
    { name: "FDA Registered", id: "FDA" },
    { name: "Halal Certified", id: "HALAL" }
];

export const Certifications = () => {
    return (
        <div className="w-full bg-[#080808] border-y border-white/5 py-12 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-wrap justify-center md:justify-between gap-8 md:gap-12 items-center opacity-50 hover:opacity-100 transition-opacity duration-500">
                    {certs.map((cert) => (
                        <div key={cert.id} className="group flex flex-col items-center gap-4 cursor-default">
                            {/* 
                  Since we don't have actual SVG logos yet, I'm creating sophisticated 
                  typographic placeholders that look like certification stamps 
               */}
                            <div className="w-24 h-24 rounded-full border-2 border-dashed border-gray-700 group-hover:border-[#C5A266] flex items-center justify-center transition-all duration-500 group-hover:scale-110">
                                <div className="w-20 h-20 rounded-full border border-gray-800 bg-[#0a0a0a] flex items-center justify-center text-center p-2 group-hover:shadow-[0_0_30px_rgba(197,162,102,0.2)] transition-shadow">
                                    <span className="text-gray-500 font-bold text-xs group-hover:text-white transition-colors">{cert.id}</span>
                                </div>
                            </div>
                            <span className="text-[10px] uppercase tracking-widest text-gray-600 group-hover:text-[#C5A266] transition-colors">
                                {cert.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
