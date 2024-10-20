"use client"


import { useRouter } from 'next/navigation';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
  });

interface ButtonProps {
  label: string; // Button ka label
  link: string; // Navigate karne ke liye URL
  bgColor: string; // Background color (required)
  textColor: string; // Text color (required)
  hoverBgColor: string; // Hover background color (required)
  hoverTextColor: string; // Hover text color (required)
  
}

// Button component definition without using React.FC
const ProjectButton= ({
  label,
  link,
  bgColor,
  textColor,
  hoverBgColor,
  hoverTextColor,
}: ButtonProps) => {
  const router = useRouter(); // Router ko initialize karna

  // Click hone par URL par navigate karne ke liye function
  const handleClick = () => {
    router.push(link); // Button click hone par URL par navigate karna
  };

  return (
    <button
      onClick={handleClick} // Button par click hone par handleClick ko call karna
      className={`${bgColor} ${textColor} ${hoverBgColor} ${hoverTextColor} px-3 py-2 rounded-lg transition duration-300 ${roboto.className} text-sm`}
    >
      {label} {/* Button label display karna */}
    </button>
  );
};

export default ProjectButton;
