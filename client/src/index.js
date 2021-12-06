import './styles/main.scss'
import 'animate.css'
import WOW from 'wow.js'

import { showLoader, hideLoader } from './scripts/UI/loader'
import { setMarginForHeader } from './scripts/indent'
import { setPhoneMask } from './scripts/phones/inputMask'
import { rewriteCallLinks } from './scripts/phones/callLinks'

import { navs, handlerNavMove } from './scripts/pageMove/navMove'
import { applications, moveToSendSection } from './scripts/pageMove/toSendSection'
import { $burgerIcon, toggleShowMenu } from './scripts/burger'
import { $sendBtn, showModalSuccess } from './scripts/UI/modal'
import {
	$slider,
	$sliderNav,
	setPositionTouchStart,
	setPositionTouchEnd,
	addHandlerCliderTouch,
	addHandlerCliderClicks,
	setPoginationSize,
} from './scripts/slider'

const start = () => {
	try {
		// new WOW().init()

		setMarginForHeader()
		setPhoneMask()
		rewriteCallLinks()
		setPoginationSize()

		navs.forEach($nav => $nav.addEventListener('click', handlerNavMove))
		applications.forEach($application => $application.addEventListener('click', moveToSendSection))
		$burgerIcon.addEventListener('click', toggleShowMenu)
		$sendBtn.addEventListener('click', showModalSuccess)
		$slider.addEventListener('touchstart', setPositionTouchStart)
		$slider.addEventListener('touchmove', setPositionTouchEnd)
		$slider.addEventListener('touchend', addHandlerCliderTouch)
		$sliderNav.addEventListener('click', addHandlerCliderClicks)
	} catch (error) {
		console.error(error)
		// showError(error)
	} finally {
		hideLoader()
	}
}

window.addEventListener('DOMContentLoaded', showLoader)
window.addEventListener('load', start)
