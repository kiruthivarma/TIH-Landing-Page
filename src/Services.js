import React from 'react';

function Services() {
    return (
        <div>
            <section id="services" className="services section">
                <div className="container section-title" data-aos="fade-up">
                    <h2>TIH Provides Training On</h2>
                </div>
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="100">
                            <div className="service-item position-relative">
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div className="icon" style={{ marginRight: '20px' }}>
                                        <i className="bi bi-window-fullscreen"></i>
                                    </div>
                                    <h4>Full Stack</h4>
                                </div>
                                <strong style={{ color: '#fff' }}>
                                    The development of both front-end and back-end aspects of a website or application, encompassing both client-side and server-side technologies.
                                </strong>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="200">
                            <div className="service-item position-relative">
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div className="icon" style={{ marginRight: '20px' }}>
                                        <i className="bi bi-headset-vr"></i>
                                    </div>
                                    <h4>Immersive Technology</h4>
                                </div>
                                <strong style={{ color: '#fff' }}>
                                    Digital experiences that deeply engage users by creating a sense of presence within virtual or augmented environments.
                                </strong>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="300">
                            <div className="service-item position-relative">
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div className="icon" style={{ marginRight: '20px' }}>
                                        <i className="bi bi-person-workspace"></i>
                                    </div>
                                    <h4>UI/UX</h4>
                                </div>
                                <strong style={{ color: '#fff' }}>
                                    Creating intuitive and user-friendly digital interfaces through design and functionality to enhance user satisfaction and interaction efficiency.
                                </strong>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="400">
                            <div className="service-item position-relative">
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div className="icon" style={{ marginRight: '20px' }}>
                                        <i className="bi bi-android2"></i>
                                    </div>
                                    <h4>Mobile App Development</h4>
                                </div>
                                <strong style={{ color: '#fff' }}>
                                    Creating software applications specifically designed to operate on mobile devices such as smartphones and tablets, catering to diverse user needs and platforms.
                                </strong>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Services;