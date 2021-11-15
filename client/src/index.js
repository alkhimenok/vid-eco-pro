import { setMarginForBody } from './scripts/header/mainIntend'
import { $burgerIcon, showMenu } from './scripts/header/burger'
import { rewriteNumber } from './scripts/numbers/phoneLink'
import { setMask } from './scripts/numbers/inputMask'

import { } from './scripts/advantegeEfects'
import { } from './scripts/slider/sliderNav'

import './styles/main.scss'

const start = () => {
	setMarginForBody()
	rewriteNumber()
	setMask()

	$burgerIcon.addEventListener('click', showMenu)
}

window.addEventListener('load', start)
