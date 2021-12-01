const base_url = 'https://api.spaceflightnewsapi.net/v3';

export const requestArticles = async () => {
  const response = await fetch(`${base_url}/articles`);

  if (!response.ok) {
    throw new Error(`${response.status} - ${response.statusText}`);
  }

  return response.json();
}