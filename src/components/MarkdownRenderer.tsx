import { List, ListItem, Typography } from "@mui/material";
import ReactMarkdown from "react-markdown";

export default function MarkdownRenderer({ children }: { children: string }) {
  return (
    <ReactMarkdown
      components={{
        h2: ({ node, ...props }) => (
          <Typography
            component="h2"
            sx={{ fontWeight: 700, fontSize: "1.6rem", textAlign: "start" }}
            {...props}
          />
        ),
        h3: ({ node, ...props }) => (
          <Typography
            component="h3"
            sx={{
              mt: "0.75rem",
              fontWeight: 700,
              fontSize: "1.3rem",
              textAlign: "start",
            }}
            {...props}
          />
        ),
        ul: ({ node, ...props }) => (
          <List
            sx={{
              listStyle: "none",
            }}
            {...props}
          />
        ),
        li: ({ node, ...props }) => (
          <ListItem
            sx={{
              width: "100%",
              justifyContent: "start",
              textAlign: "start",
              p: 0,
            }}
            {...props}
          />
        ),
        p: ({ node, ...props }) => (
          <Typography sx={{ textAlign: "start" }} {...props} />
        ),
      }}
    >
      {children}
    </ReactMarkdown>
  );
}
