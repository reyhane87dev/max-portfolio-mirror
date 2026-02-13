import {gsap} from 'gsap'
export default function animation (){

	gsap.from('.intro h2',{
		x : -100,
		opacity : 0,
		delay : 0.2,
	})
}