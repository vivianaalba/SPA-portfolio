import '../App.css'; 

export default function Home() {

    // Add elements inside here to visually indicate 
    // that this component is rendering
    // Your Home page should greet your user and 
    // explain your role
    // Refer to your original portfolio

    return(
        <div className='home'>
            <div className='welcome'>
            <h1 className="home--hello">HELLO</h1>
            <h2 className="home--name">My name is Viviana and I am</h2>
            <h3 className="home--name">a full stack developer.</h3>
            <h4 className="home--connect">LET'S CONNECT</h4>
            </div>

            <div className='pink--circle'>
                <img className='pink--circle--img' src='/images/pink-circle.svg' alt=''/>
            </div>

            <div className='green--shape'>
                <img className='green--shape--img' src='/images/green-shape.svg' alt='' />
            </div>

            <div className='hand'>
                <img className='hand--img' src='/images/hand.svg' alt='' />
            </div>

            <div className='line--arrow'>
                <img className='line--arrow--img' src='/images/line-arrow.svg' alt='' />
            </div>

            <div className='square'>
                <img className='square--img' src='/images/square.svg' alt='' />
            </div>

            <div className='button'>
                <button className='projects--button'>Explore My Work</button>
            </div>
        </div> 
    )
}