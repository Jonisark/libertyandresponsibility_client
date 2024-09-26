import '../css/footer.css';

export default function Footer() {
    return (
        < div className="footer" >
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-contact">
                            <h2>Contact Us</h2>
                            <a href="https://goo.gl/maps/nRohejahAe3wa929A" target="_blank" rel="noopener noreferrer"><p><i className="fa fa-map-marker-alt"></i>Krinshnagar, nadia</p></a>
                            <a href="tel:+91-7385223242"><p><i className="fa fa-phone"></i>+918918933465</p></a>
                            <a href="libertyandresponsibilityws@gmail.com"><p><i className="fa fa-envelope"></i>libertyandresponsibilityws@gmail.com</p></a>
                            <div className="footer-social">
                                {/* <a className="btn btn-custom" href="https://twitter.com/vit_socials"><i className="fab fa-x-twitter"></i></a> */}
                                <a className="btn btn-custom" href="https://www.facebook.com/vitsocials"><i className="fab fa-facebook-f"></i></a>
                                {/* <a className="btn btn-custom" href="https://www.instagram.com/vitsocials/"><i className="fab fa-instagram"></i></a> */}
                                {/* <a className="btn btn-custom" href="https://www.youtube.com/channel/UCJnaNm8Ns08rUIhsdFM2fhA"><i className="fab fa-youtube"></i></a> */}
                                {/* <a className="btn btn-custom" href="https://www.linkedin.com/company/vit-social-welfare-development/"><i className="fab fa-linkedin-in"></i></a> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-link">
                            <h2>Popular Links</h2>
                            <a href="/about">About Us</a>
                            <a href="/contact">Contact Us</a>
                            <a href="/event">Popular Causes</a>
                            <a href="/event">Upcoming Events</a>
                            <a href="#">Latest Blog</a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        
                    </div>
                    
                </div>
            </div>
            <div className="container copyright">
                <div className="row">
                    <div className="col-md-6">
                        <p>&copy; <a href="#">Liberty and Responsibility</a> | 2024, All Right Reserved.</p>
                    </div>
                    <div className="col-md-6">
                        <p>Designed By <a href="https://www.linkedin.com/in/joni-sarkar-917457320?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">JONI SARKAR, krishnanagar</a></p>
                    </div>
                </div>
            </div>
        </ div>
    );
}