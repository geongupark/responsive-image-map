export function makeResponsiveImageMap(...classNames) {
  if (classNames.length === 0) {
      console.error("Expected at least one class name");
      return;
  }

  const images = classNames.flatMap(className => Array.from(document.querySelectorAll(`.${className}`)));

  function resizeMap(image, areas) {
      const scaleX = image.clientWidth / image.naturalWidth;
      const scaleY = image.clientHeight / image.naturalHeight;

      areas.forEach(area => {
          const originalCoords = area.dataset.coords.split(',').map(Number);
          const scaledCoords = originalCoords.map((coord, index) => {
              return index % 2 === 0 ? coord * scaleX : coord * scaleY;
          });
          area.coords = scaledCoords.join(',');
      });
  }

  images.forEach(image => {
      const mapName = image.useMap.replace('#', '');
      const areas = document.querySelectorAll(`map[name="${mapName}"] area`);

      areas.forEach(area => {
          area.dataset.coords = area.coords;
      });

      window.addEventListener('resize', () => resizeMap(image, areas));
      image.addEventListener('load', () => resizeMap(image, areas));
      resizeMap(image, areas);
  });
}
