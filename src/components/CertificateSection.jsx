import { ExternalLink } from "lucide-react";

const certificates = [
    {
        id: 1,
        title: "Comptia Security+ Certificate",
        doa: "09/22/2025",
        exp: "09/22/2028",
        image: "/certificates/comptiaCert.jpg",
        code: "MTGHEW0Q014Q5MHJ",
        url: "https://www.certmetrics.com/comptia/public/verification.aspx/"
    },
    {
        id: 2,
        title: "Google Cybersecurity Certificate",
        doa: "07/08/2025",
        exp: "N\A",
        image: "/certificates/googleCert.jpg",
        url: "https://www.coursera.org/account/accomplishments/professional-cert/IEFWN5W54QDO"
    },
    {
        id: 3,
        title: "Udemy Angular Essentials Certificate ",
        doa: "10/30/2023",
        exp: "N\A",
        image: "/certificates/angularCert.jpg",
        url: "https://www.udemy.com/certificate/UC-5f5608c7-5d39-40db-a29e-d9445ffc9e77/"
    },
    {
        id: 4,
        title: "TryHackMe Pre-Security Certificate",
        doa: "10/08/2025",
        exp: "N\A",
        image: "/certificates/tryHackMeCert.jpg",
        code: "THM-LT3NTPHQME",
        url: "https://tryhackme.com/certificate/THM-LT3NTPHQME"
    },
    {
        id: 5,
        title: "LinkedIn Learning Certificate of Completion",
        doa: "10/24/2025",
        exp: "N\A",
        image: "/certificates/linkedinCert.png",
        url: "https://www.linkedin.com/learning/certificates/13909ed852187e6e297fb47fca5365bacef2c9a5f2ebf0414463c95488d7d95b?trk=share_certificate"
    }
];

export const CertificateSection = () => {
    return (
        <section id="certificates" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:-text-4xl font-bold mb-4 text-center">
                    {" "}
                    Featured<span className="text-primary"> Certificates </span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here is a collection of my recent certificates that I've obtained!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certificates.map((certificate, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                {/* Certificate Image*/}
                                <img 
                                    src={certificate.image} 
                                    alt={certificate.title} 
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <div className="p-6">
                                {/* Certificate Name*/}
                                <h3 className="text-xl font-semibold mb-2">
                                    {certificate.title}
                                </h3>
                                <p className="text-muted-foreground text-sm">
                                    <strong>DOA:</strong> {certificate.doa}
                                </p>
                                <p className="text-muted-foreground text-sm mb-4">
                                    <strong>EXP:</strong> {certificate.exp}
                                </p>
                                <p className="text-muted-foreground text-sm mb-4">
                                    <strong>Code:</strong> {certificate.code}
                                </p>

                                <a 
                                href={certificate.url} 
                                target="_blank"
                                className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                    <ExternalLink size={20} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
