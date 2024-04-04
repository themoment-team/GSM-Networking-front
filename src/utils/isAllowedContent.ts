const isAllowedContent = (content: string) =>
  content.replaceAll('\n', '').replaceAll('\u0020', '').length !== 0;

export default isAllowedContent;
