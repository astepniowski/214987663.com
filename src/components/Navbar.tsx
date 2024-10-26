import { Link } from "react-router-dom"

export default function Navbar() {
    return <>
        <nav className="bg-black  font-medium">
            <ul className="text-green-400 flex flex-auto justify-center p-3 gap-4 hover:p-4">
                <li><Link to="/" className="hover:italic hover:text-white">&gt;home</Link></li>
                <li><Link to="/gallery" className="hover:italic hover:text-white">&gt;gallery</Link></li>

                <li><a href="https://github.com/astepniowski" target="_blank" className="hover:italic hover:text-white">&gt;github</a></li>

                <li><a href ="https://soundcloud.com/evoms" target="_blank" className="hover:italic hover:text-white">&gt;soundcloud</a></li>
                
                <li><a href ="https://faceittracker.net/players/evoms" target="_blank" className="hover:italic hover:text-white">&gt;faceit</a></li>

                <li><a href ="https://steamcommunity.com/profiles/76561199059532748/" target="_blank" className="hover:italic hover:text-white">&gt;steam</a></li>

                <li>&gt;about</li>
            </ul>
        </nav>
    </>
}   