# responsive-image-map

![npm](https://img.shields.io/npm/v/responsive-image-map)
![license](https://img.shields.io/npm/l/responsive-image-map)
![downloads](https://img.shields.io/npm/dt/responsive-image-map)

`responsive-image-map` make map to responsive map according to image size

## Installation

```bash
npm install responsive-image-map
```

## Usage

### JavaScript

```javascript
import { makeResponsiveImageMap } from "responsive-image-map";

document.addEventListener("DOMContentLoaded", function () {
  makeResponsiveImageMap("class1", "class2"); // Add your class names here
});
```

### React

```javascript
import React, { useEffect } from "react";
import { makeResponsiveImageMap } from "responsive-image-map";

const App = () => {
  useEffect(() => {
    makeResponsiveImageMap("class1", "class2"); // Add your class names here
  }, []);

  return (
    <>
      <img src="image1.jpg" useMap="#image-map-1" className="class1" />
      <map name="image-map-1">
        <area
          shape="rect"
          coords="50,50,150,150"
          href="https://example.com"
          alt="Example"
        />
      </map>
    </>
  );
};

export default App;
```

### Vue

```javascript
<template>
  <div>
    <img src="image1.jpg" useMap="#image-map-1" class="class1" />
    <map name="image-map-1">
      <area shape="rect" coords="50,50,150,150" href="https://example.com" alt="Example" />
    </map>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { makeResponsiveImageMap } from 'responsive-image-map';

onMounted(() => {
  makeResponsiveImageMap('class1', 'class2'); // Add your class names here
});
</script>
```

## Contributing

We welcome contributions!

## License

This project is licensed under the MIT License
