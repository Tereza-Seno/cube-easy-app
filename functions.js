export const addToWebsite = (tag, content, whereToAdd) => {
  const htmlTag = document.createElement(tag);
  htmlTag.textContent = content;
  whereToAdd.append(htmlTag);
};
