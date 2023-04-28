import classNames from 'classnames';
import React from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import remarkGfm from 'remark-gfm';

type Props = {
  text: string;
};

export default function UIMarkdown({ text }: Props) {
  const handleTransformImageUri = src => {
    const nextJsImageSrc = src.replace(/^\/apps\/home\/public/, '');
    return nextJsImageSrc;
  };

  const handleTransformLinkUri = src => {
    let result = src;
    if (src.startsWith('/packages')) {
      result = src.replace(
        /^\/packages/,
        'https://github.com/quizlet/student-competitions/tree/main/packages'
      );
    } else if (src.startsWith('/docs')) {
      result = src.toLowerCase().substring(0, src.length - 3);
    }

    return result;
  };

  return (
    <ReactMarkdown
      children={text}
      className="UIMarkdown"
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '');
          return !inline && match ? (
            <SyntaxHighlighter
              children={String(children).replace(/\n$/, '')}
              style={nightOwl}
              language={match[1]}
              PreTag="div"
              {...props}
            />
          ) : (
            <code
              className={classNames(className, 'UIMarkdown-inlineCode')}
              {...props}
            >
              {children}
            </code>
          );
        },
        blockquote({ node, className, ...props }) {
          return (
            <blockquote
              className={classNames(className, 'UIMarkdown-blockquote')}
              {...props}
            />
          );
        },
        img({ node, className, ...props }) {
          return (
            <img
              className={classNames(className, 'UIMarkdown-image')}
              alt="image filler"
              {...props}
            />
          );
        },
      }}
      transformLinkUri={handleTransformLinkUri}
      transformImageUri={handleTransformImageUri}
      remarkPlugins={[remarkGfm]}
    />
  );
}
