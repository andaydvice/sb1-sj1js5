import { Search, BadgeCheck, PiggyBank, Building } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Property Search',
    description: 'Access to off-market properties and comprehensive market research to find the perfect match for your needs.'
  },
  {
    icon: BadgeCheck,
    title: 'Due Diligence',
    description: 'Thorough property inspection, pest and building reports, and contract review to ensure a sound investment.'
  },
  {
    icon: PiggyBank,
    title: 'Negotiation',
    description: 'Expert negotiation to secure the best possible price and terms for your property purchase.'
  },
  {
    icon: Building,
    title: 'Property Management',
    description: 'Ongoing support and property management services to maximize your investment returns.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Services</h2>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive buyer's agent services tailored to your needs
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                <div className="inline-flex p-3 bg-blue-600 rounded-lg text-white group-hover:scale-110 transition">
                  <service.icon className="h-6 w-6" />
                </div>
              </div>
              <div className="pt-4">
                <h3 className="text-xl font-semibold text-gray-900 text-center">{service.title}</h3>
                <p className="mt-4 text-gray-600 text-center">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}