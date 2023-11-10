
import '../landing.css';
import { Link } from 'react-router-dom';


const LandingPage = () => {
    
    return (
        <div className='body'>
            {/* Header */}
            <header className="header">
                <div className="container flex">
                    <div className="text">
                        <h1 className="mb">
                            Complete Daily <br />
                            <span>Workout</span> At Home
                        </h1>

                        <p className="mb">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
                            sunt sed tempora neque molestiae corrupti nobis harum ullam eos nam!
                        </p>

                        <Link to="#" className="btn mt">Get Started Now</Link>
                    </div>

                    <div className="visual">
                        <img
                            src="https://raw.githubusercontent.com/programmercloud/pgc-gym/main/img/banner-img.png"
                            alt=""
                        />
                    </div>
                </div>
            </header>
            {/* End Header */}

            {/* Rest of your content sections (Why Us, Explore, Trainer, Testimonial, Discount) */}
            {/* <!-- Why Us --> */}
            <div className="section" id="why-us">
                    <div className="container flex">
                        <div className="text">
                        <h2 className="primary mb">Why Choose Us?</h2>
                        <h3 className="secondary mb">Consulatation with Expert.</h3>
                        <p className="tertiary">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias quos
                            maxime tempore?
                        </p>

                        <h3 className="secondary mb">Consulatation with Expert.</h3>
                        <p className="tertiary">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias quos
                            maxime tempore?
                        </p>
                        </div>
                        <div className="visual">
                        <img
                            src="https://raw.githubusercontent.com/programmercloud/pgc-gym/main/img/why-us.png"
                            alt=""
                        />
                        </div>
                    </div>
                </div>
                {/* <!-- End Why Us --> */}
                {/* <!-- Explore --> */}
                <div className="section" id="explore">
                    <div className="container flex">
                        <div className="visual">
                        <img
                            src="https://raw.githubusercontent.com/programmercloud/pgc-gym/main/img/explore.jpg"
                            alt=""
                        />
                        </div>
                        <div className="text">
                        <h2 className="primary mb">
                            Explore Our Fitness <br />
                            Studio
                        </h2>
                        <p className="tertiary mb">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
                            esse vitae ratione quos maiores eveniet temporibus illum! Eligendi
                            amet officia unde sint totam ut optio. Molestiae, illo quia?
                        </p>

                        <Link to="#" className="btn mt">Get Started Now</Link>
                        </div>
                    </div>
                </div>
              {/* <!-- End Explore --> */}

              {/* <!-- Trainer --> */}
              <div className="section" id="trainer">
                <h2 className="primary mb">Our Professional Trainers</h2>
                <div className="container flex">
                    <div className="trainer">
                    <img
                        src="https://raw.githubusercontent.com/programmercloud/pgc-gym/main/img/trainer1.jpg"
                        alt=""
                    />
                    <h3 className="secondary mb">Alan Smith</h3>
                    <p className="tertiary mb">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla.
                    </p>

                    <Link to="#" className="btn-2">
                        <ion-icon name="arrow-redo-circle-outline"></ion-icon>
                    </Link>
                    </div>

                    <div className="trainer">
                    <img
                        src="https://raw.githubusercontent.com/programmercloud/pgc-gym/main/img/trainer2.jpg"
                        alt=""
                    />
                    <h3 className="secondary mb">Alan Smith</h3>
                    <p className="tertiary mb">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla.
                    </p>

                    <Link to="#" className="btn-2">
                        <ion-icon name="arrow-redo-circle-outline"></ion-icon>
                    </Link>
                    </div>

                    <div className="trainer">
                    <img
                        src="https://raw.githubusercontent.com/programmercloud/pgc-gym/main/img/trainer3.jpg"
                        alt=""
                    />
                    <h3 className="secondary mb">Alan Smith</h3>
                    <p className="tertiary mb">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla.
                    </p>

                    <Link to="#" className="btn-2">
                        <ion-icon name="arrow-redo-circle-outline"></ion-icon>
                    </Link>
                    </div>
                </div>
                </div>
                {/* <!-- End Trainer --> */}
              {/* <!-- Testimonial --> */}
              <div className="section" id="testimonial">
                <div className="container flex">
                    <div className="text">
                    <h2 className="primary">
                        That's What Our Super <br />
                        Client Says
                    </h2>

                    <br />
                    <br />
                    <br />

                    <div className="client">
                        <img
                        src="https://raw.githubusercontent.com/programmercloud/pgc-gym/main/img/client1.jpg"
                        alt=""
                        />
                        <h2 className="secondary">Exelent Training</h2>
                        <p className="tertiary">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
                        quas voluptatem ad, repudiandae voluptates odio deleniti
                        reiciendis in veniam quidem expedita maxime error fugit. Pariatur
                        quasi sunt aut id. Lorem, ipsum dolor sit amet consectetur
                        adipisicing elit. Neque, officiis.
                        </p>
                    </div>
                    </div>
                    <div className="visual">
                    <img
                        src="https://raw.githubusercontent.com/programmercloud/pgc-gym/main/img/testimonial.png"
                        alt=""
                    />
                    </div>
                </div>
                </div>
                {/* <!-- End Testimonial --> */}
              {/* <!-- Discount --> */}
              <div className="section" id="discount">
                <div className="container flex">
                    <div className="visual">
                    <img
                        src="https://raw.githubusercontent.com/programmercloud/pgc-gym/main/img/discount.png"
                        alt=""
                    />
                    </div>
                    <div className="text">
                    <h2 className="primary mb">
                        Fitness Classes This Summer, Pay Now And Get 25% Discount
                    </h2>

                    <p className="tertiary mb">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab maxime
                        minus praesentium est et veniam voluptate alias excepturi minima
                        placeat amet nostrum, eligendi, quod cum ducimus nesciunt ipsa eum,
                        explicabo eaque obcaecati.
                    </p>

                    <Link to="#" className="btn bt">Book Now</Link>
                    </div>
                </div>
                </div>
                {/* <!-- End Discount --> */}

            {/* YouTube Link Button */}
            <Link to="https://youtu.be/n6SS9z3077Q?si=eNG1Rpat8dRzIkaj" className="youtube" target="__blank">
                <p> Gym Tutorial 🔥</p>
            </Link>

            {/* Ion Icons Js */}
            {/* <script
                type="module"
                src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.esm.js"
            ></script>
            <script
                type="module"
                src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.js"
            ></script> */}
            {/* JS */}
            {/* <script src="js/script.js"></script> */}
        </div>
    );
}

export default LandingPage;
