import './Home.css'; 

function Summary() {
  return (
    <div className="summary-text">
      I started my career in clinical research, captivated by the cutting-edge technology revolutionizing the field of medicine. Conducting research on innovative technology, such as imaging devices and surgical tools, I developed a passion for technology as I witnessed its leading impact in life-saving breakthroughs within healthcare. I am currently pursuing a Master's in Applied Data Science at the University of Southern California. Scroll to see a collection of my work, skills, and interests!
      <h2>Skills</h2>
      <b>Tech:</b> Python, SQL, R, MATLAB, SPSS, JavaScript, React, CSS, HTML<br /> 
      <b>Data Engineering & Tools:</b> Hadoop (HDFS, MapReduce), Apache Spark, AWS, MongoDB, DynamoDB, Firebase<br />
      <b>Visualization & Analytics:</b> Tableau, PowerBI, matplotlib, seaborn, pandas, numpy, requests<br />
      <b>Machine Learning:</b> scikit-learn, tensorflow/keras, pytorch<br />

      <h2>Education</h2>
      <b>University of Southern California</b><br /> 
      M.S. Applied Data Science<br /> 
      <br />
      <b>University of California, Santa Cruz</b><br /> 
      B.S. Molecular, Cell, Development Biology<br /> 
      B.A. Latin American and Latino Studies<br />
      <br />
      <b>The Knowledge House</b><br /> 
      Innovation Fellow - Web Development Track<br /> 
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* HERO / WELCOME SECTION */}
      <div id="home" className='home'>
        <div className='welcome'>
          <h1 className="home--hello">HELLO</h1>
          <h2 className="home--name">My name is Viviana and I am a </h2>
          <h3 className="home--name">data professional with first-hand experience</h3>
          <h3 className="home--name">in healthcare and clinical research!</h3>
        </div>

        <div className='hand'>
          <img className='hand--img' src='/images/hand.svg' alt='' />
        </div>

        <div className='line--arrow'>
          <img className='line--arrow--img' src='/images/line-arrow.svg' alt='' />
        </div>
      </div> 

      {/* ABOUT ME SECTION */}
      <div id="about" className="about-me">
        <h1 className="about-title">About Me</h1>
        <Summary />
      </div>

      {/* ABOUT BACKGROUND SHAPES */}
      <div className='about--halfwheel'>
        <img className='about--halfwheel--img' src='/images/half--wheel.svg' alt='' />
      </div> 

      <div className='about--dots'>
        <img className='about--dots--img' src='/images/dots.svg' alt='' />
      </div>

      {/* PROJECTS SECTION */}

      <div id="projects" className="projects">
        <h1 className="projects-title">Projects</h1>
        <h3>Here is a collection of only a few of the projects I have worked on. For more projects, check out my Github!</h3>
      </div>
    
        <section className="projectContainer">
            <div className="cardContainer">

                <div className="card">
                    <img src='/images/projects/college.svg' alt=''/>
                    <div className='project--description'>
                        <h2>College Comparison Analysis</h2>
                        <p>
                        A data-driven analysis of over 6,000 U.S. undergraduate institutions examining how cost, faculty investment, and other factors relate to student outcomes, satisfaction, and institutional rankings.
                        <br/> <br/>
                        <b>Tech:</b>Python<br/>
                        <b>Libraries:</b>pandas, numpy, scipy, statsmodels, scikit-learn, requests, BeautifulSoup4, json, python-dotenv, fuzzywuzzy, matplotlib, seaborn, geopandas<br/>
                        <br/> <br/>
                        <a href='https://github.com/vivianaalba/college-comparison-project' target='_blank' rel="noreferrer">
                            <button className='project--links'>See GitHub Repository</button>
                        </a>
                        </p>
                    </div>
                </div>

                <div className="card">
                    <img src='/images/projects/trash.svg' alt=''/>

                    <div className='project--description'>
                        <h2>Deep Learning Trash Classifier</h2>
                        <p>
                        A 9-class image classification task using transfer learning to compare the performance of four deep learning architectures (ResNet50, ResNet101, EfficientNetB0, and VGG16) using advanced data augmentation and performance evaluation across training, validation, and test datasets.
                        <br/> <br/>
                        <b>Tech:</b>Python<br/>
                        <b>Libraries:</b>numpy, pandas, matplotlib, seaborn, Pillow, tensorflow, scikit-learn<br/>
                        <br/> <br/>
                        <a href='https://github.com/vivianaalba/ml-trash-sorter' target='_blank' rel="noreferrer">
                            <button className='project--links'>See GitHub Repository</button>
                        </a>
                        </p>
                    </div>
                </div>

                <div className="card">
                    <img src='/images/projects/data_processing.svg' alt=''/>

                    <div className='project--description'>
                        <h2>Data Processing Dashboard</h2>
                        <p>
                        A web application that parses, filters, projects, groups, aggregates, and joins CSV datasets using custom Python functions with an easy-to-use UI interface.
                        <br/> <br/>
                        <b>Tech:</b>Python<br/>
                        <b>Libraries:</b>Streamlit, regex<br/>
                        <br/> <br/>
                        <a href='https://github.com/vivianaalba/dsci551-project' target='_blank' rel="noreferrer">
                            <button className='project--links'>See GitHub Repository</button>
                        </a>
                        </p>
                    </div>
                </div>

                <div className="card">

                    <img src='/images/projects/car_recalls.svg' alt=''/>

                    <div className='project--description'>
                        <h2>Car Recalls Clustering</h2>
                        <p>
                        Using unsupervised learning, this collaborative group project clusters 60 years of NHTSA recall data to uncover patterns in vehicle safety severity across manufacturers, components, and time.
                        <br/> <br/>
                        <b>Tech:</b>Python<br/>
                        <b>Libraries:</b>pandas, numpy, scikit-learn, seaborn, matplotlib<br/>
                        <br/> <br/>
                        <a href='https://github.com/vivianaalba/car-recalls-clustering' target='_blank' rel="noreferrer">
                            <button className='project--links'>See GitHub Repository</button>
                        </a>
                        </p>
                    </div>
                </div>

            </div>
        </section>

        {/* CONTACT ME SECTION */}
        <section id="contact" className="contact-section">
            {/* background shapes that relate to Contact */}
            <div className="contact-shapes">
                <div className="contact--purple">
                <img className="contact--purple--img" src="/images/purple.svg" alt="" />
                </div>

                <div className="contact--blue">
                <img className="contact--blue--img" src="/images/blue.svg" alt="" />
                </div>

                <div className="contact--multiple">
                <img className="contact--multiple--img" src="/images/contact--multiple.svg" alt="" />
                </div>
            </div>

            {/* the actual contact card */}
            <div className="contact--card">
                <h2>Let's Connect!</h2>
                <h3>Viviana Alba</h3>
                <h4>vivianaalba7@gmail.com</h4>
                <div className="contact--icon-row">
                    <a href="https://www.linkedin.com/in/vivianaalba/" target="_blank" rel="noopener noreferrer">
                        <img src="/images/linkedin.svg" alt="LinkedIn Logo" className="contact--logos" />
                    </a>

                    <a href="https://github.com/vivianaalba" target="_blank" rel="noopener noreferrer">
                        <img src="/images/github.svg" alt="GitHub Logo" className="contact--logos" />
                    </a>
                </div>
            </div>
        </section>
    </>

  )
}