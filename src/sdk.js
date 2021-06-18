import slugify from "slugify";
// TODO pass this from the .env
const ApiKey = "189bd960f9c44c258e1545b7dc2a3980";
const BaseUrl = "https://newsapi.org/v2/top-headlines";
const defaultCoutry = "fr";

/**
 * Fetch all top headlines from a specify country
 * @param  country Must be an ISO code format
 */
export async function fetchAll(country = defaultCoutry) {
  const res = await fetch(`${BaseUrl}?country=${country}&apiKey=${ApiKey}`);
  return await res.json();
}

/**
 * News Api doesn't allow to fetch only 1 item per ID
 * Fetch all top headlines from a specify country
 * @param country Must be an ISO code format
 * @param slug slug of the title
 */
export async function fetchOne(slug, country = defaultCoutry) {
  const data = await fetchAll();
  let article = null;
  if (data) {
    article = data.articles.find(
      (e) => slugify(e.title, { lower: true, strict: true }) === slug
    );
  }

  return article;
}
