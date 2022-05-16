import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import './styles.css';

export default function Index() {

    return (
        <div>
            <header className="header">

                <Link to="#" className="logo"> <i className="fas fa-heartbeat"> LumbarFy </i></Link>

                <nav className="navbar">
                    <Link to="#home">home</Link>
                    <Link to="#services">services</Link>
                    <Link to="#about">about</Link>
                    <Link to="#doctors">doctors</Link>
                    <Link to="#patients">patients</Link>
                </nav>

                <div id="menu-btn" className="fas fa-bars"></div>

            </header>
            {/* header end */}

            {/* <!-- home section starts --> */}
            <section className="home" id="home">
                <div className="image">
                    <img src="/home-img.svg" alt="" />
                </div>
                <div className="content">
                    <h3>Stay safe! Stay healthy!</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nostrum ut aperiam cumque. Officia,
                        inventore, facere deserunt tempora, earum accusantium optio pariatur laborum assumenda perferendis sit quis.
                        Nisi, quos fugiat.</p>
                </div>
                <Link to="/AppointmentForm" className="btn"> contact us! <span className="fas fa-chevron-right"></span> </Link>
            </section>
            {/* <!-- home section ends -->

<!-- services section start --> */}

            <section className="services" id="services">
                <h1 className="heading">our <span>services</span></h1>
                <div className="box-container">

                    <div className="box" id="checkup">
                        <i className="fas fa-notes-medical"></i>
                        <h3>free checkup</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, tenetur!</p>
                        <Link to="/AppointmentForm" className="btn">learn more <span className="fas fa-chevron-right"></span></Link>
                    </div>

                    <div className="box" id="medicine">
                        <i className="fas fa-pills"></i>
                        <h3>medicines</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, tenetur!</p>
                        <Link to="/AppointmentForm" className="btn">learn more <span className="fas fa-chevron-right"></span></Link>
                    </div>

                    <div className="box" id="therapy">
                        <i className="fas fa-heartbeat"></i>
                        <h3>physio therapy</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, tenetur!</p>
                        <Link to="/AppointmentForm" className="btn">learn more <span className="fas fa-chevron-right"></span></Link>
                    </div>

                    <div className="box" id="care">
                        <i className="fa fa-hospital"></i>
                        <h3>total care</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, tenetur!</p>
                        <Link to="/AppointmentForm" className="btn">learn more <span className="fas fa-chevron-right"></span></Link>
                    </div>

                </div>
            </section>

            {/* <!-- services section end -->

<!-- about section start --> */}

            <section className="about" id="about">
                <h1 className="heading"><span>about</span>us</h1>
                <div className="row">
                    <div className="image">
                        <img src="../image/about-img.svg" alt="" />
                    </div>
                    <div className="content">
                        <h3>we take care of your healthy life</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, perferendis!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    </div>
                </div>
            </section>
            {/* 
<!-- about section end -->

<!-- doctor section starts --> */}
            <section className="records" id="doctors">
                <div className="section-head">
                    <Link to="/DoctorForm" className="fa fa-eye">add+</Link>
                    <h1 className="heading">our <span>doctors</span></h1>
                    <input type="text" placeholder="Search.." />
                </div>

                <div className="box-container">

                    <div className="box">
                        <img src="../image/doc-1.jpg" alt="" />
                        <h3>john deo</h3>
                        <span>expert doctor</span>
                        <div className="share">
                            <Link to="#" className="fa fa-eye"></Link>
                            <Link to="#" className="fas fa-edit"></Link>
                            <Link to="#" className="fa fa-trash"></Link>
                        </div>
                    </div>

                    <div className="box">
                        <img src="../image/doc-2.jpg" alt="" />
                        <h3>john deo</h3>
                        <span>expert doctor</span>
                        <div className="share">
                            <Link to="#" className="fa fa-eye"></Link>
                            <Link to="#" className="fas fa-edit"></Link>
                            <Link to="#" className="fa fa-trash"></Link>
                        </div>
                    </div>

                    <div className="box">
                        <img src="../image/doc-3.jpg" alt="" />
                        <h3>john deo</h3>
                        <span>expert doctor</span>
                        <div className="share">
                            <Link to="#" className="fa fa-eye"></Link>
                            <Link to="#" className="fas fa-edit"></Link>
                            <Link to="#" className="fa fa-trash"></Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- doctor section ends -->

<!-- patient section starts --> */}
            <section className="records" id="patients">
                <div className="section-head">
                    <Link to="/PatientForm" className="fa fa-eye">add+</Link>
                    <h1 className="heading">our <span>patients</span></h1>
                    <input type="text" placeholder="Search.." />
                </div>

                <div className="box-container">

                    <div className="box">
                        <img src="../image/doc-4.jpg" alt="" />
                        <h3>john deo</h3>
                        <span>patient</span>
                        <div className="share">
                            <Link to="#" className="fa fa-eye"></Link>
                            <Link to="#" className="fas fa-edit"></Link>
                            <Link to="#" className="fa fa-trash"></Link>
                        </div>
                    </div>

                    <div className="box">
                        <img src="../image/doc-5.jpg" alt="" />
                        <h3>john deo</h3>
                        <span>patient</span>
                        <div className="share">
                            <Link to="#" className="fa fa-eye"></Link>
                            <Link to="#" className="fas fa-edit"></Link>
                            <Link to="#" className="fa fa-trash"></Link>
                        </div>
                    </div>

                    <div className="box">
                        <img src="../image/doc-6.jpg" alt="" />
                        <h3>john deo</h3>
                        <span>patient</span>
                        <div className="share">
                            <Link to="#" className="fa fa-eye"></Link>
                            <Link to="#" className="fas fa-edit"></Link>
                            <Link to="#" className="fa fa-trash"></Link>
                        </div>
                    </div>

                </div>
            </section>

            {/* <!-- patient section ends -->

<!-- footer sections starts --> */}

            <section className="footer">
                <div className="box-container">

                    <div className="box">
                        <h3>quick links</h3>
                        <Link to="#home"><i className="fas fa-chevron-right"></i> home</Link>
                        <Link to="#services"><i className="fas fa-chevron-right"></i> services</Link>
                        <Link to="#about"><i className="fas fa-chevron-right"></i> about</Link>
                        <Link to="#doctors"><i className="fas fa-chevron-right"></i> doctors</Link>
                        <Link to="#patients"><i className="fas fa-chevron-right"></i> patients</Link>
                    </div>

                    <div className="box">
                        <h3>quick links</h3>
                        <Link to="#checkup"><i className="fas fa-chevron-right"></i> checkup</Link>
                        <Link to="#medicine"><i className="fas fa-chevron-right"></i> medicine</Link>
                        <Link to="#therapy"><i className="fas fa-chevron-right"></i> diagnosis</Link>
                        <Link to="#care"><i className="fas fa-chevron-right"></i> physician course</Link>
                    </div>

                    <div className="box">
                        <h3>contact info</h3>
                        <Link to="#"> <i className="fas fa-phone"></i> +123-456-7890 </Link>
                        <Link to="#"> <i className="fas fa-phone"></i> +111-222-3333 </Link>
                        <Link to="#"> <i className="fas fa-envelope"></i> example@work.com </Link>
                        <Link to="#"> <i className="fas fa-map-marker-alt"></i> CUI, Islamabad </Link>
                    </div>

                </div>

                <div className="credit">created by <span>lumbarfy.dev</span> | all rights reserved</div>

            </section>
        </div>
    )
}