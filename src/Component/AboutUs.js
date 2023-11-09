import React, { Component } from 'react'

class AboutUs extends Component {
    render() {
        return (
            <>
                <div className="row car">

                    <div className="col-sm-3 col1"><br />
                        <p className="h1 best">Best Learning</p>
                        <p className="h1 education">Education Platform</p>
                        <p className="h1 world">in The World</p><br />
                        <p className="h6 lorem1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi corrupti alias odit sint
                            modi accusantium. Illo, perspiciatis.</p><br /><br />

                        <div className="btnss">
                            <span className="p-3 trust"><i className="fa-solid fa-ribbon fa-2xl symb"></i><br />Trusted Platform</span>
                            <span className="p-3 safe"><i className="fa-solid fa-shield fa-2xl symb"></i><br />Safe & Secure</span>
                            <span className="p-3 quick"><i className="fa-solid fa-message fa-2xl symb"></i><br />Quick Assistance</span>
                        </div>
                    </div>

                    <div className="col-sm-7 img2"><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

                        {/* <!-- Carousel --> */}
                        <div id="demo" className="carousel slide" data-bs-ride="carousel">

                            {/* <!-- Indicators/dots --> */}
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="/demo" data-bs-slide-to="0" className="active"></button>
                                <button type="button" data-bs-target="/demo" data-bs-slide-to="1"></button>
                                <button type="button" data-bs-target="/demo" data-bs-slide-to="2"></button>
                            </div>

                            {/* <!-- The slideshow/carousel --> */}
                            <div className="carousel-inner radius">
                                <div className="carousel-item active">
                                    <img src="Tech.original.png" alt="Tech" />
                                </div>
                                <div className="carousel-item">
                                    <img src="Book-Wallpaper-27-1920-x-1080.jpg" alt="Book-Wallpaper-27-1920-x-1080" />
                                </div>
                                <div className="carousel-item">
                                    <img src="booksimage.jpg" alt="booksimage" />
                                </div>
                            </div>

                            {/* <!-- Left and right controls/icons --> */}
                            <button className="carousel-control-prev" type="button" data-bs-target="/demo" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon"></span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="/demo" data-bs-slide="next">
                                <span className="carousel-control-next-icon"></span>
                            </button>

                        </div>
                    </div>

                </div><br /><br /><br /><br /><br /><br />
            </>
        );
    }
}
export default AboutUs;