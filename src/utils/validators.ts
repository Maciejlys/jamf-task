export const urlInputValidator = (link: string) => {
  if (link.startsWith("http")) {
    try {
      const url = new URL(link);
      return true;
    } catch (error) {
      console.log(error);

      return false;
    }
  }
  return false;
};
