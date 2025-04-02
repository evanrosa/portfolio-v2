import markdownStyles from "./markdown-styles.module.css";

type Props = {
  content: string;
};

export function PostBody({ content }: Props) {
  return (
    <div className="max-w-2xl mx-auto prose dark:prose-invert">
      <div
        className={`prose prose-slate dark:prose-invert max-w-3xl mx-auto ${markdownStyles.markdown}`}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
