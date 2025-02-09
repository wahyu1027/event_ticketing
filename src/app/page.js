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
</div>
);
}
