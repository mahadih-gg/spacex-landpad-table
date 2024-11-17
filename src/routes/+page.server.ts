import 'dotenv/config';

export const load = async () => {

  const fetchLandingPads = async () => {

    const baseUrl = process.env.BASE_URL;

    const response = await fetch(`${baseUrl}/landpads`);
    return await response.json();
  }

  return {
    landingPads: await fetchLandingPads()
  }
}
