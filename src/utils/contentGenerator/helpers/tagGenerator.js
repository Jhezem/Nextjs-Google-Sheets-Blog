import { load } from "cheerio";

export function parseHTML(htmlString) {
  const $ = load(htmlString);
  const result = [];

  const traverse = (element) => {
    const tag = element.tagName; // Get the tag name
    const obj = { tag }; // Create an object with tag name as property

    // If the element has text content, add it as "text" property to the object
    const text = $(element)
      .contents()
      .filter(function () {
        return this.nodeType === 3; // Filter out non-text nodes
      })
      .text()
      .trim();
    if (text.length > 0) {
      obj.value = text;
    }

    Object.keys(element.attribs).forEach((attr) => {
      obj[attr] = element.attribs[attr];
    });

    // Recursively traverse the children of the element
    const children = [];
    element.children.forEach((childElement) => {
      if (childElement.type === "tag") {
        children.push(traverse(childElement));
      }
    });

    // If the element has children, add them as "childrens" property to the object
    if (children.length > 0) {
      obj.childrens = children;
    }

    return obj;
  };

  // Start traversing from the body tag
  $("body")
    .children()
    .each((_, element) => {
      result.push(traverse(element));
    });

  return result;
}
