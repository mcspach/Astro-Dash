export type ApiRequestOptions = RequestInit;

export async function fetchJson<T>(input: RequestInfo | URL, init?: ApiRequestOptions): Promise<T> {
  const response = await fetch(input, init);

  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`);
  }

  return response.json() as Promise<T>;
}
