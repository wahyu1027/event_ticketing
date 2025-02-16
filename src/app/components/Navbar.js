import Link from 'next/link';
const Navbar = () => {
    return (
        <nav className="bg-white shadow-lg">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-center items-center h-16">
                <img src="logo.jpg" alt="Logo" className="h-11" />
                    <div className="flex space-x-7">
                    <div className="flex items-center space-x-4">
                     </div>
                        <div className="flex items-center space-x-4">
                            <Link href="/" className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-mdtext-sm font-medium">Home
                            </Link >
                            <Link href="/blog" className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md
                                text-sm font-medium">Blog
                            </Link >
                            <Link href="/about" className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">About Us
                            </Link >
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;