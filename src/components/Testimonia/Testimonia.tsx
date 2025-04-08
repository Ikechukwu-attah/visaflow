import { FaStar } from "react-icons/fa";
import LandingSection from "../../layouts/LandingSection";

const testimonials = [
  {
    id: 1,
    name: "Alice Johnson",
    review:
      "VisFlow made my visa process seamless! The AI guidance was incredibly helpful.",
    rating: 5,
  },
  {
    id: 2,
    name: "Mark Robinson",
    review:
      "Very professional service! The real-time visa tracking kept me updated at all times.",
    rating: 5,
  },
  {
    id: 3,
    name: "Sophia Martinez",
    review:
      "I was worried about my application, but the expert support gave me confidence.",
    rating: 4,
  },
  {
    id: 4,
    name: "David Lee",
    review:
      "Fast, accurate, and reliable! The AI-driven recommendations were spot on.",
    rating: 5,
  },
  {
    id: 5,
    name: "Emma Wilson",
    review:
      "A game-changer for visa applicants! I highly recommend VisFlow to everyone.",
    rating: 5,
  },
  {
    id: 6,
    name: "Noah Carter",
    review:
      "Smooth and hassle-free experience. The AI-powered insights were very useful.",
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <LandingSection className="bg-white py-20" id="testimonials">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">What Our Users Say</h2>
        <p className="text-gray-600 mt-2">
          Hear from those who used VisFlow to streamline their immigration
          journey.
        </p>
      </div>

      {/* Testimonial Grid for Desktop, Horizontal Scroll for Mobile */}
      <div className="flex gap-6 overflow-x-auto md:grid md:grid-cols-3 md:gap-8 scrollbar-hide">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="p-6 bg-gray-100 rounded-lg shadow-lg flex flex-col justify-between min-w-[300px] md:w-auto"
          >
            <p className="text-lg text-gray-700">"{testimonial.review}"</p>
            <div className="mt-4">
              <p className="font-semibold text-gray-900">{testimonial.name}</p>
              {/* Star Rating */}
              <div className="flex mt-2">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <FaStar key={index} className="text-yellow-500" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </LandingSection>
  );
};

export default Testimonials;
