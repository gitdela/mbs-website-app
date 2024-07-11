import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import api from 'axios';
import Image from 'next/image';
import { urlFor } from '../../sanity';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default api;

export function removeUndefinedAndNull<T>(obj: T | any): T {
  // Use Object.entries to get key-value pairs of the object
  const filteredObject = Object.fromEntries(
    Object.entries(obj).filter(
      ([_, value]) => value !== undefined || value !== null || value !== ''
    )
  );
  return filteredObject as T;
}

export const formatNumber = (number: any) => {
  const formattedNumber = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(number);
  return formattedNumber;
};

export const myPortableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <Image
        src={urlFor(value).url() ?? ''}
        alt={value?.alt ?? ''}
        loading='lazy'
      />
    ),
    callToAction: ({ value, isInline }: any) =>
      isInline ? (
        <a href={value.url}>{value.text}</a>
      ) : (
        <div className='callToAction'>{value.text}</div>
      ),
  },

  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith('/')
        ? 'noreferrer noopener'
        : undefined;
      return (
        <a href={value.href} rel={rel}>
          {children}
        </a>
      );
    },
    em: ({ children }: any) => (
      <em className='text-gray-600 font-semibold'>{children}</em>
    ),
    strong: ({ children }: any) => (
      <strong className=' font-semibold'>{children}</strong>
    ),
    underline: ({ children }: any) => (
      <span className='underline'>{children}</span>
    ),
  },
  block: {
    // Ex. 1: customizing common block types
    h1: ({ children }: any) => <h1 className='text-2xl'>{children}</h1>,
    h2: ({ children }: any) => <h2 className='text-3xl '>{children}</h2>,
    h3: ({ children }: any) => <h3 className='text-4xl'>{children}</h3>,
    h4: ({ children }: any) => <h4 className='text-5xl'>{children}</h4>,
    h5: ({ children }: any) => <h5 className='text-6xl'>{children}</h5>,
    blockquote: ({ children }: any) => <blockquote>{children}</blockquote>,
    normal: ({ children }: any) => (
      <span className='text-gray-600'>{children}</span>
    ),
  },
  list: {
    // Ex. 1: customizing common list types
    bullet: ({ children }: any) => <ul className='mt-xl'>{children}</ul>,
    number: ({ children }: any) => <ol className='mt-lg'>{children}</ol>,
  },
};
