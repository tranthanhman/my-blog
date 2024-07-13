import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'contained' | 'outline' | 'link';
  className?: string;
  [x: string]: any; // This allows for any other prop to be passed
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'contained',
  className,
  ...rest
}) => {
  return (
    <button
      className={twMerge(
        'px-3 py-2',
        variant === 'contained' && 'bg-blue-500 text-white',
        variant === 'outline' && 'border border-blue-500 text-blue-500',
        variant === 'link' && 'text-blue-500 underline',
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
