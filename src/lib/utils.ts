import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function html(strings: any, ...values: any) {
  let result = "";
  for (let i = 0; i < strings.length; i++) {
    result += strings[i];
    if (i < values.length) {
      result += values[i];
    }
  }
  return result;
}

export const buildQuery = (
  obj: Record<string, string | number | string[] | undefined>
) => {
  const urlSearchParams = new URLSearchParams();
  for (let [param, value] of Object.entries(obj)) {
    if (Array.isArray(value)) {
      for (let v of value) {
        urlSearchParams.append(param, v);
      }
    } else {
      if (value !== undefined) {
        urlSearchParams.append(param, `${value}`);
      }
    }
  }
  return urlSearchParams.toString();
};
