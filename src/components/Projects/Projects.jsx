import React from 'react';
import './Projects.css'

function Projects() {
  return (
    <>
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
                        <b>Tech:</b> Javascript, HTML, CSS<br/>
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
                        <b>Tech:</b> Javascript, HTML, CSS<br/>
                        <b>Libraries:</b> react, axios, swr, react-dom<br/>
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
                        This is vibrant and whimsical meme generator application, made for users of all ages! 
                        <br/> <br/>
                        Featuring an eclectic array of the latest and trendiest meme images sourced from a secure and responsive API, this application is a treasure chest of comedic gems for all occasions. All users can infuse their own personal touch onto these memes, as this application has the ability to add custom text both at the top and bottom of the image.
                        <br/> <br/>
                        <b>Tech:</b> Javascript, HTML, CSS<br/>
                        <b>Libraries:</b> react<br/>
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

export default Projects;


// section.projectContainer -- makes class