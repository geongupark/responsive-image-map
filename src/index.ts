export function makeResponsiveImageMap(...classNames: string[]): void {
  if (classNames.length === 0) {
    console.error("Expected at least one class name");
    return;
  }

  const images: HTMLImageElement[] = classNames.flatMap(className => Array.from(document.querySelectorAll(`.${className}`)));

  function resizeMap(image: HTMLImageElement, areas: NodeListOf<HTMLAreaElement>): void {
    const scaleX = image.clientWidth / image.naturalWidth;
    const scaleY = image.clientHeight / image.naturalHeight;

    areas.forEach(area => {
      const coords = area.dataset.coords;
      if (coords) {
        const originalCoords = coords.split(',')?.map(Number);
        const scaledCoords = originalCoords.map((coord, index) => {
          return index % 2 === 0 ? coord * scaleX : coord * scaleY;
        });
        area.coords = scaledCoords.join(',');
      }
    });
  }

  images.forEach(image => {
    const mapName = image.getAttribute('usemap')?.replace('#', '');
    if (mapName) {
      const areas: NodeListOf<HTMLAreaElement> = document.querySelectorAll(`map[name="${mapName}"] area`);

      areas.forEach(area => {
        if (!area.dataset.coords) {
          area.dataset.coords = area.coords;
        }
      });

      window.addEventListener('resize', () => resizeMap(image, areas));
      image.addEventListener('load', () => resizeMap(image, areas));
      resizeMap(image, areas);
    }
  });
}
