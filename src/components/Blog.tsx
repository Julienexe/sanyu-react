import { Calendar, User, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  image: string;
  category: string;
}

export function Blog() {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Bringing Education to 50 Children in Masaka",
      excerpt: "This month, we successfully distributed school supplies including books, uniforms, and shoes to 50 vulnerable children in Masaka district. Their smiles reminded us why we do this work.",
      author: "Edron",
      date: "December 15, 2024",
      image: "https://images.unsplash.com/photo-1761208662441-9ba3264ca7fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxVZ2FuZGElMjBjaGlsZHJlbiUyMGVkdWNhdGlvbnxlbnwxfHx8fDE3NjcwMzA3MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Education"
    },
    {
      id: 2,
      title: "Supporting Single Mothers: A Story of Hope",
      excerpt: "Meet Jane, a single mother of three who received support from our program. Today, she runs her own small business and can provide for her children's basic needs.",
      author: "Grace Namubiru",
      date: "December 8, 2024",
      image: "https://images.unsplash.com/photo-1724491801484-efca6936866a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwbW90aGVyJTIwY2hpbGR8ZW58MXx8fHwxNjcwNzA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Success Stories"
    },
    {
      id: 4,
      title: "Planning for Clean Water: Our Vision Takes Shape",
      excerpt: "We're excited to share updates on our plans to build boreholes for clean water access. This critical project will serve over 500 families in remote communities.",
      author: "David Mukasa",
      date: "November 22, 2024",
      image: "https://images.unsplash.com/photo-1760873059715-7c7cfbe2a2c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMHdlbGwlMjBjb21tdW5pdHl8ZW58MXx8fHwxNzY3MDAxNTU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Projects"
    },
    {
      id: 5,
      title: "Back to School Drive Success",
      excerpt: "Thanks to generous donors, we provided complete school supply packages to 75 children. Education is the foundation for breaking the cycle of poverty.",
      author: "Grace Namubiru",
      date: "November 15, 2024",
      image: "https://images.unsplash.com/photo-1683879025805-a268b690613e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBzdXBwbGllcyUyMGJvb2tzfGVufDF8fHx8MTc2Njk1OTcxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Education"
    },
    {
      id: 6,
      title: "Community Gathering: Celebrating Together",
      excerpt: "Our annual community gathering brought together families we've supported throughout the year. It's moments like these that show the true meaning of Sanyu - happiness.",
      author: "Edron",
      date: "November 8, 2024",
      image: "https://images.unsplash.com/photo-1595790527813-6a76c994a1dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBnYXRoZXJpbmclMjBVZ2FuZGF8ZW58MXx8fHwxNzY3MDMwNzAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Events"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="mb-4 text-red-600">Our Blog</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-8" />
          <p className="text-gray-700 max-w-3xl mx-auto">
            Stay updated with stories from the field, success stories, and news about our ongoing projects and initiatives.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                </div>

                <h3 className="mb-3 group-hover:text-red-600 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <button className="text-red-600 hover:text-red-700 flex items-center gap-2 transition-colors group/btn">
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-red-600 rounded-lg p-8 text-center text-white">
          <h3 className="mb-4 text-white">Subscribe to Our Newsletter</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Get the latest updates, stories, and news delivered directly to your inbox.
          </p>
          <div className="max-w-md mx-auto flex-col-sm md:flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-700"
            />
            <div className="h-5"></div>
            <button className="px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-md transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
