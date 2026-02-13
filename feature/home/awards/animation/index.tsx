import {gsap} from 'gsap'
export default function animation() {
  gsap.timeline({
  	scrollTrigger : {
  		trigger : ".awards",
  		start : "top top",
  	},
  }).from('.awards .large-number',{
  	yPercent : -50,
  	opacity : 0,
  }).from('.awards .title',{
    xPercent : -50,
    opacity : 0,
  },">")
}
