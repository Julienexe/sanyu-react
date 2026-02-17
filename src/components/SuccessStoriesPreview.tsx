import { Heart, Users, BookOpen, TrendingUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function SuccessStoriesPreview() {
  const impacts = [
    {
      icon: Users,
      number: '250+',
      label: 'Single Mothers Supported',
      description: 'Provided with essential resources and skills training'
    },
    {
      icon: BookOpen,
      number: '400+',
      label: 'Children Back in School',
      description: 'Received uniforms, supplies, and educational support'
    },
    {
      icon: Heart,
      number: '120+',
      label: 'Mental Health Sessions',
      description: 'Counseling and support group meetings conducted'
    },
    {
      icon: TrendingUp,
      number: '85%',
      label: 'Improved Quality of Life',
      description: 'Reported positive changes in their circumstances'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-red-600">Our Impact & Success Stories</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-8" />
          <p className="text-gray-700 max-w-3xl mx-auto">
            Since 2024, we've been transforming lives across Masaka and Kampala. These numbers represent real people—mothers who've found hope, children who've returned to school, and families who've discovered new possibilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {impacts.map((impact, index) => {
            const Icon = impact.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-red-600" />
                </div>
                <div className="mb-2 text-red-600">{impact.number}</div>
                <h3 className="mb-2">{impact.label}</h3>
                <p className="text-gray-600 text-sm">
                  {impact.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="mb-4">Stories of Hope and Transformation</h3>
            <p className="text-gray-700 mb-6">
              Behind every statistic is a story of resilience and hope. From Jane, who started her own small business, to Sarah, who's now able to send all three of her children to school—these stories inspire us to continue our mission.
            </p>
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors"
            >
              Read Full Success Stories
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="bg-red-50 p-6 rounded-lg">
            <h4 className="mb-2 text-red-600">Education Access</h4>
            <p className="text-gray-700 text-sm">
              We've equipped children with school supplies, uniforms, and shoes, removing barriers to education and opening doors to brighter futures.
            </p>
          </div>
          <div className="bg-red-50 p-6 rounded-lg">
            <h4 className="mb-2 text-red-600">Economic Empowerment</h4>
            <p className="text-gray-700 text-sm">
              Through skills training and small business support, mothers are gaining financial independence and building sustainable livelihoods.
            </p>
          </div>
          <div className="bg-red-50 p-6 rounded-lg">
            <h4 className="mb-2 text-red-600">Community Support</h4>
            <p className="text-gray-700 text-sm">
              Support groups and counseling services are creating strong networks where mothers find encouragement and practical help.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
