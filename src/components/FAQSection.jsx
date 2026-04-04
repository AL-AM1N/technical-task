import React, { useState } from "react";
import exampleImage from "./../assets/ceo_woman_portrait.png"; // replace with your image path

const faqData = [
  {
    question: "What is artificial intelligence (AI)?",
    answer:
      "Explore how we transform ideas into extraordinary digital experiences. Each case study is a testament to our design thinking, strategic approach, and creative execution.",
  },
  {
    question: "How does AI improve business efficiency?",
    answer:
      "Explore how we transform ideas into extraordinary digital experiences. Each case study is a testament to our design thinking, strategic approach, and creative execution.",
  },
  {
    question: "How long does AI implementation take?",
    answer:
      "Explore how we transform ideas into extraordinary digital experiences. Each case study is a testament to our design thinking, strategic approach, and creative execution.",
  },
  {
    question: "What industries can benefit from AI?",
    answer:
      "Explore how we transform ideas into extraordinary digital experiences. Each case study is a testament to our design thinking, strategic approach, and creative execution.",
  },
  {
    question: "What are the costs of AI solutions?",
    answer:
      "Explore how we transform ideas into extraordinary digital experiences. Each case study is a testament to our design thinking, strategic approach, and creative execution.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto p-10 pt-20 flex flex-col gap-10">
      {/* Top Portfolio Section */}
      <div className="w-full">
        <span className="text-xs tracking-[0.2em] font-bold text-black uppercase mb-4 block">
          FAQ & GET ANSWER
        </span>
        <div className="divider divider-start w-full"></div>
      </div>

      {/* Main FAQ + Image Section */}
      <div className="flex flex-col md:flex-row gap-10">
        {/* Left: Main Image, centered */}
        <div className="md:flex-1 hidden md:flex flex-col justify-end items-start">
          <p className="pr-10 pb-4 text-gray-500">
            Don’t found anything yet. Feel free to ask anything.{" "}
            <span className="underline text-black">Let’s Talk</span>
          </p>
          <img
            src={exampleImage}
            alt="Team"
            className="rounded-lg object-cover w-64"
          />
        </div>

        {/* Right: FAQ Items */}
        <div className="md:flex-2 w-full">
          <h2 className="text-3xl font-semibold mb-8">
            Have more questions? <br /> We’ve answers.
          </h2>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
              >
                {/* Question */}
                <button
                  className="w-full px-6 py-4 flex justify-between items-center text-left"
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{faq.question}</span>
                  <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
                </button>

                {/* Answer */}
                {openIndex === index && (
                  <div className="flex px-6 pb-4 gap-6 items-center">
                    {/* Left: Image */}
                    <img
                      src={exampleImage}
                      alt="FAQ"
                      className="w-32 rounded-lg object-cover"
                    />

                    {/* Right: Text + button */}
                    <div className="flex-1 flex flex-col">
                      <p className="text-gray-700">{faq.answer}</p>
                      <button className="mt-4 px-4 py-1 bg-black text-white rounded-full text-sm w-max">
                        GET IN TOUCH
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;