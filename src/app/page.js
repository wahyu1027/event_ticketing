import Image from "next/image";
export default function Home() {
return (
<div className= "space-y-8">
  <section className= "text-center py-12">
    <h1 className= "text-4xl font-bold mb-4">Welcome to Web Event</h1>
  <p className="text-xl text-gray-600">Your premier destination for event management solutions</p>
   </section>
<section className= "grid grid-cols-1 md:grid-cols-3 gap-6">
<div className= "p-6 bg-white rounded-lg shadow-md">
<h2 className= "text-xl font-semibold mb-3">Plan Events</h2>
<p className= "text-gray-600">Create and manage your events with our intuitive tools</p>
</div>
<div className= "p-6 bg-white rounded-lg shadow-md">
<h2 className= "text-xl font-semibold mb-3">Track Attendance</h2>
<p className= "text-gray-600">Monitor registrations and attendance in real-time</p>
</div>
<div className= "p-6 bg-white rounded-lg shadow-md">
<h2 className= "text-xl font-semibold mb-3">Analyze Results</h2>
<p className="text-gray-600">Get detailed insights about your events</p>
</div>
</section>
<section className="flex items-center justify-beetwen py-12">
<div className="w-1/2">
    <h2 className="text-2xl font-semibold mb-4">Mootoo</h2>
  </div>
  
  <div className="justify-center ">
  <p className="text-gray-600">Mootoo is a web-based event management system that helps you plan, manage, and analyze your events. With Mootoo, you can create and manage events, track attendance, and analyze results.</p>
  </div>

</section>
<section className="py-12">
  <h2 className="text-2xl font-semibold mb-8">Upcoming Events</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div className="flex items-center bg-white rounded-lg shadow-md">
      <div className="w-1/2">
        <Image src="/images/event1.jpg" alt="Event 1" width={300} height={200} className="rounded-lg" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-4">Event 1</h3>
        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
      </div>
    </div>
    <div className="flex items-center bg-white rounded-lg shadow-md">
      <div className="w-1/2">
        <Image src="/images/event2.jpg" alt="Event 2" width={300} height={200} className="rounded-lg" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-4">Event 2</h3>
        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
      </div>
    </div>
    <div className="flex items-center bg-white rounded-lg shadow-md">
      <div className="w-1/2">
        <Image src="/images/event3.jpg" alt="Event 3" width={300} height={200} className="rounded-lg" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-4">Event 3</h3>
        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
      </div>
    </div>
  </div>
</section>
<footer className="bg-gray-800 text-white py-8">
  <div className="max-w-6xl mx-auto px-4">
    <div className="flex flex-col md:flex-row justify-between items-center">
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Connect with Us</h3>
        <div className="flex space-x-4 mt-2">
          <a href="#" className="hover:text-gray-400">Facebook</a>
          <a href="#" className="hover:text-gray-400">Twitter</a>
          <a href="#" className="hover:text-gray-400">Instagram</a>
        </div>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Contact Us</h3>
        <p className="mt-2">Email: info@mootoo.com</p>
        <p>Phone: +123 456 7890</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold">Subscribe to our Newsletter</h3>
        <form className="mt-2">
          <input type="email" placeholder="Enter your email" className="p-2 rounded bg-white text-gray-800" />
          <button className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded ml-2">Subscribe</button>
        </form>
      </div>
    </div>
    <div className="text-center mt-8">
      <p className="text-sm">&copy; 2025 Mootoo. All rights reserved.</p>
    </div>
  </div>
</footer>

</div>
);
}
