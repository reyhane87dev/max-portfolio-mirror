'use client'
import Image from "next/image";
import {useGSAP} from '@gsap/react'
import {gsap} from 'gsap';


function Teenage() {

  useGSAP(()=>{
    gsap.to('.about-page-ring',{
      scrollTrigger : {
        trigger : '.teenage',
        scrub : true,
      },
      rotate : 360,
    })
  },[])

  return (
    <section className="teenage pt-0 relative py-60">

      <div className="background-text text-7xl hidden lg:block text-slate-500/50">
        THE WORLD OF RHYTHM AND FLOW SHAPED MY UNDERSTANDING  <span className="flex" >OF</span> CREATIVITY - MOVMENT , TIMING AND EMOTION
      </div>


      <Image className="lg:absolute ml-auto w-30 top-75 left-65" src="/teenager-max.jpg" alt="" width={200} height={300} />
      <p className="lg:absolute text-center left-110 py-20 lg:py-0  top-110" >
        LATER MY FATHER INTERDUCED ME TO <br/> WEB DEVELOPMENT AND I REALIZED IT <br /> WAS THE PERFECT SPACE WHERE <br/> TECHNOLOGY MEETS ARTISTRY
      </p>
      <p className="right-20 bottom-30 lg:absolute text-xl" >+100 <br/> IMPLEMENTED PROJECTS</p>
      
      <div className="hidden lg:block" >
        <svg
          className="about-page-ring w-150 absolute top-25"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 500 500"
        >
          <defs>
            <path
              id="circle3"
              d="M250,250 m-140,0 a140,140 0 1,1 280,0 a140,140 0 1,1 -280,0"
            />
          </defs>

          <text
            fill="#626361"
            fontSize="12"
            fontFamily="monospace"
            letterSpacing="4"
            textAnchor="middle"
          >
            <textPath href="#circle3" startOffset="50%">
              T E N D D E V ✶ T I C R E A T I V E ✶ E N D 0 2 4 ✦ D E V E ◦ 9 F R O N T
            </textPath>
          </text>
        </svg>

        <Image
          className="w-180 about-page-ring absolute top-10 -left-10"
          src="https://www.maxmilkin.com/img/about/middle-ring.svg"
          alt=""
          width={600}
          height={600}
        />

        <Image
          className="w-200 about-page-ring absolute -left-20 rotate-90 top-0"
          src="https://www.maxmilkin.com/img/about/outer-ring.svg"
          alt=""
          width={600}
          height={600}
        />
      </div>
    </section>
  );
}

export default Teenage;
