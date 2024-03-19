import { useEffect, useRef } from "react";

const Home = () => {
  const aboutRef = useRef(null);
  const techRef = useRef(null);
  const techContainer = document.querySelector('.tech-container')
  const techIcon = document.querySelector('.tech-more')

  useEffect(() => {
    const handleScroll = () => {
      if (aboutRef.current) {
        const topAbout = aboutRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Add a class to trigger the animation when the about section is in the viewport
        if (topAbout < windowHeight) {
          aboutRef.current.classList.add("slide-left");
        } else {
          aboutRef.current.classList.remove("slide-left");
        }
      }

      if (techRef.current) {
        const topTech = techRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Add a class to trigger the animation when the tech section is in the viewport
        if (topTech < windowHeight - 100) {
          techRef.current.querySelectorAll(".tech").forEach((item, index) => {
            setTimeout(() => {
              item.classList.add("slide-right");
            }, index * 100); // Adjust the delay as needed
          });
        } else {
          techRef.current.querySelectorAll(".tech").forEach((item) => {
            item.classList.remove("slide-right");
          });
        }
      }

      if (techContainer) {
        const isScrolled = techContainer.scrollLeft > 0 && techContainer.scrollLeft + techContainer.clientWidth < techContainer.scrollWidth;
    
        if (isScrolled) {
          techIcon.classList.add('hide');
        } else {
          techIcon.classList.remove('hide');
        }
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="">
        <div className="home-main">
          <div className="home-about-container">
            <div className="profile-photo-container">
              <img
                src="/kevin-main.jpg"
                className="profile-photo slide-left"
                alt="Kevin"
              ></img>
            </div>
            <div className="intro-text slide-right">
              <p className="greeting">Hi,</p>
              <p className="name">I'm Kevin Quach</p>
              <p className="home-about">
                A full stack web developer. With a blend of creativity and
                technical expertise, I strive to turn ideas into beautifully
                designed, functional websites and applications.
              </p>
            </div>
          </div>
          <div className="arrow-container">
          <img src="/down-arrow.png" className="down-arrow"></img>
          </div>
          <h2 className="about-header">About Me</h2>
          <div ref={aboutRef} className="about-main">
            <div className="about-intro">
              <div className="about-text">
                <p className="paragraph">
                  As a Full Stack Developer, I enjoy working on both the
                  front-end and back-end of web applications, creating seamless
                  user experiences and robust server-side functionalities. I'm
                  currently honing my skills and expanding my knowledge through
                  hands-on projects and collaborative learning experiences at
                  the University of Toronto's bootcamp program. Always eager to
                  learn and explore new technologies to stay ahead in the
                  ever-evolving tech landscape.
                </p>
                <p className="paragraph">
                  When I'm not coding, you can find me outdoors, soaking up the
                  sunshine and exploring new places. I love hiking, camping, and
                  connecting with nature. Exploring the great outdoors fuels my
                  creativity and inspires me to approach coding challenges with
                  fresh perspectives. I'm excited about the possibilities that
                  lie ahead in my journey as a Full Stack Developer, and I'm
                  looking forward to connecting with fellow developers and
                  potential employers to create meaningful and impactful
                  projects together.
                </p>
              </div>
            </div>
          </div>
          <h2 className="about-header">Technologies</h2>
          <div ref={techRef} className="tech-main">
            <div className="tech-container">
              <div className="tech">
                <div className="tech-heading">
                  <p className="tech-title">HTML</p>
                  <img className="tech-icon" src="/html.png"></img>
                </div>
                <div>
                  <p className="paragraph tech-paragraph">
                    I love using this technology because im very good at using
                    it. You love to see it mate.
                  </p>
                </div>
              </div>
              <div className="tech">
                <div className="tech-heading">
                  <p className="tech-title">CSS</p>
                  <img className="tech-icon" src="/css.svg"></img>
                </div>
                <div>
                  <p className="paragraph tech-paragraph">
                    I love using this technology because im very good at using
                    it. You love to see it mate.
                  </p>
                </div>
              </div>
              <div className="tech">
                <div className="tech-heading">
                  <p className="tech-title">Javascript</p>
                  <img className="tech-icon" src="/js.png"></img>
                </div>
                <div>
                  <p className="paragraph tech-paragraph">
                    I love using this technology because im very good at using
                    it. You love to see it mate.
                  </p>
                </div>
              </div>
              <div className="tech">
                <div className="tech-heading">
                  <p className="tech-title">ExpressJS</p>
                  <img className="tech-icon" src="/white-express.png"></img>
                </div>
                <div>
                  <p className="paragraph tech-paragraph">
                    I love using this technology because im very good at using
                    it. You love to see it mate.
                  </p>
                </div>
              </div>
              <div className="tech">
                <div className="tech-heading">
                  <p className="tech-title">MySQL</p>
                  <img className="tech-icon" src="/white-sql.png"></img>
                </div>
                <div>
                  <p className="paragraph tech-paragraph">
                    I love using this technology because im very good at using
                    it. You love to see it mate.
                  </p>
                </div>
              </div>
              <div className="tech">
                <div className="tech-heading">
                  <p className="tech-title">NodeJS</p>
                  <img className="tech-icon" src="/node-icon.png"></img>
                </div>
                <div>
                  <p className="paragraph tech-paragraph">
                    I love using this technology because im very good at using
                    it. You love to see it mate.
                  </p>
                </div>
              </div>
              <div className="tech">
                <div className="tech-heading">
                  <p className="tech-title">MongoDB</p>
                  <img className="tech-icon" src="/mongo.png"></img>
                </div>
                <div>
                  <p className="paragraph tech-paragraph">
                    I love using this technology because im very good at using
                    it. You love to see it mate.
                  </p>
                </div>
              </div>
              <img src="/scroll-right.png" className="tech-more"></img>
              <img src="/scroll-left.png" className="tech-more2"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
