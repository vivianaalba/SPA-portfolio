import './About.css'

export default function About() {
    function Summary() {
        return (
            <>
            Technology serves as a powerful conduit for sharing our visions and truths with the world. Whether you are looking to create an ecletcic, eye catching deisgn or a powerful, secure, and reliable application, I can assist in making your vision come to fruition.
            <br/><br/>
            I am eager to connect with like-minded professionals, mentors, and collaborators. Let’s connect, discuss ideas, and explore potential collaborations!
            <h2>Summary</h2>
            I am a results-oriented web developer with a robust foundation in computer science and a proven track record of delivering clean, scalable, and innovative code. Eager to channel my technical expertise and creativity, I am committed to steering impactful projects to success.
            <h2>Skills</h2>
            <b>Tech:</b> JavaScript, React, MongoDB, CSS, HTML, Python, SQL, R, Tableau<br/> 
            <b>Libraries:</b> axios, vite, passport, mongoose, prisma, express, tailwind, bootstrap<br/> 
            <b>Productivity:</b> Microsoft Office,  Slack, Asana, Google Workspace, Trello, GitHub<br/> 
            <b>Languages:</b> Spanish (Fluent)
            <h2>Education</h2>
            <b>University of California, Santa Cruz</b><br/> 
            B.S. Molecular, Cell, Development Biology<br/> 
            B.A. Latin American and Latino Studies
            <br/><br/>
            <b>The Knowledge House</b><br/> 
            Innovation Fellow - Web Development Track<br/> 
            </>
        )
    }
    
    return(
        <>
            <div className="about-me">
                <h1 className="about-title">About Me</h1>
                <p className="about-intro">Hello! My name is Viviana Alba and I am a specialized full stack developer with a knack for problem solving and an eye for design.</p>
                <Summary />
            </div>

            <div className='about--purple'>
                <img className='about--purple--img' src='/images/purple.svg' alt='' />
            </div>

            <div className='about--dots'>
                <img className='about--dots--img' src='/images/dots.svg' alt='' />
            </div>

            <div className='about--circle'>
                <img className='about--circle--img' src='/images/pink-circle.svg' alt='' />
            </div>

            <div className='about--blue'>
                <img className='about--blue--img' src='/images/blue.svg' alt='' />
            </div>
        </>
    )
}