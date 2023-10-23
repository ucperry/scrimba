function Header() {
    return(
       <header className="header">
            <nav className="nav">
                    <img src="./src/assets/react-logo.png" className="nav-logo"/>
                    <ul className="nav-items">
                        <li>About</li>
                        <li>Pricing</li>
                        <li>Contact</li>
                    </ul>
            </nav>
        </header>
    )
}

function MainContent (){
    return(
        <div>
            <h1 className="title"> Wolfes Limited LLC </h1>
            <ul>
                <li>Originally established in 2020</li>
                <li>Project Management Certified in 2021</li>
                <li>Began working with Airriva and SkyL in 2022</li>
                <li>Established Software Project Management with the App Kaira</li>
                <li>Raised Business Acumen and understanding with Flow chart and data analysis</li>
                <li>Started learning React/JS in 2023</li>
            </ul>
        </div>
    )
}

// function Footer () {
//     return(
//         <footer className="footer">
//             <small>© 2023 Wolfes Limited LLC Development. All rights reserved.</small>
//         </footer>
//     )
// }
import Footer from "./Footer"

function Page () {
    return (
    <div>
        <Header />
        <MainContent />
        <Footer />
    </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))