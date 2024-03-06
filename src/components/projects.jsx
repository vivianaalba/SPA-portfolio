import React from 'react'

function Projects() {
  return (
    <>
        <section className="projectContainer">
            <div className="cardContainer">
                
                <div className="card--odd">
                    <img src='/images/pink-circle.svg' alt=''/>
                    <div className='project--description'>
                        <h2>CRUD Application</h2>
                        <p></p>
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
                        <a href='https://github.com/vivianaalba/pokemon-api-feb21' target='_blank'>
                            <button className='project--links'>See GitHub Repository</button>
                        </a>
                        </p>
                    </div>
                </div>

                <div className="card--odd">
                    <img src='/images/pink-circle.svg' alt=''/>
                    <div className='project--description'>
                        <h2>Meme Generator</h2>
                        <p></p>
                    </div>
                </div>

                <div className="card--even">
                    <img src='/images/pink-circle.svg' alt=''/>
                    <div className='project--description'>
                        <h2>Authentication App</h2>
                        <p></p>
                    </div>
                </div>

            </div>
        </section>
    </>

  )
}

export default Projects;


// section.projectContainer -- makes class