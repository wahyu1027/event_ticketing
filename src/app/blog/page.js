export default function Blog() {
    const blogPosts = [
    {
    title: "How to Plan a Successful Corporate Event",
    date: "January 25, 2025",
    excerpt: "Learn the key strategies for organizing memorable corporate events that achieve your business objectives."
    },
    {
    title: "Top Event Trends for 2025", 
    date: "January 20, 2025",
    excerpt: "Discover the latest trends shaping the event industry and how to incorporate them into your next event."
    },
    { 
    title: "Virtual vs. Hybrid Events: Making the Right Choice",
    date: "January 15, 2025",
    excerpt: "Compare the pros and cons of virtual and hybrid events to determine the best format for your next gathering."
    }
    ];
    return (
    <div className=
    "space-y-8">
    <section className=
    "text-center py-12">
    <h1 className=
    "text-4xl font-bold mb-4">Our Blog</h1>
    <p className=
    "text-xl text-gray-600">Latest insights from the event industry</p>
    </section>
    <section className=
    "grid gap-8">
    {blogPosts.map((post , index ) => (
    <article key={index } className=
    "p-6 bg-white rounded-lg shadow-md">
    <h2 className=
    "text-2xl font-semibold mb-2">{post .title}</h2>
    <p className=
    "text-gray-500 text-sm mb-4">{post .date}</p>
    <p className=
    "text-gray-600">{post .excerpt}</p>
    <button className=
    "mt-4 text-blue-600 hover:text-blue-800">Read more →</button>
    </article>
    ))}
    </section>
    </div>
    );
    }