import React from 'react';
import { _Certificates } from '../Data';

const Certification : React.FC = () =>
{
    const bgCertification = require("../images/certification.png");

    const urlCBasics = require("../images/Certificates/C Basics.jpg");
    const urlCMaster = require("../images/Certificates/C Basics.jpg");
    const urlCppBasics = require("../images/Certificates/C++ Basics.jpg");
    const urlCppMaster = require("../images/Certificates/C++ Basics.jpg");
    const urlCppOOP = require("../images/Certificates/C++ Basics.jpg");
    const urlPythonBasics = require("../images/Certificates/Python Basics.jpg");
    const urlPythonMaster = require("../images/Certificates/Python Master.jpg");
    const urlPythonBeyondBasics = require("../images/Certificates/Python Beyond Basics.jpg");
    const urlJSQSXJ = require("../images/Certificates/Joint Quiz SXJ.jpg");
    const urlUSQSXJ = require("../images/Certificates/Unity Quiz SXJ.jpg");
    const urlSFSXJ = require("../images/Certificates/Science Fair SXJ.jpg");

    const urlsProgramming = [urlCBasics, urlCMaster, urlCppBasics, urlCppMaster, urlCppOOP, urlPythonBasics, urlPythonMaster, urlPythonBeyondBasics]
    const urlsProject = [urlJSQSXJ, urlUSQSXJ, urlSFSXJ];

    return (
        <div className="min-h-[200vh] flex flex-row flex-wrap justify-around items-center pt-[5rem]">
            <div className="absolute top-0 left-0 -z-10 h-[200vh] w-[100vw] opacity-50" style={{background:`url(${bgCertification})`,backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'center'}} />
            {urlsProgramming.map((url)=>
            {
                return <img className="h-[30rem] w-[20rem] m-[1rem] hover:shadow-theme-hovd hover:shadow-xl hover:scale-[102%] transition delay-300 opacity-90 hover:opacity-100" src={url} />
            })}
            {urlsProject.map((url)=>
            {
                return <img className="lg:h-[20rem] h-[15rem] w-[30rem] m-[1rem] hover:shadow-theme-hovd hover:shadow-xl hover:scale-[102%] transition delay-300 opacity-90 hover:opacity-100" src={url} />
            })}
            {/* <img className="h-[30rem] w-[20rem] m-[1rem] border-theme border-2 hover:shadow-theme-hovd hover:shadow-xl hover:scale-[102%] transition delay-300" src={urlstemp} alt={"this"} /> */}
        </div>
    )
}

export default Certification