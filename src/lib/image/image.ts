export function getImageBlur(url: string): string | undefined {
	let myImage: string | undefined;

	const paths: Array<[string, { default: string }]> = Object.entries(
		import.meta.glob('/src/images/**', {
			eager: true,
			query: { w: '10', blur: '0.6' }
		})
	);

	paths.forEach(([imagePath, image]) => {
		if (imagePath === url) {
			myImage = image.default;
		}
	});

	return myImage;
}
