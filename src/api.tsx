import useSWR from "swr";
import { fetchAPI } from "src/utils/fetchAPI";

export type KeyLetter = {
  _id: string;
  _partitionKey: string;
  label: string;
  unitPrice: number;
  unitPriceDom: number;
};

export type Coefficient = {
  _id: string;
  value: number;
};

export type Increase = {
  _id: string;
  _partitionKey: string;
  label: string;
  unitPrice: number;
  unitPriceDom: number;
};

type Option = {
  label: string;
  value: string;
};

export type LinkedActType = {
  _id: string;
  linkedQuotations: (Option & Quotation)[];
  quotations: Quotation[];
};

export type Quotation = {
  _id: string;
  name: string;
  keyLetter: KeyLetter & Option;
  coefficient: Coefficient & Option;
  increase?: Increase & Option;
};

export function useGetQuotation() {
  return useSWR<Quotation[]>("/infi/quotation", (url) =>
    fetchAPI(url, { method: "POST" }).then((res) => res.json())
  );
}

export function useGetKeyLetters() {
  return useSWR<KeyLetter[]>("/infi/key-letters", (url) =>
    fetchAPI(url, { method: "POST" }).then((res) => res.json())
  );
}

export function useGetCoefficients() {
  return useSWR<Coefficient[]>("/infi/coefficients", (url) =>
    fetchAPI(url, { method: "POST" }).then((res) => res.json())
  );
}

export function useGetIncreases() {
  return useSWR<Increase[]>("/infi/increases", (url) =>
    fetchAPI(url, { method: "POST" }).then((res) => res.json())
  );
}

export function useGetLinkedActs() {
  return useSWR<LinkedActType[]>("/infi/linked-quotation", (url) =>
    fetchAPI(url, { method: "POST" }).then((res) => res.json())
  );
}
