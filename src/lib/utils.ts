import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import api from 'axios';

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
