import React from 'react';

const Button = ({
  customClass,
  onClick,
  label,
}: {
  customClass: string;
  onClick?: () => void;
  label: string;
}) => {
  return (
    <button className={`${customClass} font-bold`}>{label}</button>
    // <button
    //   className={`${customClass} bg-[#e7e7e788] text-white px-4 py-1 border-[1px] rounded-md`}
    //   onClick={onClick}
    // >
    //   {label}
    // </button>
  );
};

export default Button;
