import { Act } from "../api";

export function generateId({ ids }: { ids: string[] }) {
  return String(Math.max(...ids.map((id) => Number(id))) + 1);
}
