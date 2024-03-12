export default function About() {
    function Summary() {
        return (
            <>
            Growing up, I was quite reserved, often seeking refuge behind books and finding peach in my own imagination. However, as I have gotten older and become more comfortable in my own skin, I've discovered the power of my voice and the significance of effective communication. 
            <br/><br/>
            I firmly believe that technology serves as a powerful conduit for sharing our visions and truths with the world. Positioned at every turn, technology becomes the means through which we can illuminate your vision, placing it in the hands of those who not only support it but also catalyze its realization.
            <br/><br/>
            Let's work together to make your vision a reality.
            <h2>Summary</h2>
            I am a results-oriented web developer with a robust foundation in computer science and a proven track record of delivering clean, scalable, and innovative code. Eager to channel my technical expertise and creativity, I am committed to steering impactful projects to success.
            <h2>Skills</h2>
            Tech: JavaScript, React, MongoDB, CSS, HTML, Python, SQL, R, Tableau<br/> 
            Productivity: Microsoft Office,  Slack, Asana, Google Workspace, Trello<br/> 
            Languages: Spanish (Fluent)
            <h2>Education</h2>
            University of California, Santa Cruz<br/> 
            B.S. Molecular, Cell, Development Biology<br/> 
            B.A. Latin American and Latino Studies
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
                <img className='contact--purple--img' src='/images/purple.svg' alt='' />
            </div>

            <div className='about--dots'>
                <img className='contact--dots--img' src='/images/dots.svg' alt='' />
            </div>

            <div className='about--blue'>
                <img className='contact--blue--img' src='/images/blue.svg' alt='' />
            </div>
        </>
    )
}