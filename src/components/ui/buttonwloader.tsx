/* eslint-disable react/display-name */
import clsx from 'clsx';
import { Loader } from 'lucide-react';
import React, { forwardRef } from 'react';

type Props = {
  title: string;
  tw_color?: string;
  tw_width?: string;
  variant?: 'primary' | 'secondary' | 'custom';
  warning?: true;
  loading?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, Props>(
  (
    {
      title = 'Delete',
      variant,
      loading,
      warning,
      tw_width,
      tw_color,
      ...props
    },
    ref
  ) => {
    const isPrimary = variant === 'primary';
    const isSecondary = variant === 'secondary';
    const isCustom = variant === 'custom';
    const isWarning = warning === true;

    return (
      <>
        <button
          ref={ref}
          {...props}
          className={clsx(
            isPrimary &&
              `px-3 py-2.5 ${
                isWarning
                  ? 'bg-red-500 text-white '
                  : 'bg-indigo-500 text-white '
              } text-sm font-semibold rounded`,
            isSecondary &&
              `px-3 py-2.5 ${
                isWarning ? 'text-red-500 bg-white ' : 'text-gray-500 bg-white'
              }   border border-gray-300 shadow font-semibold text-sm rounded`,
            isCustom &&
              `px-3 py-2.5 ${
                isWarning
                  ? 'bg-red-500 text-white '
                  : ` ${tw_color} text-white `
              } text-sm font-semibold rounded`,
            `"disabled:bg-indigo-300  ${tw_width} `
          )}
        >
          {!loading && title}
          {loading && (
            <div className='flex w-full items-center justify-center'>
              {/* <Spinner /> */}
              <Loader color='blue' size='sm' />
            </div>
          )}
        </button>
      </>
    );
  }
);

export default Button;
