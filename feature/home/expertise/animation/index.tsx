import {gsap} from 'gsap'




export default function animation (){
	const commonProperties = {
		delay : 0.2,
    	duration : 1,
    	x : -100,
    	opacity : 0,
	}
    gsap.from('.expertise .skills li',{
    	...commonProperties,
    	stagger : 0.1,
    	scrollTrigger : {
    		trigger : '.expertise',
    		start : "-60% top",
    	}
    })
    gsap.from('.expertise .tools',{
    	...commonProperties,
    	scrollTrigger : {
    		trigger : '.expertise .skills',
    		start : "top top",
    	}
    })
}


