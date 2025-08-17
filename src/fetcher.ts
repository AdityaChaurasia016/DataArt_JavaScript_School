import { EventData } from "./types.js";

export async function fetchEvents(url: string): Promise<EventData[]> {
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to load events.json");
  return res.json() as Promise<EventData[]>;
}
