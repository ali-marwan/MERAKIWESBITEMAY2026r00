interface BlogBodyProps {
  body: string;
}

export function BlogBody({ body }: BlogBodyProps) {
  const blocks = parseBody(body);
  return (
    <div className="space-y-5 text-ink-700 text-lead leading-relaxed">
      {blocks.map((block, i) => {
        if (block.type === "h2") {
          return (
            <h2
              key={i}
              className="mt-12 mb-2 text-display-md text-ink-900 text-balance"
            >
              {block.content}
            </h2>
          );
        }
        if (block.type === "ul") {
          return (
            <ul
              key={i}
              className="my-5 space-y-2.5 pl-5 list-disc marker:text-bronze-500"
            >
              {block.items.map((item, j) => (
                <li key={j} className="text-body text-ink-500 pl-2">
                  {renderInline(item)}
                </li>
              ))}
            </ul>
          );
        }
        if (block.type === "ol") {
          return (
            <ol
              key={i}
              className="my-5 space-y-2.5 pl-5 list-decimal marker:text-bronze-500 marker:font-bold"
            >
              {block.items.map((item, j) => (
                <li key={j} className="text-body text-ink-500 pl-2">
                  {renderInline(item)}
                </li>
              ))}
            </ol>
          );
        }
        return (
          <p key={i} className="text-body text-ink-500">
            {renderInline(block.content)}
          </p>
        );
      })}
    </div>
  );
}

type Block =
  | { type: "p"; content: string }
  | { type: "h2"; content: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] };

function parseBody(raw: string): Block[] {
  const lines = raw.split("\n");
  const blocks: Block[] = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i] ?? "";
    if (!line.trim()) {
      i++;
      continue;
    }
    if (line.startsWith("## ")) {
      blocks.push({ type: "h2", content: line.replace(/^## /, "") });
      i++;
      continue;
    }
    if (/^[-*] /.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^[-*] /.test(lines[i] ?? "")) {
        items.push((lines[i] ?? "").replace(/^[-*] /, ""));
        i++;
      }
      blocks.push({ type: "ul", items });
      continue;
    }
    if (/^\d+\. /.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\. /.test(lines[i] ?? "")) {
        items.push((lines[i] ?? "").replace(/^\d+\. /, ""));
        i++;
      }
      blocks.push({ type: "ol", items });
      continue;
    }
    const para: string[] = [line];
    i++;
    while (
      i < lines.length &&
      (lines[i] ?? "").trim() &&
      !(lines[i] ?? "").startsWith("## ") &&
      !/^[-*] /.test(lines[i] ?? "") &&
      !/^\d+\. /.test(lines[i] ?? "")
    ) {
      para.push(lines[i] ?? "");
      i++;
    }
    blocks.push({ type: "p", content: para.join(" ") });
  }
  return blocks;
}

function renderInline(text: string): React.ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (/^\*\*[^*]+\*\*$/.test(part)) {
      return (
        <strong key={i} className="text-ink-900 font-semibold">
          {part.replace(/^\*\*|\*\*$/g, "")}
        </strong>
      );
    }
    return <span key={i}>{part}</span>;
  });
}
