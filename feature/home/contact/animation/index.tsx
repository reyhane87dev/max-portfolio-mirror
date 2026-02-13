
import {gsap} from 'gsap'
import SplitType from 'split-type'

export default function animation (){
    const {chars} = new SplitType('.contact section p');

    gsap.from(chars,{
        x : -20,
        opacity : 0,
        stagger : 0.05,
        scrollTrigger : {
            trigger : ".contact",
            start : "-50% top"
        }
    })
}