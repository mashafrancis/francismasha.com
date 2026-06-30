import { type ClassValue, clsx, twMerge } from "cnfast";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));
