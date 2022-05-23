export const isHtmlValid = (link: string) => {
  if (link.startsWith("http://") || link.startsWith("https://")) {
    try {
      const url = new URL(link);
      return true;
    } catch (error) {
      return false;
    }
  }
  return false;
};
