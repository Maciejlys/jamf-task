// I was trying to check image size to see if it was too small, but it was not working.
// I was able to check the image size in the browser, but it was not working in the component.
// It was rendering faster then useEffect was checking the image size.
// I wanted to object-fit cover or contain depending on image size as product image is fixed
// at 280x280

export const isTooSmall = (width: number, height: number) => {
  return width < 280 || height < 280;
};

export const isImgToSmall = (url: string) => {
  const img = new Image();
  img.addEventListener("load", function () {
    return isTooSmall(this.naturalWidth, this.naturalHeight);
  });
  img.src = url;
  return false;
};
