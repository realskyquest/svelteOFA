// Squelch warnings of image imports from your images dir
declare module '/src/images/*' {
	const meta;
	export default meta;
}
