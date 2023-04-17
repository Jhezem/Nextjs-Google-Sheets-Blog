export function withChildren(component) {
  return (content, contentMapper) => {
    const { childrens } = content;
    if (childrens) {
      const child = contentMapper[childrens[0].tag];
      if (typeof child !== "function") return null;
      return component(content, child(childrens[0]));
    }

    return component(content, null);
  };
}
