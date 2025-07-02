import axios from 'axios';
import scrapeSingleAnime from '@/lib/scrapeSingleAnime';
import type { anime as animeType } from '@/types/types';

const { BASEURL } = process.env;

const anime = async (slug: string): Promise<animeType | undefined> => {
  try {
    if (!BASEURL) throw new Error("BASEURL tidak terdefinisi");

    const { data } = await axios.get(`${BASEURL}/anime/${slug}`);
    const result = scrapeSingleAnime(data);

    if (!result) throw new Error("Parsing gagal atau anime tidak ditemukan");

    return result;
  } catch (err) {
    console.error("Gagal fetch atau parsing:", err);
    return undefined;
  }
};

export default anime;
