import 'dotenv/config';

export const load = async () => {

  const fetchLandPads = async () => {

    const baseUrl = process.env.BASE_URL;

    const response = await fetch(`${baseUrl}/landpads`);
    return await response.json();
  }

  return {
    landPads: await fetchLandPads()
  }
}
