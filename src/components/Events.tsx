import { Calendar, MapPin, Clock, Users } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  attendees?: number;
  image: string;
  status: 'upcoming' | 'past';
}

export function Events() {
  const events: Event[] = [
    
    {
      id: 3,
      title: "Fundraising Gala 2025",
      description: "An evening of celebration to raise funds for our clean water borehole project. Includes dinner, entertainment, and inspiring stories from the community.",
      date: "March 20, 2025",
      time: "6:00 PM - 10:00 PM",
      location: "Kampala Hotel Conference Hall",
      attendees: 200,
      image: "https://images.unsplash.com/photo-1595790527813-6a76c994a1dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBnYXRoZXJpbmclMjBVZ2FuZGF8ZW58MXx8fHwxNzY3MDMwNzAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      status: 'upcoming'
    },
    {
      id: 5,
      title: "Back to School Distribution",
      description: "Successfully distributed school supplies, uniforms, and shoes to 75 children preparing for the new school term. Thank you to all who made it possible!",
      date: "November 20, 2024",
      time: "9:00 AM - 3:00 PM",
      location: "Kampala Distribution Center",
      attendees: 120,
      image: "https://images.unsplash.com/photo-1683879025805-a268b690613e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBzdXBwbGllcyUyMGJvb2tzfGVufDF8fHx8MTc2Njk1OTcxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      status: 'past'
    },
  ];

  const upcomingEvents = events.filter(e => e.status === 'upcoming');
  const pastEvents = events.filter(e => e.status === 'past');

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="mb-4 text-red-600">Events</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-8" />
          <p className="text-gray-700 max-w-3xl mx-auto">
            Join us at our upcoming events or check out highlights from past gatherings. Every event is an opportunity to make a difference.
          </p>
        </div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <h3 className="mb-8">Upcoming Events</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <div 
                key={event.id} 
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow border-2 border-red-100 group"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <ImageWithFallback
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">
                      Upcoming
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h4 className="mb-3 text-gray-900">{event.title}</h4>
                  
                  <p className="text-gray-600 mb-4 text-sm">
                    {event.description}
                  </p>

                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-red-600" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-red-600" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-red-600" />
                      <span>{event.location}</span>
                    </div>
                    {event.attendees && (
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-red-600" />
                        <span>Expected: {event.attendees} attendees</span>
                      </div>
                    )}
                  </div>

                  <button className="w-full px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors">
                    Register to Attend
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div>
          <h3 className="mb-8">Past Events</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event) => (
              <div 
                key={event.id} 
                className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <ImageWithFallback
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-gray-600 text-white px-3 py-1 rounded-full text-sm">
                      Past Event
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h4 className="mb-3 text-gray-900">{event.title}</h4>
                  
                  <p className="text-gray-600 mb-4 text-sm">
                    {event.description}
                  </p>

                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-gray-500" />
                      <span>{event.location}</span>
                    </div>
                    {event.attendees && (
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-gray-500" />
                        <span>{event.attendees} attended</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-red-50 rounded-lg p-8 text-center">
          <h3 className="mb-4">Want to Stay Updated on Events?</h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter or contact us to learn more about volunteering and attending our events.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
