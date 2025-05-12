import React from 'react'
import './certifications.css'
import Certificate1 from '../../assets/aws.png';
import Certificate2 from '../../assets/mtapython.png';
import Certificate3 from '../../assets/istqb.png';

const Certifications = () => {
    return (
        <section id='certificates'>
            <h2 className='certificatesTitle'>Certifications</h2>
            <span className='certificatesDesc'>I hold industry-recognized certifications that validate my expertise in cloud, software testing, and programming fundamentals.</span>
            <div className='certificatesImgs'>
                <div className='certificateCard'>
                    <img src={Certificate1} alt="Certificate1" className='certificatesImg' />
                    <div className='certificateOverlay'>
                        <p>AWS Certified Cloud Practitioner</p>
                        <span>September 2024</span>
                    </div>
                </div>
                <div className='certificateCard'>
                    <img src={Certificate2} alt="MTA: Introduction to Programming using Python" className='certificatesImg' />
                    <div className='certificateOverlay'>
                        <p>MTA: Introduction to Programming using Python</p>
                        <span>August 2021</span>
                    </div>
                </div>
                <div className='certificateCard'>
                    <img src={Certificate3} alt="ISTQB Foundation Level" className='certificatesImg' />
                    <div className='certificateOverlay'>
                        <p>ISTQB Foundation Level</p>
                        <span>September 2018</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Certifications;