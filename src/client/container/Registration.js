import React, { Component } from 'react';

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: "",
            Email: "",
            Object: ""
        }
    }
    onChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]: value
        })
        console.log(this.state)
    }

    save = (event) => {
        event.preventDefault();
        console.log(this.state)
    }

    render() {
        return (
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7 mb-5 mb-lg-0">
                            <p className="section-title pr-5"><span className="pr-2">Book A Seat</span></p>
                            <h1 className="mb-4">Book A Seat For Your Kid</h1>
                            <p>Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed eos,
                                ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est
                                dolor</p>
                            <ul className="list-inline m-0">
                                <li className="py-2"><i className="fa fa-check text-success mr-3" />Labore eos amet dolor amet diam</li>
                                <li className="py-2"><i className="fa fa-check text-success mr-3" />Etsea et sit dolor amet ipsum</li>
                                <li className="py-2"><i className="fa fa-check text-success mr-3" />Diam dolor diam elitripsum vero.</li>
                            </ul>
                            <a href="/#" className="btn btn-primary mt-4 py-2 px-4">Book Now</a>
                        </div>
                        <div className="col-lg-5">
                            <div className="card border-0">
                                <div className="card-header bg-secondary text-center p-4">
                                    <h1 className="text-white m-0">Book A Seat</h1>
                                </div>
                                <div className="card-body rounded-bottom bg-primary p-5">
                                    <form>
                                        <div className="form-group">
                                            <input onChange={(onChange) => this.onChange(onChange)} type="text" className="form-control border-0 p-4" placeholder="Your Name" required="required" name="Name" />
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form-control border-0 p-4" placeholder="Your Email" required="required" />
                                        </div>
                                        <div className="form-group">
                                            <select className="custom-select border-0 px-4" style={{ height: '47px' }}>
                                                <option value="0">Select A Class</option>
                                                <option value="1">Class 1</option>
                                                <option value="2">Class 1</option>
                                                <option value="3">Class 1</option>
                                            </select>
                                        </div>
                                        <div>
                                            <button className="btn btn-secondary btn-block border-0 py-3" onClick={(event) => { this.save(event) }} type="submit">Book Now</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Registration;