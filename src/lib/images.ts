interface ImagesArrayType {
	name: string;
	path: string;
	width: number;
	height: number;
	src: string;
	jpeg: typeof import('/src/images/*');
	webp: typeof import('/src/images/*');
	avif: typeof import('/src/images/*');
	blurhash: string;
}

type ImagesJSONType = Record<string, ImagesArrayType>;

import src_images_coffee_jpg from '/src/images/coffee.jpg';
import src_images_coffee_jpg_jpeg from '/src/images/coffee.jpg?w=426;640;1280&format=jpeg&as=srcset';
import src_images_coffee_jpg_webp from '/src/images/coffee.jpg?w=426;640;1280&format=webp&as=srcset';
import src_images_coffee_jpg_avif from '/src/images/coffee.jpg?w=426;640;1280&format=avif&as=srcset';
import src_images_pwa_pwa_512x512_png from '/src/images/pwa/pwa-512x512.png';
import src_images_pwa_pwa_512x512_png_jpeg from '/src/images/pwa/pwa-512x512.png?w=170;256;512&format=jpeg&as=srcset';
import src_images_pwa_pwa_512x512_png_webp from '/src/images/pwa/pwa-512x512.png?w=170;256;512&format=webp&as=srcset';
import src_images_pwa_pwa_512x512_png_avif from '/src/images/pwa/pwa-512x512.png?w=170;256;512&format=avif&as=srcset';

export const imagesJSON: ImagesJSONType = {
	'/src/images/coffee.jpg': {
		name: 'coffee.jpg',
		path: '/src/images/coffee.jpg',
		width: 1280,
		height: 853,
		src: src_images_coffee_jpg,
		jpeg: src_images_coffee_jpg_jpeg,
		webp: src_images_coffee_jpg_webp,
		avif: src_images_coffee_jpg_avif,
		blurhash:
			'data:image/bmp;base64,Qk32BAAAAAAAADYAAAAoAAAACAAAAAgAAAABABgAAAAAAMAAAAATCwAAEwsAAAAAAAAAAAAAAi5JIj1UQVZqVmh8XW6DVmd9QVRoGDpMWFxxY2t8eISUh5SlipapgYufb3iLXGd0bmt7eXuKjpelm6e2maS2jJOmen+Pa3J8ZFxlcHB5hY6aj5yph5Oic3qKX2NvVltfQTI1UU9VZ3F7bHuIXGt4OUVQDRoeDh0QAAAHJiM3QkxcRlZmL0NRAAAUAAAAAAAAAAAzBQtALjdTOUVaMT9QGCk6AAAhAAAXAABECBJKLTRVPERbPUZYNT1OJS1BExk3'
	},
	'/src/images/pwa/pwa-512x512.png': {
		name: 'pwa-512x512.png',
		path: '/src/images/pwa/pwa-512x512.png',
		width: 512,
		height: 512,
		src: src_images_pwa_pwa_512x512_png,
		jpeg: src_images_pwa_pwa_512x512_png_jpeg,
		webp: src_images_pwa_pwa_512x512_png_webp,
		avif: src_images_pwa_pwa_512x512_png_avif,
		blurhash:
			'data:image/bmp;base64,Qk32BAAAAAAAADYAAAAoAAAACAAAAAgAAAABABgAAAAAAMAAAAATCwAAEwsAAAAAAAAAAAAAd3q5foHEiozXjpDciYrOf3+5e3uxf3+4fH/HhIbMk5XWn6DboqPZm5zQj4/Fg4O+f4DPiIrRnZ7Xr7Dft7jjsLHgnp7Uh4fHfX7LiYrQo6Pat7jjv7/ntrfjoaLZiYrOe3zDh4jJnp/VsbLgt7fjrq/fnJ3Xh4nQfn2+g4PAkJDHnJ3RoqPan6DckpTWg4XLgoK/gH+6fHyzgIG7iovQj5HdiozXfoHEhYTBfn64c3KpcXKxfn/LiYreh4rYfH/A'
	}
};
