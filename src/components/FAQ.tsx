import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is Sanyu for the Needy?",
      answer: "Sanyu for the Needy is a foundation dedicated to supporting single mothers and vulnerable children in Uganda. We provide essential needs like clothes, shoes, books, and access to healthcare. 'Sanyu' means happiness in Luganda, reflecting our mission to bring joy and hope to those in need."
    },
    {
      question: "Where do you operate?",
      answer: "We primarily operate in Masaka and Kampala, Uganda. We started in Masaka in 2024 and have since extended our services to Kampala and surrounding communities in central Uganda."
    },
    {
      question: "How can I donate?",
      answer: "You can donate by clicking the 'Donate' button in our navigation menu or footer. We accept various forms of donations and every contribution, no matter the size, helps us provide essential support to families in need."
    },
    {
      question: "Can I volunteer with Sanyu for the Needy?",
      answer: "Yes! We welcome volunteers who are passionate about making a difference. Please contact us through our contact form or email us at info@sanyufoundation.org to learn about volunteer opportunities."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We provide clothing, shoes, books, school supplies, and support for accessing healthcare. Our long-term vision includes building boreholes for clean water access and constructing a hospital to provide affordable healthcare to the community."
    },
    {
      question: "How can I stay updated on your work?",
      answer: "You can contact us through our website to learn more about our ongoing projects and impact. We're always happy to share updates about how donations are making a difference in the lives of single mothers and children."
    },
    {
      question: "Is Sanyu for the Needy a registered organization?",
      answer: "For information about our registration and legal status, please contact us directly at info@sanyufoundation.org. We're committed to transparency and accountability in all our operations."
    },
    {
      question: "Who founded Sanyu for the Needy?",
      answer: "The organization was founded by Mr. Edron, who was inspired by his own experiences growing up with a single mother and his late grandmother Sanyu. His personal journey of overcoming hardship drives our mission to help others in similar situations."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-red-600">Frequently Asked Questions</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-8" />
          <p className="text-gray-700">
            Find answers to common questions about our organization and how you can get involved.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden transition-all"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-gray-900 pr-8">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-red-600 flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-red-600 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-red-50 rounded-lg p-8">
          <h3 className="mb-3">Still have questions?</h3>
          <p className="text-gray-600 mb-6">
            We're here to help. Feel free to reach out to us directly.
          </p>
          <Link
            to="/contact"
            className="inline-block px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}