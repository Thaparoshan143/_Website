import React from 'react';


const Certification : React.FC = () =>
{
    const bgCertification = require("../images/certification.png");
    return (
        <div className="min-h-[200vh]">
            <img className="absolute top-0 left-0 -z-10 w-[100vw] h-[200vh] min-h-full min-w-full opacity-60" src={bgCertification} alt={"skills image"} />

        </div>
    )
}

export default Certification