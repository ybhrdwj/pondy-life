// components/ContentGrid.js

export default function ContentGrid({ title, emoji, items }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4">
      <h2 className="flex items-center font-semibold text-lg mb-2 relative">
        <span>{emoji}</span>
        <span className="ml-2 text-slate-700">{title}</span>
        {/* Absolute-positioned full-width underline for the heading */}
        <div className="absolute bottom-0 left-0 w-full border-b border-gray-300"></div>
      </h2>
      <ul className="pl-4 counter-reset">
        {items.map((item, index) => (
          <li key={index} className="mb-1 counter-increment group">
            <a href={item.href} className="flex items-center no-underline" target="_blank">
              {/* Counter */}
              <span className="counter text-slate-300 mr-2"></span>
              {/* Text with conditional underline on hover */}
              <span className="text-slate-600 underline underline-offset-4">{item.text}</span>
              {/* Separate span for the arrow to prevent it from being underlined */}
              <span className="ml-2 text-slate-600 transform rotate-[-45deg] inline-block group-hover:no-underline">→</span>
            </a>
            {/* Full-width underline for each list item */}
            <div className="absolute bottom-0 left-0 w-full "></div>
          </li>
        ))}
      </ul>
    </div>
  );
}
