import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import './styles.css';

export default function AppointmentForm() {

    return (
        <div>
            <section className="book" id="book">
                <div className="section-head" style={{ justifyContent: 'center' }}>
                    <Link to="/" className="fa fa-arrow-left" style={{ marginRight: '10rem' }}> back </Link>
                    <h1 className="heading"><span>add</span> appointment</h1>
                </div>
                <div className="section-head" style={{ justifyContent: 'center' }}></div>
                <div className="row">
                    <div className="image">
                        <img src="../image/book-img.svg" alt="" />
                    </div>
                    <label for=""></label>
                    <form action="" onSubmit={(e) => e.preventDefault()}>
                        <div className="field">
                            <label for="patient">patient</label><select name="patient" id="patient"><br />
                                <option value="volvo">Ahmar</option>
                                <option value="saab">Akbar</option>
                                <option value="opel">Anthony</option>
                            </select>
                            <label for="doctor">doctor</label><select name="doctor" id="doctor"><br />
                                <option value="volvo">Ember</option>
                                <option value="saab">Earth</option>
                                <option value="opel">Storm</option>
                                <option value="audi">Void</option>
                            </select>
                        </div>
                        <br />
                        <div className="field">
                            <label for="category">category</label><select name="category" id="category"><br />
                                <option value="volvo">Free Checkup</option>
                                <option value="saab">Medication</option>
                                <option value="opel">Physio Therapy</option>
                                <option value="audi">Total Care</option>
                            </select>
                        </div>
                        <input type="date" className="box" />
                        <input type="submit" value="submit" className="btn" />
                    </form>
                </div>
            </section>
        </div>
    )
}