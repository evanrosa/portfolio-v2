import remarkGfm from "remark-gfm";
import remarkSmartypants from "remark-smartypants";
import remarkRehype from "remark-rehype";
import rehypeClassNames from "rehype-class-names";
import rehypeStringify from "rehype-stringify";
import { remark } from "remark";

export default async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(remarkGfm)
    .use(remarkSmartypants)
    .use(remarkRehype)
    .use(rehypeClassNames, {
      table: "w-full table-auto text-left border border-gray-300 text-sm my-6",
      thead: "bg-gray-100",
      th: "border-b p-3 font-semibold",
      td: "border-b p-3 align-top",
      tr: "even:bg-gray-50",
      ul: "list-disc pl-6 my-4",
      ol: "list-decimal pl-6 my-4",
      li: "mb-1",
    })
    .use(rehypeStringify)
    .process(markdown);

  return result.toString();
}
