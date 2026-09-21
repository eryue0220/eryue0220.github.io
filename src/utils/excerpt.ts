const DEFAULT_LENGTH = 160;

export function excerptFromMarkdown(body = '', maxLength = DEFAULT_LENGTH): string {
  const text = body
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`[^`]*`/g, ' ')
    .replace(/!\[[^\]]*]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]*)]\([^)]*\)/g, '$1')
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/[*_~>|-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).replace(/\s+\S*$/, '').trimEnd()}…`;
}

export function postDescription(post: { data: { description?: string }; body?: string }): string {
  return post.data.description?.trim() || excerptFromMarkdown(post.body);
}
