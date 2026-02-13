import {gsap} from 'gsap'
import SplitType from 'split-type';
export default function animation(){
	const job = new SplitType('footer .job');
	const name = new SplitType('footer .name');

	gsap.from([name.chars,job.chars],{
		x : -20,
		opacity : 0,
		stagger : 0.1,
		scrollTrigger : {
			trigger : 'footer',
			start : "-80% top"
		}
	})
}