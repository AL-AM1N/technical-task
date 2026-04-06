import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import exampleImage from "./../assets/ceo_woman_portrait.png";

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

  const containerVariants = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  };

  return (
    <div className="max-w-7xl mx-auto p-10 pt-20 flex flex-col gap-10">
      {/* Top Portfolio Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-full"
      >
        <span className="text-xs tracking-[0.2em] font-bold text-black uppercase mb-4 block">
          FAQ & GET ANSWER
        </span>
        <div className="divider divider-start w-full"></div>
      </motion.div>

      {/* Main FAQ + Image Section */}
      <div className="flex flex-col md:flex-row gap-10">
        {/* Left: Main Image, centered */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:flex-1 hidden md:flex flex-col justify-end items-start"
        >
          <p className="pr-10 pb-4 text-gray-500">
            Don’t found anything yet. Feel free to ask anything.{" "}
            <span className="underline text-black">Let’s Talk</span>
          </p>
          <motion.img
            whileHover={{ scale: 1.05 }}
            src={exampleImage}
            alt="Team"
            className="rounded-lg object-cover w-64 shadow-xl"
          />
        </motion.div>

        {/* Right: FAQ Items */}
        <div className="md:flex-2 w-full">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-semibold mb-8"
          >
            Have more questions? <br /> We’ve answers.
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
              >
                {/* Question */}
                <button
                  className="w-full px-6 py-4 flex justify-between items-center text-left"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-medium">{faq.question}</span>
                  <motion.span
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    className="text-xl"
                  >
                    {openIndex === index ? "−" : "+"}
                  </motion.span>
                </button>

                {/* Answer */}
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="flex px-6 pb-6 gap-6 items-center">
                        {/* Left: Image */}
                        <motion.img
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          src={exampleImage}
                          alt="FAQ"
                          className="w-32 rounded-lg object-cover shadow-md"
                        />

                        {/* Right: Text + button */}
                        <div className="flex-1 flex flex-col">
                          <p className="text-gray-700 text-sm leading-relaxed">{faq.answer}</p>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="mt-4 px-4 py-2 bg-black text-white rounded-full text-xs font-bold w-max"
                          >
                            GET IN TOUCH
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;