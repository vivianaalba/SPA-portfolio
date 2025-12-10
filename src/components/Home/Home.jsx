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
      <div className='home'>
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
      <div className="about-me">
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

      {/* <div className='about--circle'>
        <img className='about--circle--img' src='/images/pink-circle.svg' alt='' />
      </div> */}

      {/* <div className='about--blue'>
        <img className='about--blue--img' src='/images/blue.svg' alt='' />
      </div> */}

      {/* PROJECTS SECTION */}
    
        <section className="projectContainer">
            <div className="cardContainer">
                
                <div className="card--odd">
                    <img src='/images/pink-circle.svg' alt=''/>
                    <div className='project--description'>
                        <h2>Login Application</h2>
                        <p>
                        This application was designed to store invaluable user information within a secure MongoDB database, ensuring that all user and client data is protected from data leaks. 
                        <br/> <br/>
                        At its core, this application is a standard CRUD application. Users can effortlessly navigate through its interface to perform essential tasks such as reading, creating, updating, or deleting data. This application was designed to offer functionality and convenience.
                        <br/> <br/>
                        <b>Tech:</b> Javascript, React, HTML, CSS<br/>
                        <b>Database:</b> MongoDB<br/>
                        <b>Tools:</b> vite, body-parser<br/>
                        <b>IDE:</b> VS Code
                        <br/> <br/>
                        <a href='https://github.com/vivianaalba/crud-jan-8' target='_blank' rel="noreferrer">
                            <button className='project--links'>See GitHub Repository</button>
                        </a>
                        </p>
                    </div>
                </div>

                <div className="card--even">
                    <video controls width="640" height="360" className='project--video'>
                        <source src="videos/pokemon-directory.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    <div className='project--description'>
                        <h2>Pokemon Directory</h2>
                        <p>
                        The project utilizes a Pokemon API to fetch comprehensive data about various 
                        Pokemon species, including their abilities, types, and more. Through seamless integration with the API, users can explore a collection of 
                        Pokemon, enriching their knowledge and fandom of the franchise. 
                        <br/> <br/>
                        To ensure a cohesive and aesthetically pleasing user interface, the project 
                        incorporates focused styling techniques to enhance usability and visual appeal. 
                        To add a layer of immersion, the project is complete with images and audio that 
                        evokes nostalgia and excitement reminiscent of the Pokemon games and animated 
                        series. 
                        <br/> <br/>
                        <b>Tech:</b> Javascript, React, HTML, CSS<br/>
                        <b>Libraries:</b> axios, swr, react-dom<br/>
                        <b>Tools:</b> vite<br/>
                        <b>IDE:</b> VS Code
                        <br/> <br/>
                        <a href='https://github.com/vivianaalba/pokemon-api-feb21' target='_blank' rel="noreferrer">
                            <button className='project--links'>See GitHub Repository</button>
                        </a>
                        </p>
                    </div>
                </div>

                <div className="card--odd">
                    <video controls width="640" height="360" className='project--video'>
                        <source src="videos/meme-generator.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    <div className='project--description'>
                        <h2>Meme Generator</h2>
                        <p>
                        This is vibrant and whimsical meme generator application, made for users of all ages! Featuring an eclectic array of the latest and trendiest meme images sourced from a secure and responsive API, this application contains comedic gems for all occasions. 
                        <br/> <br/>
                        All users can infuse their own personal touch to create a meme for every occasion, as this application has the ability to add custom text to the top and bottom of the image. After creating the perfect meme, users have the ability to download their new creation directly to their computer with a click of a button.
                        <br/> <br/>
                        <b>Tech:</b> Javascript, React, HTML, CSS<br/>
                        <b>Libraries:</b> js-file-download<br/>
                        <b>Tools:</b> vite<br/>
                        <b>IDE:</b> VS Code
                        <br/> <br/>
                        <a href='https://github.com/vivianaalba/meme-generator-feb14' target='_blank' rel="noreferrer">
                            <button className='project--links'>See GitHub Repository</button>
                        </a>
                        </p>
                    </div>
                </div>

                <div className="card--even">
                    {/* <video controls width="640" height="360" className='project--video'>
                        <source src="videos/meme-generator.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video> */}

                    <img src='/images/pink-circle.svg' alt=''/>

                    <div className='project--description'>
                        <h2>Authentication Application</h2>
                        <p>
                        Experience a dynamic full-stack application offering seamless create and read functionalities without worrying about security risks! This application was developed with built in security features, such as user authentication and the use of a secure database.
                        <br/> <br/>
                        Our platform empowers users with the ability to effortlessly craft personalized accounts, complete with unique credentials for secure access. Users can easily create and browse posts, building engagement and interaction on this application.
                        <br/> <br/>
                        <b>Tech:</b> Javascript, HTML, CSS<br/>
                        <b>Libraries:</b> passport, prisma, bcrypt, EJS, express, dotenv<br/>
                        <b>Tools:</b> nodemon, passport-local<br/>
                        <b>Database:</b> mongoDB<br/>
                        <b>IDE:</b> VS Code
                        <br/> <br/>
                        <a href='https://github.com/vivianaalba/authorization-jan22' target='_blank' rel="noreferrer">
                            <button className='project--links'>See GitHub Repository</button>
                        </a>
                        </p>
                    </div>
                </div>

            </div>
        </section>
    </>

  )
}