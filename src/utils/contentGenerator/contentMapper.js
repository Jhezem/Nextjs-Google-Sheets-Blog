import Image from "next/image";
import { parseHTML, withChildren } from "./helpers/index";

const contentMapper = {
  p: withChildren((content, child) => {
    return (
      <p className="text-base mb-2">
        {content.value} {child}
      </p>
    );
  }),
  br: () => <br />,
  span: (content) => (
    <span className="text-base mb-2" style={{ color: "red" }}>
      {content.value}
    </span>
  ),
  a: (content) => {
    if (content.href) return contentMapper.link(content);
    return <a className="text-base">{content.value}</a>;
  },
  link: (content) => (
    <a href={content.href} className="text-base underline_text mb-2">
      {content.value}
    </a>
  ),
  h1: (content) => <h1 className="heading1 mb-2">{content.value}</h1>,
  h2: (content) => <h2 className="heading2 mb-2">{content.value}</h2>,
  h3: (content) => <h3 className="heading3 mb-2">{content.value}</h3>,
  img: (content) => {
    const { src, width, height, alt } = content;
    if (!src) return null;
    if (!width || !height)
      return (
        <Image
          src={content.src}
          fill
          style={{
            objectFit: "contain",
          }}
          alt={content?.alt}
        />
      );
    return <Image src={src} height={height} width={width} alt={alt ?? ""} />;
  },
};

const JSXMapper = ({ content, mapper = contentMapper }) => {
  const tagsMap = parseHTML(content);

  return tagsMap.map((element) => {
    const jsxResolver = mapper[element?.tag];
    if (typeof jsxResolver === "function") return jsxResolver(element, mapper);
  });
};

export default JSXMapper;
