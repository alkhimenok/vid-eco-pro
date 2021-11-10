export const rewriteNumber = () => {
	const phones = document.querySelectorAll('[data-tel="phone"]')

	phones.forEach($phone => {
		const $number = $phone.querySelector('[data-tel="number"]')
		const correnctLink = `tel:${$number.textContent.replace(/[^\d]/g, '')}`

		$phone.href = correnctLink
	})
}