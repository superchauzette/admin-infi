import useSWR from "swr";
import { fetchAPI } from "src/utils/fetchAPI";

type Option = {
  label: string;
  value: string;
};

type LinkedActType = {
  _id: string;
  acts: (Option & Act)[];
  cotations: {
    keyLetter: Option;
    coeff: Option;
    increase: Option;
  }[];
};

export type Act = {
  _id: string;
  title: string;
  keyLetter: string;
  coeff: string;
  increase?: string;
};

export function useGetActs() {
  return useSWR<Act[]>("/infi/carenomenclature", (url) =>
    fetchAPI(url, { method: "POST" }).then((res) => res.json())
  );
}

export function useGetKeyLetters() {
  return useSWR<{ _id: string; label: string }[]>("/infi/key-letters", (url) =>
    fetchAPI(url, { method: "POST" }).then((res) => res.json())
  );
}

export function useGetCoefficients() {
  return useSWR<{ _id: string; value: string }[]>("/infi/coefficients", (url) =>
    fetchAPI(url, { method: "POST" }).then((res) => res.json())
  );
}

export function useGetIncreases() {
  return useSWR<{ _id: string; label: string }[]>("/infi/increases", (url) =>
    fetchAPI(url, { method: "POST" }).then((res) => res.json())
  );
}

export function useGetLinkedActs() {
  return useSWR<LinkedActType[]>("/infi/linked-acts", (url) =>
    fetchAPI(url, { method: "POST" }).then((res) => res.json())
  );
}
