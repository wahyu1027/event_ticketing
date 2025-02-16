export default function About() {
    return (
    <div className="space-y-8">
     <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
            <p className="text-xl text-gray-600">Your trusted partner in event management</p>
    </section>
    <section className="bg-white p-8 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold mb-4">Event Ramadhan</h3>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="flex items-center justify-center p-4 text-center bg-blue-500 rounded-md">
                <img src="images/ramadhan.jpg" alt="Ramadhan" className="w-20 h-20 rounded-full mr-4" />
                <div>
                    <h4 className="text-lg font-semibold text-white">Sholat Tarawih</h4>
                    <p className="text-sm text-white">Setiap malam Ramadhan</p>
                </div>
            </div>
            <div className="flex items-center justify-center p-4 text-center bg-green-500 rounded-md">
                <img src="images/ramadhan.jpg" alt="Ramadhan" className="w-20 h-20 rounded-full mr-4" />
                <div>
                    <h4 className="text-lg font-semibold text-white">Tadarus</h4>
                    <p className="text-sm text-white">Setiap malam Ramadhan</p>
                </div>
            </div>
            <div className="flex items-center justify-center p-4 text-center bg-yellow-500 rounded-md">
                <img src="images/ramadhan.jpg" alt="Ramadhan" className="w-20 h-20 rounded-full mr-4" />
                <div>
                    <h4 className="text-lg font-semibold text-white">Buka Puasa</h4>
                    <p className="text-sm text-white">Setiap malam Ramadhan</p>
                </div>
            </div>
            <div className="flex items-center justify-center p-4 text-center bg-red-500 rounded-md">
                <img src="images/ramadhan.jpg" alt="Ramadhan" className="w-20 h-20 rounded-full mr-4" />
                <div>
                    <h4 className="text-lg font-semibold text-white">Khatam Quran</h4>
                    <p className="text-sm text-white">Setiap malam Ramadhan</p>
                </div>
            </div>
            </div>
    </section>
    <section className="bg-white p-8 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold mb-4">Kepengurusan</h3>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="flex items-center justify-center p-4 text-center">
                <img src="images/ketua.jpg" alt="Ketua" className="w-20 h-20 rounded-full mr-4" />
                <div>
                    <h4 className="text-lg font-semibold">Wahyu</h4>
                    <p className="text-sm text-gray-600">Ketua Pelaksana</p>
                </div>
            </div>
            <div className="flex items-center justify-center p-4 text-center">
                <img src="images/bendahara.jpg" alt="Bendahara" className="w-20 h-20 rounded-full mr-4" />
                <div>
                    <h4 className="text-lg font-semibold">Wahyu</h4>
                    <p className="text-sm text-gray-600">Bendahara</p>
                </div>
            </div>
            <div className="flex items-center justify-center p-4 text-center">
                <img src="images/sekretaris.jpg" alt="Sekretaris" className="w-20 h-20 rounded-full mr-4" />
                <div>
                    <h4 className="text-lg font-semibold">Wahyu</h4>
                    <p className="text-sm text-gray-600">Sekretaris</p>
                </div>
            </div>
            <div className="flex items-center justify-center p-4 text-center">
                <img src="images/anggota.jpg" alt="Anggota" className="w-20 h-20 rounded-full mr-4" />
                <div>
                    <h4 className="text-lg font-semibold">Wahyu</h4>
                    <p className="text-sm text-gray-600">Anggota</p>
                </div>
            </div>
        </div>
    </section>
    </div>
    );
    }