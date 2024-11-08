import React from 'react';

interface Logo {
    src: string;
    alt: string;
    width?: number;
}

interface BrandLogosProps {
    logos: Logo[];
}

const BrandLogos: React.FC<BrandLogosProps> = ({ logos }) => {
    return (
        <div className="flex flex-wrap gap-16 justify-evenly items-center py-16">
            {logos.map((logo, index) => (
                <img key={index} src={logo.src} alt={logo.alt} width={logo.width || 120} />
            ))}
        </div>
    );
};

export default BrandLogos;
