const ALLOWED_TAG_PATTERN =
  /<\/?(?:b|strong|i|em|u|br|p|div)\b[^>]*>/gi;

export function plainTextFromHtml(html: string): string {
  return html
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/p>/gi, "\n")
    .replace(/<\/div>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

export function sanitizeMessageHtml(html: string): string {
  const withoutScripts = html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
    .replace(/\son\w+="[^"]*"/gi, "")
    .replace(/\son\w+='[^']*'/gi, "");

  const allowedOnly = withoutScripts.replace(
    /<\/?([a-z0-9]+)\b[^>]*>/gi,
    (tag, tagName: string) => {
      const allowed = ["b", "strong", "i", "em", "u", "br", "p", "div"];
      return allowed.includes(tagName.toLowerCase())
        ? tag.replace(/\s+(?:style|class|id)=["'][^"']*["']/gi, "")
        : "";
    },
  );

  return allowedOnly.replace(ALLOWED_TAG_PATTERN, (tag) => tag).trim();
}

export function plainTextToEditorHtml(text: string): string {
  return text
    .split("\n")
    .map((line) =>
      line.length > 0
        ? `<p>${line.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>`
        : "<p><br></p>",
    )
    .join("");
}
