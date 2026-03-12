import { useState } from "react";

export function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);
  const waLink = "https://wa.me/1234567890?text=Hi%2C%20I%27m%20interested%20in%20a%20website%20for%20my%20restaurant";

  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group"
      aria-label="Chat with us on WhatsApp about your restaurant website"
    >
      {/* Tooltip */}
      <span
        className={`hidden sm:block bg-white text-charcoal text-sm font-medium py-2 px-4 rounded-full shadow-lg transition-all duration-300 whitespace-nowrap ${
          hovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4 pointer-events-none"
        }`}
      >
        Chat with us about your restaurant website
      </span>

      {/* Button */}
      <div className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-xl hover:shadow-[#25D366]/50 hover:scale-110 transition-all duration-300 relative">
        {/* Pulse animation */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30"></span>
        {/* WhatsApp SVG icon */}
        <svg viewBox="0 0 32 32" className="w-8 h-8 fill-white relative z-10" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 2.938C8.816 2.938 2.938 8.816 2.938 16c0 2.32.625 4.492 1.71 6.367L2.938 29.063l6.902-1.683A13.015 13.015 0 0 0 16 29.062c7.184 0 13.063-5.878 13.063-13.063 0-7.184-5.879-13.062-13.063-13.062zm0 23.625a10.545 10.545 0 0 1-5.57-1.593l-.398-.238-4.094.997.985-4.012-.26-.414A10.54 10.54 0 0 1 5.438 16c0-5.835 4.726-10.563 10.563-10.563 5.836 0 10.562 4.728 10.562 10.563S21.836 26.563 16 26.563zm5.785-7.894c-.316-.158-1.87-.919-2.16-1.024-.29-.105-.5-.158-.71.159-.21.316-.814 1.024-.998 1.234-.183.21-.368.237-.684.079-.316-.159-1.332-.491-2.537-1.566-.937-.838-1.57-1.873-1.754-2.189-.184-.317-.02-.487.138-.644.142-.142.317-.368.475-.553.157-.184.21-.316.315-.526.106-.21.053-.395-.026-.553-.08-.158-.712-1.712-.975-2.343-.256-.614-.515-.531-.71-.541l-.605-.01c-.21 0-.552.079-.84.396-.29.316-1.103 1.076-1.103 2.624s1.13 3.044 1.286 3.254c.158.21 2.22 3.39 5.38 4.756.753.325 1.34.52 1.797.665.755.24 1.442.207 1.985.126.605-.09 1.87-.765 2.134-1.504.264-.74.264-1.374.184-1.504-.08-.131-.289-.21-.605-.369z" />
        </svg>
      </div>
    </a>
  );
}
