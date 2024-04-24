import React from "react";

const sizes = {
  "3xl": "text-[50px] font-black md:text-[46px] sm:text-[40px]",
  "2xl": "text-5xl font-bold md:text-[44px] sm:text-[38px]",
  xl: "text-4xl font-bold md:text-[34px] sm:text-[32px]",
  s: "text-base font-bold",
  md: "text-lg font-bold",
  xs: "text-sm font-bold",
  lg: "text-2xl font-bold md:text-[22px]",
};

const Heading = ({ children, className = "", size = "md", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-gray-600_01 font-publicsans ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
