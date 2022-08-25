export function toCapitalize(value: string): string {
	return value
		.toLowerCase()
		.split(' ')
		.map((word, idx) => {
			if (idx > 0 && word.length <= 2) {
				return word
			}
			return `${word.charAt(0).toUpperCase()}${word.substring(
				1,
				word.length
			)}`
		})
		.join(' ')
}
