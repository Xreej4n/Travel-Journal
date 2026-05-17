import logo from "../assets/logo.png"
export default function Navbar(){
    return (
        <>
            <header>
                <img id="logo" src={logo}></img>
                <p>my travel journal.</p>
            </header>
        </>
    )
}