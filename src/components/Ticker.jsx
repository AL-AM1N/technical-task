const text = ' See how our team combines creativity, technology, and strategy  '

export default function Ticker() {
  const repeated = text.repeat(6)

  return (
    <div className=" py-5 border-y border-gray-100 overflow-hidden my-3 text-6xl">
      <div className="ticker-animate whitespace-nowrap">
        {[...Array(2)].map((_, i) => (
          <span key={i} className="text-4xl md:text-8xl font-bold text-gray-900 tracking-tight pr-8">
            {repeated}
          </span>
        ))}
      </div>
    </div>
  )
}
