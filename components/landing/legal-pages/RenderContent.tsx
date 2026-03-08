export function renderContent(content: string | string[]) {
  if (typeof content === "string") {
    return content ? (
      <p className="text-muted-foreground mb-2">{content}</p>
    ) : null;
  }

  const [first, ...rest] = content;

  return (
    <>
      {first && <p className="text-muted-foreground mb-2">{first}</p>}
      {rest.length > 0 && (
        <ul className="list-disc list-inside space-y-1 mb-2 text-muted-foreground">
          {rest.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
    </>
  );
}
