export default function HeroSection() {
    return (
        <section className="bg-white">
            <div className="max-w-6xl mx-auto px-4 py-20">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    <div className="w-full lg:w-1/2">
                        <h1 className="text-4xl font-bold mb-4">Biro jodoh</h1>
                        <p className="text-xl text-gray-600 mb-8">
                            Ayo bergabung dan berkontribusi dalam membantu korban bencana alam di Haiti.
                        </p>
                        <form className="w-full max-w-sm">
                            <div className="flex items-center border-b border-b-2 border-gray-300 py-2">
                                <input type="text" className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder="Cari event" />
                                <button className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded">
                                    Cari
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="w-full lg:w-1/2 lg:mt-0 mt-12">
                        <img src="foto2.JPG" alt="2 Kilometers Haiti Dikolomi" className="w-full h-auto" />
                    </div>
                </div>
            </div>
        </section>
    );
}