import { clsx as type, ClassValue } from 'cnfast';
import { clsx } from 'cnfast';
import { twMerge } from 'cnfast';

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
