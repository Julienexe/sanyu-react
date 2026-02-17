import { Users, TrendingUp, Heart, Baby } from 'lucide-react';

export function Statistics() {
  const stats = [
    {
      icon: Users,
      number: '1.8M',
      label: 'Single Mothers in Uganda',
      description: 'Living in poverty and struggling to meet basic needs'
    },
    {
      icon: Baby,
      number: '45%',
      label: 'Children in Vulnerable Homes',
      description: 'Lack access to education and healthcare'
    },
    {
      icon: Heart,
      number: '73%',
      label: 'Without Adequate Support',
      description: 'Single mothers face social and economic challenges'
    },
    {
      icon: TrendingUp,
      number: '60%',
      label: 'Below Poverty Line',
      description: 'Single-parent households struggle with daily survival'
    }
  ];

  return (
    <section className="py-20 bg-red-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-white">The Reality in Uganda</h2>
          <div className="w-20 h-1 bg-white mx-auto mb-8" />
          <p className="text-white/90 max-w-3xl mx-auto">
            Single mothers in Uganda face overwhelming challenges. Understanding the scope of the crisis drives our commitment to make a lasting difference.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="mb-2">{stat.number}</div>
                <h3 className="mb-2 text-white">{stat.label}</h3>
                <p className="text-white/80 text-sm">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-white/90 text-sm italic max-w-2xl mx-auto">
            These statistics highlight the urgent need for support. Every donation and volunteer hour helps change these numbers for the better.
          </p>
        </div>
      </div>
    </section>
  );
}
