import { site } from "../data/site";

function setAttr(selector: string, attribute: string, value: string) {
  const element = document.querySelector(selector);
  if (element) element.setAttribute(attribute, value);
}

type PageMeta = {
  title: string;
  description: string;
  /** Absolute path on this site, starting with "/". */
  path: string;
};

/**
 * Keeps the document head in sync with the current client-side route so that
 * shared links, crawlers and social previews point to the real page.
 */
export function applyMeta({ title, description, path }: PageMeta) {
  const url = `${site.url}${path === "/" ? "/" : path}`;

  document.title = title;
  setAttr('meta[name="description"]', "content", description);
  setAttr('link[rel="canonical"]', "href", url);

  setAttr('meta[property="og:title"]', "content", title);
  setAttr('meta[property="og:description"]', "content", description);
  setAttr('meta[property="og:url"]', "content", url);

  setAttr('meta[name="twitter:title"]', "content", title);
  setAttr('meta[name="twitter:description"]', "content", description);
}
