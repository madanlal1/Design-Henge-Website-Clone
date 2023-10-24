import logo from './images/logo.png';
import backImg from './images/banner_image.png';
import img1 from './images/1.svg';
import img2 from './images/2.svg';
import img3 from './images/3.svg';
import img4 from './images/4.svg';
import img5 from './images/5.svg';
import img6 from './images/6.svg';
import img7 from './images/7.svg';
import pic1 from './images/pic1.jpg';
import pic2 from './images/pic2.jpg';
import pic3 from './images/pic3.jpg';
import pic4 from './images/pic4.jpg';
import avatar from './images/avatar.png';
import roadmap from './images/roadmap.png';
import smLogo from './images/smLogo.jpg';
import Card from './Card';

const cardData = [
    {
        img : <i class="fa-brands fa-pied-piper"></i>,
        title : "Custom Logo Designing"
    },
    {
        img : <i class="fa-solid fa-ranking-star"></i>,
        title : "Branding & Marketing"
    },
    {
        img : <i class="fa-solid fa-code"></i>,
        title : "Web Design and Development"
    },
    {
        img : <i class="fa-regular fa-file-code"></i>,
        title : "Back-End Development"
    },
    {
        img : <i class="fa-solid fa-cube"></i>,
        title : "2D & 3D Illustration"
    },
    {
        img : <i class="fa-solid fa-pen-to-square"></i>,
        title : "Content Writing"
    },
    {
        img : <i class="fa-brands fa-searchengin"></i>,
        title : "Search Engine Optimization"
    },
    {
        img : <i class="fa-solid fa-photo-film"></i>,
        title : "Social Media Marketing"
    }
]


const Index = () => {
  return (
    <>
    <div className="outerDiv">
        <div className="innerDiv">

                <header>
                    <div className="nav">
                        <img src={logo} alt="logo" width="250px"/>
                        <button className='btn btn-light'>Menu</button>
                    </div>

                    <div className="row g-0">
                        <div className="col headerContent">
                            <h4>We’re Creative Agency</h4>
                            <h1>With talented</h1>
                            <h2>team work</h2>
                            <p>Design Henge helps brands to create meaningful, personalized customer experiences for web, social and design in the field of information and technology .It is a conclusion of years of mastering skills and working hand-in-hand with clients to maximize the investment in their online business efforts.</p>
                        </div>
                        <div className="col backImg">
                            <div className="bounce">
                                <img src={img1} alt="img1" width='200px' id='img1'/>
                                <img src={img2} alt="img2" width='200px' id='img2'/>
                                <img src={img3} alt="img3" width='200px' id='img3'/>
                                <img src={img4} alt="img4" width='200px' id='img4'/>
                                <img src={img5} alt="img5" width='200px' id='img5'/>
                                <img src={img6} alt="img6" width='200px' id='img6'/>
                                <img src={img7} alt="img7" width='200px' id='img7'/>
                            </div>
                            <img src={backImg} alt="backImg" width='700px'/>
                        </div>
                    </div>
                </header>

            <div className="row g-0 sec2">
                <div className="col imgCol">
                    <div data-aos="fade-down">
                        <img src={pic1} alt="pic1" id="pic1" width="300px"/>
                    </div>

                    <div data-aos="fade-left">
                        <img src={pic2} alt="pic2" id="pic2" width="300px"/>
                    </div>

                    <div data-aos="fade-right">
                        <img src={pic3} alt="pic3" id="pic3" width="300px"/>
                    </div>

                    <div data-aos="fade-up">
                        <img src={pic4} alt="pic4" id="pic4" width="300px"/>
                    </div>
                </div>
                <div className="col textCol">
                    <h2>When there is <span>teamwork and collaboration</span>, wonderful things can be Achieved</h2>
                    <p>Creativity thrives when people work together on a team. Brainstorming ideas as a group prevents stale viewpoints that often come out of working solo. Combining unique perspectives from each team member creates more effective selling solutions.</p>
                </div>
            </div>

            <div className="services">
                <h1>Services</h1>
                <p>Assisting Corporations in Becoming the Center of Attention with Fresh Brand Strategies and</p>
                <p>Compelling Design.</p>
            </div>

            <div className="row g-0" id='servicesCard'>
                <Card data={cardData}/>
            </div>

            <div className="testinomials">
                <h4>TESTINOMIALS</h4>
                <h3>Love from <i>Clients</i></h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut atque enim sint aliquam nihil ipsam eveniet, amet, accusamus saepe officia, dignissimos commodi! Possimus nam dolorum natus accusamus modi fuga cumque.</p>
                <img src={avatar} alt="avatar" width="120px"/>
                <h5><i>Madan Lal</i></h5>
                <h6>HR Head</h6>
            </div>

            <div className="works">
                <h1>How It <i>Works</i></h1>
                <img src={roadmap} alt="avatar" width="120px"/>
            </div>


        </div>

        <footer>
            <h6>INTERESTED!</h6>
            <h3>Want to Start a New Mobile Application.</h3>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>
            <button className='btn btn-light contactBtn'>Contact us</button>
        </footer>

        <div className="row g-0 footer">
            <div className="col colFirst">
                <img src={smLogo} alt="avatar" width="200px"/>
                <p>We work systematically to integrate corporate responsibility in our core business We work systematically to integrate</p>
                <input type="text" className='form-control' placeholder='Enter your mail here...' />
            </div>
            <div className="col">
                <h3>Company</h3>
                <ul>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Portfolio</li>
                </ul>
            </div>
            <div className="col">
                <ul>
                    <li>info@designhenge.com</li>
                    <li>2259 W. Rosemont Ave. Apt. 1 Chicago, IL 60659, USA</li>
                    <li>+ 123456789</li>
                </ul>
                Fb LIn
            </div>
        </div>

        <div className="footerDown">
            <div className="col">
                <p>Copyrights © 2023. Design Henge. All rights reserved.</p>
            </div>
            <div className="col">
                <ul>
                    <li>Terms of Conditions</li>
                    <li>Privacy Policy</li>
                    <li>Legal info</li>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Index;