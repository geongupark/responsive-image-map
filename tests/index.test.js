import { makeResponsiveImageMap } from '../src/index';

describe('makeResponsiveImageMap', () => {
    document.body.innerHTML = `
        <div class="container">
            <img src="image1.jpg" useMap="#image-map-1" class="responsive-image class1">
            <map name="image-map-1">
                <area shape="rect" coords="50,50,150,150" href="https://example1.com" alt="Link 1">
            </map>
        </div>
        <div class="container">
            <img src="image2.jpg" useMap="#image-map-2" class="responsive-image class2">
            <map name="image-map-2">
                <area shape="rect" coords="100,100,200,200" href="https://example2.com" alt="Link 2">
            </map>
        </div>
    `;

    it('should resize map coordinates correctly', () => {
        makeResponsiveImageMap('class1', 'class2');
        
        const image1 = document.querySelector('.class1');
        const image2 = document.querySelector('.class2');
        
        Object.defineProperty(image1, 'naturalWidth', { value: 800 });
        Object.defineProperty(image1, 'naturalHeight', { value: 600 });
        Object.defineProperty(image2, 'naturalWidth', { value: 1024 });
        Object.defineProperty(image2, 'naturalHeight', { value: 768 });

        Object.defineProperty(image1, 'clientWidth', { value: 400 });
        Object.defineProperty(image1, 'clientHeight', { value: 300 });
        Object.defineProperty(image2, 'clientWidth', { value: 512 });
        Object.defineProperty(image2, 'clientHeight', { value: 384 });

        image1.dispatchEvent(new Event('load'));
        image2.dispatchEvent(new Event('load'));

        const area1 = document.querySelector('map[name="image-map-1"] area');
        const area2 = document.querySelector('map[name="image-map-2"] area');

        expect(area1.coords).toBe('25,25,75,75');
        expect(area2.coords).toBe('50,50,100,100');
    });
});
