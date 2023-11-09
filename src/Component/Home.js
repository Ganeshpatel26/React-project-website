import React, { Component } from 'react'

class Home extends Component {
    render() {
        return (
            <div>
                <div className="bg-image img"><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

                    <div className="section">
                        <p className="h1 mission" id="mission">Our mission is to connect</p>
                        <p className="h2 text-white learner" id="learner">Learner and the best Tutors in the world.</p><br />
                        <p className=" h6 text-white interactive">
                            <span>Interactive Online Training with the best Tutors</span><br />
                            <span>Live Project Training For Developing Real-Time Applications</span><br />
                            <span>Find your dream job fromtop IT Companies</span>
                        </p><br />
                        <div className="btns">
                            <button type="button" className="h6 text-white btn1">IT Training &nbsp; <i
                                className="fa-solid fa-circle-arrow-right fa-lg"></i></button> &nbsp;
                            <button type="button" className="h6 text-white btn1">Live Projects &nbsp; <i
                                className="fa-solid fa-circle-arrow-right fa-lg"></i></button> &nbsp;
                            <button type="button" className="h6 text-white btn1">Job & Vacancies &nbsp; <i
                                className="fa-solid fa-circle-arrow-right fa-lg"></i></button>
                        </div><br />
                    </div>

                </div>


                {/* <!-- This is page 2. --> */}
                <div className="row car">

                    <div className="col-sm-3 col1"><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
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

                </div><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <hr className="horizontal" />


                {/* <!-- This is page 3. --> */}
                <div className="row imagepage3">
                    <div className="col-sm-3 page3col2">
                        <p className="h1 training">Training</p><br />
                        <div className="bg-image booksimages">
                            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />br /b
                            <br /><br />
                            <p className="h4 text-white helping">Helping Businesses succeed through the power of video.</p><br />
                            <button className="btn btn-primary p-2 viewall" style={{ backgroundColor: "purple" }}>View All &nbsp; <i
                                className="fa-solid fa-circle-arrow-right fa-lg"></i></button>
                        </div>
                    </div>

                    <div className="col-sm-7 mt-5 imagecard"><br />
                        <div className="cards4">
                            <div className="card col-sm-3 cardradius">
                                <img className="card-img-top imageimage" style={{ borderRadius: "20px" }} src="booksimage.jpg"
                                    alt="Book-Wallpaper-27-1920-x-1080" />
                                <div className="card-body">
                                    <h4 className="card-title text-center cardheader">Creative Content</h4>
                                    <p className="card-text text-center cardtext">Creative Writing: Lorem ipsum dolor sit, amet consectetur
                                        adipisicing elit dhirel dgkuur kfkysosol lklukl rtweriuw.</p>
                                    <span className="btnlesson"><a href="/"><i className="fa-solid fa-circle-play fa-xl"
                                        style={{ color: "rgb(135, 30, 135)" }}></i></a> 12x
                                        lessons</span>
                                    <span><button className="btn btn-primary btnstar"
                                        style={{ borderRadius: "10px", backgroundColor: "purple", paddingTop: "2px", paddingBottom: "2px" }}>4.9
                                        &nbsp;<i className="fa-solid fa-star" style={{ color: "/e0e411" }}></i></button></span>
                                </div>
                            </div>

                            <div className="card col-sm-3 cardradius">
                                <img className="card-img-top imageimage" style={{ borderRadius: "20px" }} src="booksimage.jpg"
                                    alt="Book-Wallpaper-27-1920-x-1080" />
                                <div className="card-body">
                                    <h4 className="card-title text-center cardheader">Creative Content</h4>
                                    <p className="card-text text-center cardtext">Creative Writing: Lorem ipsum dolor sit, amet consectetur
                                        adipisicing elit dhirel dgkuur kfkysosol lklukl rtweriuw.</p>
                                    <span className="btnlesson"><a href="/"><i className="fa-solid fa-circle-play fa-xl"
                                        style={{ color: "rgb(135, 30, 135)" }}></i></a> 12x
                                        lessons</span>
                                    <span><button className="btn btn-primary btnstar"
                                        style={{ borderRadius: "10px", backgroundColor: "purple", paddingTop: "2px", paddingBottom: "2px" }}>4.9&nbsp;<i
                                            className="fa-solid fa-star" style={{ color: "/e0e411" }}></i></button></span>
                                </div>
                            </div>

                            <div className="card col-sm-3 cardradius">
                                <img className="card-img-top imageimage" style={{ borderRadius: "20px" }} src="booksimage.jpg"
                                    alt="Book-Wallpaper-27-1920-x-1080" />
                                <div className="card-body">
                                    <h4 className="card-title text-center cardheader">Creative Content</h4>
                                    <p className="card-text text-center cardtext">Creative Writing: Lorem ipsum dolor sit, amet consectetur
                                        adipisicing elit dhirel dgkuur kfkysosol lklukl rtweriuw.</p>
                                    <span className="btnlesson"><a href="/"><i className="fa-solid fa-circle-play fa-xl"
                                        style={{ color: "rgb(135, 30, 135)" }}></i></a> 12x
                                        lessons</span>
                                    <span><button className="btn btn-primary btnstar"
                                        style={{ borderRadius: "10px", backgroundColor: "purple", paddingTop: "2px", paddingBottom: "2px" }}>4.9&nbsp;<i
                                            className="fa-solid fa-star" style={{ color: "/e0e411" }}></i></button></span>
                                </div>
                            </div>

                            <div className="card col-sm-3 cardradius">
                                <img className="card-img-top imageimage" style={{ borderRadius: "20px" }} src="booksimage.jpg"
                                    alt="Book-Wallpaper-27-1920-x-1080" />
                                <div className="card-body">
                                    <h4 className="card-title text-center cardheader">Creative Content</h4>
                                    <p className="card-text text-center cardtext">Creative Writing: Lorem ipsum dolor sit, amet consectetur
                                        adipisicing elit dhirel dgkuur kfkysosol lklukl rtweriuw.</p>
                                    <span className="btnlesson"><a href="/"><i className="fa-solid fa-circle-play fa-xl"
                                        style={{ color: "rgb(135, 30, 135)" }}></i></a> 12x
                                        lessons</span>
                                    <span><button className="btn btn-primary btnstar"
                                        style={{ borderRadius: "10px", backgroundColor: "purple", paddingTop: "2px", paddingBottom: "2px" }}>4.9&nbsp;<i
                                            className="fa-solid fa-star" style={{ color: "/e0e411" }}></i></button></span>
                                </div>
                            </div>
                        </div>


                        <div className="cards4">
                            <div className="card col-sm-3 cardradius">
                                <img className="card-img-top imageimage" style={{ borderRadius: "20px" }} src="booksimage.jpg"
                                    alt="Book-Wallpaper-27-1920-x-1080" />
                                <div className="card-body">
                                    <h4 className="card-title text-center cardheader">Creative Content</h4>
                                    <p className="card-text text-center cardtext">Creative Writing: Lorem ipsum dolor sit, amet consectetur
                                        adipisicing elit dhirel dgkuur kfkysosol lklukl rtweriuw.</p>
                                    <span className="btnlesson"><a href="/"><i className="fa-solid fa-circle-play fa-xl"
                                        style={{ color: "rgb(135, 30, 135)" }}></i></a> 12x
                                        lessons</span>
                                    <span><button className="btn btn-primary btnstar"
                                        style={{ borderRadius: "10px", backgroundColor: "purple", paddingTop: "2px", paddingBottom: "2px" }}>4.9&nbsp;<i
                                            className="fa-solid fa-star" style={{ color: "/e0e411" }}></i></button></span>
                                </div>
                            </div>

                            <div className="card col-sm-3 cardradius">
                                <img className="card-img-top imageimage" style={{ borderRadius: "20px" }} src="booksimage.jpg"
                                    alt="Book-Wallpaper-27-1920-x-1080" />
                                <div className="card-body">
                                    <h4 className="card-title text-center cardheader">Creative Content</h4>
                                    <p className="card-text text-center cardtext">Creative Writing: Lorem ipsum dolor sit, amet consectetur
                                        adipisicing elit dhirel dgkuur kfkysosol lklukl rtweriuw.</p>
                                    <span className="btnlesson"><a href="/"><i className="fa-solid fa-circle-play fa-xl"
                                        style={{ color: "rgb(135, 30, 135)" }}></i></a> 12x
                                        lessons</span>
                                    <span><button className="btn btn-primary btnstar"
                                        style={{ borderRadius: "10px", backgroundColor: "purple", paddingTop: "2px", paddingBottom: "2px" }}>4.9&nbsp;<i
                                            className="fa-solid fa-star" style={{ color: "/e0e411" }}></i></button></span>
                                </div>
                            </div>

                            <div className="card col-sm-3 cardradius">
                                <img className="card-img-top imageimage" style={{ borderRadius: "20px" }} src="booksimage.jpg"
                                    alt="Book-Wallpaper-27-1920-x-1080" />
                                <div className="card-body">
                                    <h4 className="card-title text-center cardheader">Creative Content</h4>
                                    <p className="card-text text-center cardtext">Creative Writing: Lorem ipsum dolor sit, amet consectetur
                                        adipisicing elit dhirel dgkuur kfkysosol lklukl rtweriuw.</p>
                                    <span className="btnlesson"><a href="/"><i className="fa-solid fa-circle-play fa-xl"
                                        style={{ color: "rgb(135, 30, 135)" }}></i></a> 12x
                                        lessons</span>
                                    <span><button className="btn btn-primary btnstar"
                                        style={{ borderRadius: "10px", backgroundColor: "purple", paddingTop: "2px", paddingBottom: "2px" }}>4.9&nbsp;<i
                                            className="fa-solid fa-star" style={{ color: "/e0e411" }}></i></button></span>
                                </div>
                            </div>

                            <div className="card col-sm-3 cardradius">
                                <img className="card-img-top imageimage" style={{ borderRadius: "20px" }} src="booksimage.jpg"
                                    alt="Book-Wallpaper-27-1920-x-1080" />
                                <div className="card-body">
                                    <h4 className="card-title text-center cardheader">Creative Content</h4>
                                    <p className="card-text text-center cardtext">Creative Writing: Lorem ipsum dolor sit, amet consectetur
                                        adipisicing elit dhirel dgkuur kfkysosol lklukl rtweriuw.</p>
                                    <span className="btnlesson"><a href="/"><i className="fa-solid fa-circle-play fa-xl"
                                        style={{ color: "rgb(135, 30, 135)" }}></i></a> 12x
                                        lessons</span>
                                    <span><button className="btn btn-primary btnstar"
                                        style={{ borderRadius: "10px", backgroundColor: "purple", paddingTop: "2px", paddingBottom: "2px" }}>4.9&nbsp;<i
                                            className="fa-solid fa-star" style={{ color: "/e0e411" }}></i></button></span>
                                </div>
                            </div>
                        </div>


                        <div className="cards4">
                            <div className="card col-sm-3 cardradius">
                                <img className="card-img-top imageimage" style={{ borderRadius: "20px" }} src="booksimage.jpg"
                                    alt="Book-Wallpaper-27-1920-x-1080" />
                                <div className="card-body">
                                    <h4 className="card-title text-center cardheader">Creative Content</h4>
                                    <p className="card-text text-center cardtext">Creative Writing: Lorem ipsum dolor sit, amet consectetur
                                        adipisicing elit dhirel dgkuur kfkysosol lklukl rtweriuw.</p>
                                    <span className="btnlesson"><a href="/"><i className="fa-solid fa-circle-play fa-xl"
                                        style={{ color: "rgb(135, 30, 135)" }}></i></a> 12x
                                        lessons</span>
                                    <span><button className="btn btn-primary btnstar"
                                        style={{ borderRadius: "10px", backgroundColor: "purple", paddingTop: "2px", paddingBottom: "2px" }}>4.9&nbsp;<i
                                            className="fa-solid fa-star" style={{ color: "/e0e411" }}></i></button></span>
                                </div>
                            </div>

                            <div className="card col-sm-3 cardradius">
                                <img className="card-img-top imageimage" style={{ borderRadius: "20px" }} src="booksimage.jpg"
                                    alt="Book-Wallpaper-27-1920-x-1080" />
                                <div className="card-body">
                                    <h4 className="card-title text-center cardheader">Creative Content</h4>
                                    <p className="card-text text-center cardtext">Creative Writing: Lorem ipsum dolor sit, amet consectetur
                                        adipisicing elit dhirel dgkuur kfkysosol lklukl rtweriuw.</p>
                                    <span className="btnlesson"><a href="/"><i className="fa-solid fa-circle-play fa-xl"
                                        style={{ color: "rgb(135, 30, 135)" }}></i></a> 12x
                                        lessons</span>
                                    <span><button className="btn btn-primary btnstar"
                                        style={{ borderRadius: "10px", backgroundColor: "purple", paddingTop: "2px", paddingBottom: "2px" }}>4.9&nbsp;<i
                                            className="fa-solid fa-star" style={{ color: "/e0e411" }}></i></button></span>
                                </div>
                            </div>

                            <div className="card col-sm-3 cardradius">
                                <img className="card-img-top imageimage" style={{ borderRadius: "20px" }} src="booksimage.jpg"
                                    alt="Book-Wallpaper-27-1920-x-1080" />
                                <div className="card-body">
                                    <h4 className="card-title text-center cardheader">Creative Content</h4>
                                    <p className="card-text text-center cardtext">Creative Writing: Lorem ipsum dolor sit, amet consectetur
                                        adipisicing elit dhirel dgkuur kfkysosol lklukl rtweriuw.</p>
                                    <span className="btnlesson"><a href="/"><i className="fa-solid fa-circle-play fa-xl"
                                        style={{ color: "rgb(135, 30, 135)" }}></i></a> 12x
                                        lessons</span>
                                    <span><button className="btn btn-primary btnstar"
                                        style={{ borderRadius: "10px", backgroundColor: "purple", paddingTop: "2px", paddingBottom: "2px" }}>4.9&nbsp;<i
                                            className="fa-solid fa-star" style={{ color: "/e0e411" }}></i></button></span>
                                </div>
                            </div>

                            <div className="card col-sm-3 cardradius">
                                <img className="card-img-top imageimage" style={{ borderRadius: "20px" }} src="booksimage.jpg"
                                    alt="Book-Wallpaper-27-1920-x-1080" />
                                <div className="card-body">
                                    <h4 className="card-title text-center cardheader">Creative Content</h4>
                                    <p className="card-text text-center cardtext">Creative Writing: Lorem ipsum dolor sit, amet consectetur
                                        adipisicing elit dhirel dgkuur kfkysosol lklukl rtweriuw.</p>
                                    <span className="btnlesson"><a href="/"><i className="fa-solid fa-circle-play fa-xl"
                                        style={{ color: "rgb(135, 30, 135)" }}></i></a> 12x
                                        lessons</span>
                                    <span><button className="btn btn-primary btnstar"
                                        style={{ borderRadius: "10px", backgroundColor: "purple", paddingTop: "2px", paddingBottom: "2px" }}>4.9&nbsp;<i
                                            className="fa-solid fa-star" style={{ color: "/e0e411" }}></i></button></span>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>
                <hr style={{ border: "1px solid gray", opacity: "0.5" }} />

                <br /><br /><br /><br /><br />
                <hr className="horizontal" />


                {/* <!-- This is page 4 --> */}
                <div className="row imagepage3">
                    <div className="col-sm-3 page3col2">
                        <p className="h1 training">Live Projects</p><br />
                        <div className="bg-image booksimages">
                            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />br /b
                            <br /><br />
                            <p className="h4 text-white helping">Helping Businesses succeed through the power of video.</p><br />
                            <button className="btn btn-primary p-2 viewall" style={{ backgroundColor: "purple" }}>View All &nbsp; <i
                                className="fa-solid fa-circle-arrow-right fa-lg"></i></button>
                        </div>
                    </div>

                    <div className="col-sm-7 mt-5 imagecard"><br />
                        <div className="cards4">
                            <div className="card col-sm-3 cardradius">
                                <img className="card-img-top imageimage" style={{ borderRadius: "20px" }} src="booksimage.jpg"
                                    alt="Book-Wallpaper-27-1920-x-1080" />
                                <div className="card-body">
                                    <h4 className="card-title text-center cardheader">Creative Content</h4>
                                    <p className="card-text text-center cardtext">Creative Writing: Lorem ipsum dolor sit, amet consectetur
                                        adipisicing elit dhirel dgkuur kfkysosol lklukl rtweriuw.</p>
                                    <span className="btnlesson"><a href="/"><i className="fa-solid fa-circle-play fa-xl"
                                        style={{ color: "rgb(135, 30, 135)" }}></i></a> 12x
                                        lessons</span>
                                    <span><button className="btn btn-primary btnstar"
                                        style={{ borderRadius: "10px", backgroundColor: "purple", paddingTop: "2px", paddingBottom: "2px" }}>4.9&nbsp;<i
                                            className="fa-solid fa-star" style={{ color: "/e0e411" }}></i></button></span>
                                </div>
                            </div>

                            <div className="card col-sm-3 cardradius">
                                <img className="card-img-top imageimage" style={{ borderRadius: "20px" }} src="booksimage.jpg"
                                    alt="Book-Wallpaper-27-1920-x-1080" />
                                <div className="card-body">
                                    <h4 className="card-title text-center cardheader">Creative Content</h4>
                                    <p className="card-text text-center cardtext">Creative Writing: Lorem ipsum dolor sit, amet consectetur
                                        adipisicing elit dhirel dgkuur kfkysosol lklukl rtweriuw.</p>
                                    <span className="btnlesson"><a href="/"><i className="fa-solid fa-circle-play fa-xl"
                                        style={{ color: "rgb(135, 30, 135)" }}></i></a> 12x
                                        lessons</span>
                                    <span><button className="btn btn-primary btnstar"
                                        style={{ borderRadius: "10px", backgroundColor: "purple", paddingTop: "2px", paddingBottom: "2px" }}>4.9&nbsp;<i
                                            className="fa-solid fa-star" style={{ color: "/e0e411" }}></i></button></span>
                                </div>
                            </div>

                            <div className="card col-sm-3 cardradius">
                                <img className="card-img-top imageimage" style={{ borderRadius: "20px" }} src="booksimage.jpg"
                                    alt="Book-Wallpaper-27-1920-x-1080" />
                                <div className="card-body">
                                    <h4 className="card-title text-center cardheader">Creative Content</h4>
                                    <p className="card-text text-center cardtext">Creative Writing: Lorem ipsum dolor sit, amet consectetur
                                        adipisicing elit dhirel dgkuur kfkysosol lklukl rtweriuw.</p>
                                    <span className="btnlesson"><a href="/"><i className="fa-solid fa-circle-play fa-xl"
                                        style={{ color: "rgb(135, 30, 135)" }}></i></a> 12x
                                        lessons</span>
                                    <span><button className="btn btn-primary btnstar"
                                        style={{ borderRadius: "10px", backgroundColor: "purple", paddingTop: "2px", paddingBottom: "2px" }}>4.9&nbsp;<i
                                            className="fa-solid fa-star" style={{ color: "/e0e411" }}></i></button></span>
                                </div>
                            </div>

                            <div className="card col-sm-3 cardradius">
                                <img className="card-img-top imageimage" style={{ borderRadius: "20px" }} src="booksimage.jpg"
                                    alt="Book-Wallpaper-27-1920-x-1080" />
                                <div className="card-body">
                                    <h4 className="card-title text-center cardheader">Creative Content</h4>
                                    <p className="card-text text-center cardtext">Creative Writing: Lorem ipsum dolor sit, amet consectetur
                                        adipisicing elit dhirel dgkuur kfkysosol lklukl rtweriuw.</p>
                                    <span className="btnlesson"><a href="/"><i className="fa-solid fa-circle-play fa-xl"
                                        style={{ color: "rgb(135, 30, 135)" }}></i></a> 12x
                                        lessons</span>
                                    <span><button className="btn btn-primary btnstar"
                                        style={{ borderRadius: "10px", backgroundColor: "purple", paddingTop: "2px", paddingBottom: "2px" }}>4.9&nbsp;<i
                                            className="fa-solid fa-star" style={{ color: "/e0e411" }}></i></button></span>
                                </div>
                            </div>
                        </div>


                        <div className="cards4">
                            <div className="card col-sm-3 cardradius">
                                <img className="card-img-top imageimage" style={{ borderRadius: "20px" }} src="booksimage.jpg"
                                    alt="Book-Wallpaper-27-1920-x-1080" />
                                <div className="card-body">
                                    <h4 className="card-title text-center cardheader">Creative Content</h4>
                                    <p className="card-text text-center cardtext">Creative Writing: Lorem ipsum dolor sit, amet consectetur
                                        adipisicing elit dhirel dgkuur kfkysosol lklukl rtweriuw.</p>
                                    <span className="btnlesson"><a href="/"><i className="fa-solid fa-circle-play fa-xl"
                                        style={{ color: "rgb(135, 30, 135)" }}></i></a> 12x
                                        lessons</span>
                                    <span><button className="btn btn-primary btnstar"
                                        style={{ borderRadius: "10px", backgroundColor: "purple", paddingTop: "2px", paddingBottom: "2px" }}>4.9&nbsp;<i
                                            className="fa-solid fa-star" style={{ color: "/e0e411" }}></i></button></span>
                                </div>
                            </div>

                            <div className="card col-sm-3 cardradius">
                                <img className="card-img-top imageimage" style={{ borderRadius: "20px" }} src="booksimage.jpg"
                                    alt="Book-Wallpaper-27-1920-x-1080" />
                                <div className="card-body">
                                    <h4 className="card-title text-center cardheader">Creative Content</h4>
                                    <p className="card-text text-center cardtext">Creative Writing: Lorem ipsum dolor sit, amet consectetur
                                        adipisicing elit dhirel dgkuur kfkysosol lklukl rtweriuw.</p>
                                    <span className="btnlesson"><a href="/"><i className="fa-solid fa-circle-play fa-xl"
                                        style={{ color: "rgb(135, 30, 135)" }}></i></a> 12x
                                        lessons</span>
                                    <span><button className="btn btn-primary btnstar"
                                        style={{ borderRadius: "10px", backgroundColor: "purple", paddingTop: "2px", paddingBottom: "2px" }}>4.9&nbsp;<i
                                            className="fa-solid fa-star" style={{ color: "/e0e411" }}></i></button></span>
                                </div>
                            </div>

                            <div className="card col-sm-3 cardradius">
                                <img className="card-img-top imageimage" style={{ borderRadius: "20px" }} src="booksimage.jpg"
                                    alt="Book-Wallpaper-27-1920-x-1080" />
                                <div className="card-body">
                                    <h4 className="card-title text-center cardheader">Creative Content</h4>
                                    <p className="card-text text-center cardtext">Creative Writing: Lorem ipsum dolor sit, amet consectetur
                                        adipisicing elit dhirel dgkuur kfkysosol lklukl rtweriuw.</p>
                                    <span className="btnlesson"><a href="/"><i className="fa-solid fa-circle-play fa-xl"
                                        style={{ color: "rgb(135, 30, 135)" }}></i></a> 12x
                                        lessons</span>
                                    <span><button className="btn btn-primary btnstar"
                                        style={{ borderRadius: "10px", backgroundColor: "purple", paddingTop: "2px", paddingBottom: "2px" }}>4.9&nbsp;<i
                                            className="fa-solid fa-star" style={{ color: "/e0e411" }}></i></button></span>
                                </div>
                            </div>

                            <div className="card col-sm-3 cardradius">
                                <img className="card-img-top imageimage" style={{ borderRadius: "20px" }} src="booksimage.jpg"
                                    alt="Book-Wallpaper-27-1920-x-1080" />
                                <div className="card-body">
                                    <h4 className="card-title text-center cardheader">Creative Content</h4>
                                    <p className="card-text text-center cardtext">Creative Writing: Lorem ipsum dolor sit, amet consectetur
                                        adipisicing elit dhirel dgkuur kfkysosol lklukl rtweriuw.</p>
                                    <span className="btnlesson"><a href="/"><i className="fa-solid fa-circle-play fa-xl"
                                        style={{ color: "rgb(135, 30, 135)" }}></i></a> 12x
                                        lessons</span>
                                    <span><button className="btn btn-primary btnstar"
                                        style={{ borderRadius: "10px", backgroundColor: "purple", paddingTop: "2px", paddingBottom: "2px" }}>4.9&nbsp;<i
                                            className="fa-solid fa-star" style={{ color: "/e0e411" }}></i></button></span>
                                </div>
                            </div>
                        </div>


                        <div className="cards4">
                            <div className="card col-sm-3 cardradius">
                                <img className="card-img-top imageimage" style={{ borderRadius: "20px" }} src="booksimage.jpg"
                                    alt="Book-Wallpaper-27-1920-x-1080" />
                                <div className="card-body">
                                    <h4 className="card-title text-center cardheader">Creative Content</h4>
                                    <p className="card-text text-center cardtext">Creative Writing: Lorem ipsum dolor sit, amet consectetur
                                        adipisicing elit dhirel dgkuur kfkysosol lklukl rtweriuw.</p>
                                    <span className="btnlesson"><a href="/"><i className="fa-solid fa-circle-play fa-xl"
                                        style={{ color: "rgb(135, 30, 135)" }}></i></a> 12x
                                        lessons</span>
                                    <span><button className="btn btn-primary btnstar"
                                        style={{ borderRadius: "10px", backgroundColor: "purple", paddingTop: "2px", paddingBottom: "2px" }}>4.9&nbsp;<i
                                            className="fa-solid fa-star" style={{ color: "/e0e411" }}></i></button></span>
                                </div>
                            </div>

                            <div className="card col-sm-3 cardradius">
                                <img className="card-img-top imageimage" style={{ borderRadius: "20px" }} src="booksimage.jpg"
                                    alt="Book-Wallpaper-27-1920-x-1080" />
                                <div className="card-body">
                                    <h4 className="card-title text-center cardheader">Creative Content</h4>
                                    <p className="card-text text-center cardtext">Creative Writing: Lorem ipsum dolor sit, amet consectetur
                                        adipisicing elit dhirel dgkuur kfkysosol lklukl rtweriuw.</p>
                                    <span className="btnlesson"><a href="/"><i className="fa-solid fa-circle-play fa-xl"
                                        style={{ color: "rgb(135, 30, 135)" }}></i></a> 12x
                                        lessons</span>
                                    <span><button className="btn btn-primary btnstar"
                                        style={{ borderRadius: "10px", backgroundColor: "purple", paddingTop: "2px", paddingBottom: "2px" }}>4.9&nbsp;<i
                                            className="fa-solid fa-star" style={{ color: "/e0e411" }}></i></button></span>
                                </div>
                            </div>

                            <div className="card col-sm-3 cardradius">
                                <img className="card-img-top imageimage" style={{ borderRadius: "20px" }} src="booksimage.jpg"
                                    alt="Book-Wallpaper-27-1920-x-1080" />
                                <div className="card-body">
                                    <h4 className="card-title text-center cardheader">Creative Content</h4>
                                    <p className="card-text text-center cardtext">Creative Writing: Lorem ipsum dolor sit, amet consectetur
                                        adipisicing elit dhirel dgkuur kfkysosol lklukl rtweriuw.</p>
                                    <span className="btnlesson"><a href="/"><i className="fa-solid fa-circle-play fa-xl"
                                        style={{ color: "rgb(135, 30, 135)" }}></i></a> 12x
                                        lessons</span>
                                    <span><button className="btn btn-primary btnstar"
                                        style={{ borderRadius: "10px", backgroundColor: "purple", paddingTop: "2px", paddingBottom: "2px" }}>4.9&nbsp;<i
                                            className="fa-solid fa-star" style={{ color: "/e0e411" }}></i></button></span>
                                </div>
                            </div>

                            <div className="card col-sm-3 cardradius">
                                <img className="card-img-top imageimage" style={{ borderRadius: "20px" }} src="booksimage.jpg"
                                    alt="Book-Wallpaper-27-1920-x-1080" />
                                <div className="card-body">
                                    <h4 className="card-title text-center cardheader">Creative Content</h4>
                                    <p className="card-text text-center cardtext">Creative Writing: Lorem ipsum dolor sit, amet consectetur
                                        adipisicing elit dhirel dgkuur kfkysosol lklukl rtweriuw.</p>
                                    <span className="btnlesson"><a href="/"><i className="fa-solid fa-circle-play fa-xl"
                                        style={{ color: "rgb(135, 30, 135)" }}></i></a> 12x
                                        lessons</span>
                                    <span><button className="btn btn-primary btnstar"
                                        style={{ borderRadius: "10px", backgroundColor: "purple", paddingTop: "2px", paddingBottom: "2px" }}>4.9&nbsp;<i
                                            className="fa-solid fa-star" style={{ color: "/e0e411" }}></i></button></span>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>
                <hr style={{ border: "1px solid gray", opacity: "0.5" }} />

                <br /><br /><br /><br /><br />
                <hr className="horizontal" />


                {/* <!-- This is page 5. --> */}
                <div className="row imagepage3">
                    <div className="col-sm-3 page3col2">
                        <p className="h1 training">Placement</p><br />
                        <div className="bg-image booksimages">
                            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />br /b
                            <br /><br />
                            <p className="h4 text-white helping">Helping Businesses succeed through the power of video.</p><br />
                            <button className="btn btn-primary p-2 viewall" style={{ backgroundColor: "purple" }}>View All &nbsp; <i
                                className="fa-solid fa-circle-arrow-right fa-lg"></i></button>
                        </div>
                    </div>

                    <div className="col-sm-7 mt-5 imagecard"><br />
                        <div className="cards4">
                            <div className="card col-sm-3 cardradius">
                                <img className="card-img-top imageimage" style={{ borderRadius: "20px" }} src="booksimage.jpg"
                                    alt="Book-Wallpaper-27-1920-x-1080" />
                                <div className="card-body">
                                    <h4 className="card-title text-center cardheader">Creative Content</h4>
                                    <p className="card-text text-center cardtext">Creative Writing: Lorem ipsum dolor sit, amet consectetur
                                        adipisicing elit dhirel dgkuur kfkysosol lklukl rtweriuw.</p>
                                    <span className="btnlesson"><a href="/"><i className="fa-solid fa-circle-play fa-xl"
                                        style={{ color: "rgb(135, 30, 135)" }}></i></a> 12x
                                        lessons</span>
                                    <span><button className="btn btn-primary btnstar"
                                        style={{ borderRadius: "10px", backgroundColor: "purple", paddingTop: "2px", paddingBottom: "2px" }}>4.9&nbsp;<i
                                            className="fa-solid fa-star" style={{ color: "/e0e411" }}></i></button></span>
                                </div>
                            </div>

                            <div className="card col-sm-3 cardradius">
                                <img className="card-img-top imageimage" style={{ borderRadius: "20px" }} src="booksimage.jpg"
                                    alt="Book-Wallpaper-27-1920-x-1080" />
                                <div className="card-body">
                                    <h4 className="card-title text-center cardheader">Creative Content</h4>
                                    <p className="card-text text-center cardtext">Creative Writing: Lorem ipsum dolor sit, amet consectetur
                                        adipisicing elit dhirel dgkuur kfkysosol lklukl rtweriuw.</p>
                                    <span className="btnlesson"><a href="/"><i className="fa-solid fa-circle-play fa-xl"
                                        style={{ color: "rgb(135, 30, 135)" }}></i></a> 12x
                                        lessons</span>
                                    <span><button className="btn btn-primary btnstar"
                                        style={{ borderRadius: "10px", backgroundColor: "purple", paddingTop: "2px", paddingBottom: "2px" }}>4.9&nbsp;<i
                                            className="fa-solid fa-star" style={{ color: "/e0e411" }}></i></button></span>
                                </div>
                            </div>

                            <div className="card col-sm-3 cardradius">
                                <img className="card-img-top imageimage" style={{ borderRadius: "20px" }} src="booksimage.jpg"
                                    alt="Book-Wallpaper-27-1920-x-1080" />
                                <div className="card-body">
                                    <h4 className="card-title text-center cardheader">Creative Content</h4>
                                    <p className="card-text text-center cardtext">Creative Writing: Lorem ipsum dolor sit, amet consectetur
                                        adipisicing elit dhirel dgkuur kfkysosol lklukl rtweriuw.</p>
                                    <span className="btnlesson"><a href="/"><i className="fa-solid fa-circle-play fa-xl"
                                        style={{ color: "rgb(135, 30, 135)" }}></i></a> 12x
                                        lessons</span>
                                    <span><button className="btn btn-primary btnstar"
                                        style={{ borderRadius: "10px", backgroundColor: "purple", paddingTop: "2px", paddingBottom: "2px" }}>4.9&nbsp;<i
                                            className="fa-solid fa-star" style={{ color: "/e0e411" }}></i></button></span>
                                </div>
                            </div>

                            <div className="card col-sm-3 cardradius">
                                <img className="card-img-top imageimage" style={{ borderRadius: "20px" }} src="booksimage.jpg"
                                    alt="Book-Wallpaper-27-1920-x-1080" />
                                <div className="card-body">
                                    <h4 className="card-title text-center cardheader">Creative Content</h4>
                                    <p className="card-text text-center cardtext">Creative Writing: Lorem ipsum dolor sit, amet consectetur
                                        adipisicing elit dhirel dgkuur kfkysosol lklukl rtweriuw.</p>
                                    <span className="btnlesson"><a href="/"><i className="fa-solid fa-circle-play fa-xl"
                                        style={{ color: "rgb(135, 30, 135)" }}></i></a> 12x
                                        lessons</span>
                                    <span><button className="btn btn-primary btnstar"
                                        style={{ borderRadius: "10px", backgroundColor: "purple", paddingTop: "2px", paddingBottom: "2px" }}>4.9&nbsp;<i
                                            className="fa-solid fa-star" style={{ color: "/e0e411" }}></i></button></span>
                                </div>
                            </div>
                        </div>


                        <div className="cards4">
                            <div className="card col-sm-3 cardradius">
                                <img className="card-img-top imageimage" style={{ borderRadius: "20px" }} src="booksimage.jpg"
                                    alt="Book-Wallpaper-27-1920-x-1080" />
                                <div className="card-body">
                                    <h4 className="card-title text-center cardheader">Creative Content</h4>
                                    <p className="card-text text-center cardtext">Creative Writing: Lorem ipsum dolor sit, amet consectetur
                                        adipisicing elit dhirel dgkuur kfkysosol lklukl rtweriuw.</p>
                                    <span className="btnlesson"><a href="/"><i className="fa-solid fa-circle-play fa-xl"
                                        style={{ color: "rgb(135, 30, 135)" }}></i></a> 12x
                                        lessons</span>
                                    <span><button className="btn btn-primary btnstar"
                                        style={{ borderRadius: "10px", backgroundColor: "purple", paddingTop: "2px", paddingBottom: "2px" }}>4.9&nbsp;<i
                                            className="fa-solid fa-star" style={{ color: "/e0e411" }}></i></button></span>
                                </div>
                            </div>

                            <div className="card col-sm-3 cardradius">
                                <img className="card-img-top imageimage" style={{ borderRadius: "20px" }} src="booksimage.jpg"
                                    alt="Book-Wallpaper-27-1920-x-1080" />
                                <div className="card-body">
                                    <h4 className="card-title text-center cardheader">Creative Content</h4>
                                    <p className="card-text text-center cardtext">Creative Writing: Lorem ipsum dolor sit, amet consectetur
                                        adipisicing elit dhirel dgkuur kfkysosol lklukl rtweriuw.</p>
                                    <span className="btnlesson"><a href="/"><i className="fa-solid fa-circle-play fa-xl"
                                        style={{ color: "rgb(135, 30, 135)" }}></i></a> 12x
                                        lessons</span>
                                    <span><button className="btn btn-primary btnstar"
                                        style={{ borderRadius: "10px", backgroundColor: "purple", paddingTop: "2px", paddingBottom: "2px" }}>4.9&nbsp;<i
                                            className="fa-solid fa-star" style={{ color: "/e0e411" }}></i></button></span>
                                </div>
                            </div>

                            <div className="card col-sm-3 cardradius">
                                <img className="card-img-top imageimage" style={{ borderRadius: "20px" }} src="booksimage.jpg"
                                    alt="Book-Wallpaper-27-1920-x-1080" />
                                <div className="card-body">
                                    <h4 className="card-title text-center cardheader">Creative Content</h4>
                                    <p className="card-text text-center cardtext">Creative Writing: Lorem ipsum dolor sit, amet consectetur
                                        adipisicing elit dhirel dgkuur kfkysosol lklukl rtweriuw.</p>
                                    <span className="btnlesson"><a href="/"><i className="fa-solid fa-circle-play fa-xl"
                                        style={{ color: "rgb(135, 30, 135)" }}></i></a> 12x
                                        lessons</span>
                                    <span><button className="btn btn-primary btnstar"
                                        style={{ borderRadius: "10px", backgroundColor: "purple", paddingTop: "2px", paddingBottom: "2px" }}>4.9&nbsp;<i
                                            className="fa-solid fa-star" style={{ color: "/e0e411" }}></i></button></span>
                                </div>
                            </div>

                            <div className="card col-sm-3 cardradius">
                                <img className="card-img-top imageimage" style={{ borderRadius: "20px" }} src="booksimage.jpg"
                                    alt="Book-Wallpaper-27-1920-x-1080" />
                                <div className="card-body">
                                    <h4 className="card-title text-center cardheader">Creative Content</h4>
                                    <p className="card-text text-center cardtext">Creative Writing: Lorem ipsum dolor sit, amet consectetur
                                        adipisicing elit dhirel dgkuur kfkysosol lklukl rtweriuw.</p>
                                    <span className="btnlesson"><a href="/"><i className="fa-solid fa-circle-play fa-xl"
                                        style={{ color: "rgb(135, 30, 135)" }}></i></a> 12x
                                        lessons</span>
                                    <span><button className="btn btn-primary btnstar"
                                        style={{ borderRadius: "10px", backgroundColor: "purple", paddingTop: "2px", paddingBottom: "2px" }}>4.9&nbsp;<i
                                            className="fa-solid fa-star" style={{ color: "/e0e411" }}></i></button></span>
                                </div>
                            </div>
                        </div>


                        <div className="cards4">
                            <div className="card col-sm-3 cardradius">
                                <img className="card-img-top imageimage" style={{ borderRadius: "20px" }} src="booksimage.jpg"
                                    alt="Book-Wallpaper-27-1920-x-1080" />
                                <div className="card-body">
                                    <h4 className="card-title text-center cardheader">Creative Content</h4>
                                    <p className="card-text text-center cardtext">Creative Writing: Lorem ipsum dolor sit, amet consectetur
                                        adipisicing elit dhirel dgkuur kfkysosol lklukl rtweriuw.</p>
                                    <span className="btnlesson"><a href="/"><i className="fa-solid fa-circle-play fa-xl"
                                        style={{ color: "rgb(135, 30, 135)" }}></i></a> 12x
                                        lessons</span>
                                    <span><button className="btn btn-primary btnstar"
                                        style={{ borderRadius: "10px", backgroundColor: "purple", paddingTop: "2px", paddingBottom: "2px" }}>4.9&nbsp;<i
                                            className="fa-solid fa-star" style={{ color: "/e0e411" }}></i></button></span>
                                </div>
                            </div>

                            <div className="card col-sm-3 cardradius">
                                <img className="card-img-top imageimage" style={{ borderRadius: "20px" }} src="booksimage.jpg"
                                    alt="Book-Wallpaper-27-1920-x-1080" />
                                <div className="card-body">
                                    <h4 className="card-title text-center cardheader">Creative Content</h4>
                                    <p className="card-text text-center cardtext">Creative Writing: Lorem ipsum dolor sit, amet consectetur
                                        adipisicing elit dhirel dgkuur kfkysosol lklukl rtweriuw.</p>
                                    <span className="btnlesson"><a href="/"><i className="fa-solid fa-circle-play fa-xl"
                                        style={{ color: "rgb(135, 30, 135)" }}></i></a> 12x
                                        lessons</span>
                                    <span><button className="btn btn-primary btnstar"
                                        style={{ borderRadius: "10px", backgroundColor: "purple", paddingTop: "2px", paddingBottom: "2px" }}>4.9&nbsp;<i
                                            className="fa-solid fa-star" style={{ color: "/e0e411" }}></i></button></span>
                                </div>
                            </div>

                            <div className="card col-sm-3 cardradius">
                                <img className="card-img-top imageimage" style={{ borderRadius: "20px" }} src="booksimage.jpg"
                                    alt="Book-Wallpaper-27-1920-x-1080" />
                                <div className="card-body">
                                    <h4 className="card-title text-center cardheader">Creative Content</h4>
                                    <p className="card-text text-center cardtext">Creative Writing: Lorem ipsum dolor sit, amet consectetur
                                        adipisicing elit dhirel dgkuur kfkysosol lklukl rtweriuw.</p>
                                    <span className="btnlesson"><a href="/"><i className="fa-solid fa-circle-play fa-xl"
                                        style={{ color: "rgb(135, 30, 135)" }}></i></a> 12x
                                        lessons</span>
                                    <span><button className="btn btn-primary btnstar"
                                        style={{ borderRadius: "10px", backgroundColor: "purple", paddingTop: "2px", paddingBottom: "2px" }}>4.9&nbsp;<i
                                            className="fa-solid fa-star" style={{ color: "/e0e411" }}></i></button></span>
                                </div>
                            </div>

                            <div className="card col-sm-3 cardradius">
                                <img className="card-img-top imageimage" style={{ borderRadius: "20px" }} src="booksimage.jpg"
                                    alt="Book-Wallpaper-27-1920-x-1080" />
                                <div className="card-body">
                                    <h4 className="card-title text-center cardheader">Creative Content</h4>
                                    <p className="card-text text-center cardtext">Creative Writing: Lorem ipsum dolor sit, amet consectetur
                                        adipisicing elit dhirel dgkuur kfkysosol lklukl rtweriuw.</p>
                                    <span className="btnlesson"><a href="/"><i className="fa-solid fa-circle-play fa-xl"
                                        style={{ color: "rgb(135, 30, 135)" }}></i></a> 12x
                                        lessons</span>
                                    <span><button className="btn btn-primary btnstar"
                                        style={{ borderRadius: "10px", backgroundColor: "purple", paddingTop: "2px", paddingBottom: "2px" }}>4.9&nbsp;<i
                                            className="fa-solid fa-star" style={{ color: "/e0e411" }}></i></button></span>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>
                <hr style={{ border: "1px solid gray", opacity: "0.5" }} />

                <br /><br /><br /><br /><br /><br /><br />


                {/* <!-- This is page 6. --> */}
                <div className="page6">
                    <p className="h1 text-center why" style={{ fontWeight: "bold" }}>Why Choose us ?</p><br />

                    <div className="col-sm-10 pngimage">

                        <div className="pngimage1">
                            <img style={{ width: "100%", height: "300px" }} src="laptop-removebg-preview.png" alt="laptop" /><br /><br />
                            <p className="h6 text-center">Creative Writing: Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit dhirel dgkuur kfkysosol lklukl rtweriuw.</p><br />
                        </div>

                        <div className="pngimage1">
                            <img style={{ width: "100%", height: "300px" }} src="group_chat-removebg-preview.png"
                                alt="group_chat-removebg-preview" /><br /><br />
                            <p className="h6 text-center">Creative Writing: Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit dhirel dgkuur kfkysosol lklukl rtweriuw.</p><br />
                        </div>

                        <div className="pngimage1">
                            <img style={{ width: "100%", height: "300px" }} src="appointment-icon-png-17-removebg-preview.png"
                                alt="appointment-icon-png-17-removebg-preview" /><br /><br />
                            <p className="h6 text-center">Creative Writing: Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit dhirel dgkuur kfkysosol lklukl rtweriuw.</p><br />
                        </div>
                    </div>

                </div><br /><br /><br /><br /><br /><br /><br /><br />


                {/* <!-- This is page 7. --> */}
                <div className="row">
                    <div className="col-sm-4 p-5 page7col1">
                        <p className="h1 trust1" style={{ fontSize: "45px" }}>Trust your future &</p>
                        <p className="h1 peaceful" style={{ fontWeight: "1000", fontSize: "45px" }}>Peaceful Life</p><br />
                        <p className="h6 lorem2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum ab autem voluptate animi
                            veritatis
                            nesciunt molestias! Consequuntur ducimus reprehenderit ipsam. Et iusto aliquid vitae dolorum incidunt in
                            soluta labore dolor.</p><br />
                        <button className="btn btn-outline-primary clickhere" style={{ color: "purple", borderColor: "purple" }}>Click Here to
                            Apply &nbsp; <i className="fa-solid fa-circle-arrow-right fa-lg"></i></button>
                    </div>

                    <div className="col-sm-7 page7col2"><br />
                        <img src="meeting-1015591_1280.webp" alt="Meeting-Spaces-Hero" className="img-thumbnail meeting"
                            style={{ borderBottomLeftRadius: "30%", borderTopRightRadius: "30%", width: "92%", height: "70%", border: "10px solid purple" }} />
                    </div>

                </div><br /><br /><br /><br />


                {/* <!-- This is a page 8. --> */}
                <div>
                    <p className="h1 text-center student" style={{ fontSize: "45px", fontWeight: "bold" }}>Student Testimonial</p><br />
                    <p className="h6 text-center ispum">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ullam maxime
                        ex saepe possimus
                        illo quo deserunt enim! Consequuntur impedit voluptate aperiam esse.</p>

                    <img className="rounded-circle image11" src="laptop-removebg-preview.png" alt="laptop-removebg-preview" />

                    <img className="rounded-circle image12" src="group_chat-removebg-preview.png" alt="laptop-removebg-preview" />

                    <fieldset className="field">
                        <p className="h6 text-center dolor">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, quae
                            nesciunt non porro ullam
                            maiores sit facilis esse dolor fugiat sapiente earum quaerat unde qui suscipit ipsa perferendis similique
                            quibusdam. <br /><br /> <b style={{ float: "right", fontSize: "20px" }}>-Ganesh Patel</b></p>
                    </fieldset>

                    <img className="rounded-circle image13" src="booksimage.jpg" alt="laptop-removebg-preview" />

                    <img className="rounded-circle image14" src="appointment-icon-png-17-removebg-preview.png"
                        alt="laptop-removebg-preview" />

                    <img className="rounded-circle image15" src="Book-Wallpaper-27-1920-x-1080.jpg" alt="laptop-removebg-preview" />

                    <img className="rounded-circle image16" src="meeting-1015591_1280.webp" alt="laptop-removebg-preview" />

                    <img className="rounded-circle image17" src="Addressing-the-Challenges-of-Young-Adults-5-scaled.jpg"
                        alt="laptop-removebg-preview" />

                </div><br /><br />


                {/* <!-- This is page 9. --> */}
                <div className="bg-image footer"><br /><br /><br /><br /><br /><br /><br />
                    <fieldset className="field2"><br />
                        <form action="/" className="was-validated">
                            <p className="h1 text-center" style={{ color: "orangered", fontWeight: "600" }}>Get Started</p>
                            <p className="h6 text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste corrupti natus
                                laudantium molestias
                                labore ratione voluptatem vel accusamu.</p>

                            <div className="mb-3">
                                <label for="name" className="form-label"></label>
                                <input type="text" className="form-control text-center" name="name" id="name" placeholder="Full Name" required />
                                <div className="valid-feedback">Valid.</div>
                                <div className="invalid-feedback please">Please fill out this form.</div>
                            </div>

                            <div className="mb-3">
                                <label for="email" className="form-label"></label>
                                <input type="email" className="form-control text-center" name="email" id="email" placeholder="E-Mail" required />
                                <div className="valid-feedback">Valid.</div>
                                <div className="invalid-feedback please">Please fill out this form.</div>
                            </div>

                            <button type="submit" className="btn btn-primary text-white mt-3" id="sub">SUBMIT &nbsp; <i
                                className="fa-solid fa-circle-arrow-right fa-lg"></i></button><br /><br /><br />

                        </form>
                    </fieldset><br /><br /><br /><br /><br />
                </div>
            </div>
        );
    }
}
export default Home;