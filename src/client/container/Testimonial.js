import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const options = {
    responsiveClass: true,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 1,
        },
        600: {
        },
        700: {
            items: 2,
        },
        1000: {
            items: 3,

        }
    }
}
class Testimonial extends Component {
    render() {
        return (
            <div className="container-fluid py-5">
                <div className="container p-0">
                    <div className="text-center pb-2">
                        <p className="section-title px-5"><span className="px-2">Testimonial</span></p>
                        <h1 className="mb-4">Học viên nói về chúng tôi!</h1>
                    </div>
                    <div className="container">
                        <OwlCarousel className='owl-theme' {...options}>
                            <div className="item text-center team px-md-2">
                                <div className="bg-light shadow-sm rounded mb-4 p-4">
                                    <h3 className="fas fa-quote-left text-primary mr-3" aria-hidden="true"></h3>
                                    Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum clita
                                </div>
                                <div className="d-flex align-items-center">
                                    <img className="rounded-circle" src="client/img/testimonial-1.jpg" style={{ width: '70px', height: '70px' }} alt="" />
                                    <div className="pl-3">
                                        <h5>Parent Name</h5>
                                        <i>Profession</i>
                                    </div>
                                </div>
                            </div>
                            <div className="item text-center team px-md-2">
                                <div className="bg-light shadow-sm rounded mb-4 p-4">
                                    <h3 className="fas fa-quote-left text-primary mr-3" aria-hidden="true"></h3>
                                    Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum clita
                                </div>
                                <div className="d-flex align-items-center">
                                    <img className="rounded-circle" src="client/img/testimonial-2.jpg" style={{ width: '70px', height: '70px' }} alt="" />
                                    <div className="pl-3">
                                        <h5>Parent Name</h5>
                                        <i>Profession</i>
                                    </div>
                                </div>
                            </div>
                            <div className="item text-center team px-md-2">
                                <div className="bg-light shadow-sm rounded mb-4 p-4">
                                    <h3 className="fas fa-quote-left text-primary mr-3" aria-hidden="true"></h3>
                                    Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum clita
                                </div>
                                <div className="d-flex align-items-center">
                                    <img className="rounded-circle" src="client/img/testimonial-3.jpg" style={{ width: '70px', height: '70px' }} alt="" />
                                    <div className="pl-3">
                                        <h5>Parent Name</h5>
                                        <i>Profession</i>
                                    </div>
                                </div>
                            </div>
                            <div className="item text-center team px-md-2">
                                <div className="bg-light shadow-sm rounded mb-4 p-4">
                                    <h3 className="fas fa-quote-left text-primary mr-3" aria-hidden="true"></h3>
                                    Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum clita
                                </div>
                                <div className="d-flex align-items-center">
                                    <img className="rounded-circle" src="client/img/testimonial-1.jpg" style={{ width: '70px', height: '70px' }} alt="" />
                                    <div className="pl-3">
                                        <h5>Parent Name</h5>
                                        <i>Profession</i>
                                    </div>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        );
    }
}

export default Testimonial;