

const certs = [
    { name: "ISO 22000", id: "ISO", img: "/certificates/iso.svg" },
    { name: "HACCP Certified", id: "HACCP", img: "/certificates/haccp.svg" },
    { name: "GMP Standard", id: "GMP", img: "/certificates/gmp.svg" },
    { name: "FSSAI", id: "FSSAI", img: "/certificates/fssai.svg" },
    { name: "FDA Registered", id: "FDA", img: "/certificates/fda.svg" },
    { name: "Halal Certified", id: "HALAL", img: "/certificates/halal.svg" },
    { name: "Kosher Certified", id: "KOSHER", img: "/certificates/kosher.svg" },
    { name: "REX Registered", id: "REX", img: "/certificates/rex.svg" },
    { name: "APEDA Member", id: "APEDA", img: "/certificates/apeda.svg" }
];

export const Certifications = () => {
    return (
        <div className="w-full bg-[#080808] border-y border-white/5 py-12 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-wrap justify-center md:justify-between gap-8 md:gap-12 items-center opacity-70 hover:opacity-100 transition-opacity duration-500">
                    {certs.map((cert) => (
                        <div key={cert.id} className="group flex flex-col items-center gap-4 cursor-pointer">
                            <div className="w-20 h-20 md:w-24 md:h-24 p-4 border border-white/10 rounded-full bg-white/[0.02] group-hover:bg-[#C5A266]/10 group-hover:border-[#C5A266]/50 transition-all duration-500 flex items-center justify-center">
                                <img src={cert.img} alt={cert.name} className="w-full h-full object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-[0_0_10px_rgba(197,162,102,0.3)]" />
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
