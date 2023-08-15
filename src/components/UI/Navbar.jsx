import {Link} from 'react-router-dom';

export const Navbar = () => {
    return (
        <header className="fixed left-0 right-0 top-0 h-16 shadow-md border-b-2 border-gray-100 bg-gray-900">
            <nav className="flex items-center container mx-auto h-full justify-between">
                <h1 className="font-semibold uppercase text-lg text-gray-200">
                    <Link to="/" className="text-gray-400 hover:text-gray-100">Fireball App</Link>
                </h1>

                <ul className="flex items-center space-x-10 text-sm">
                    <li><Link to="/" className="text-gray-400 hover:text-gray-100">Home</Link></li>
                    <li><Link to="/searchpage" className="text-gray-400 hover:text-gray-100">Search Component</Link></li>
                    <li><Link to="/" className="text-gray-400 hover:text-gray-100">Detail Data Display Component</Link></li>
                    <li><Link to="/" className="text-gray-400 hover:text-gray-100">Summary Metrics Component</Link></li>
                </ul>
            </nav>
        </header>
    )
}