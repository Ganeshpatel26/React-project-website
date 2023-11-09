import React, { Component } from 'react'

class ContactUs extends Component {
    render() {
        return (
            <>
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
            </>
        );
    }
}
export default ContactUs;
