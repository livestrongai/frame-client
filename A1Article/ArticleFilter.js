export default function Search (article, SearchString) {
  // nullish coalescing operator
  const query = (SearchString ?? '').toLowerCase()
  if (!article || !query) return false
  if (article.title.toLowerCase().includes(query)) return true
  if (article.summary.toLowerCase().includes(query)) return true
  if (article.tag.toLowerCase().includes(query)) return true
  if (article.domain.toLowerCase().includes(query)) return true
  return false
}
