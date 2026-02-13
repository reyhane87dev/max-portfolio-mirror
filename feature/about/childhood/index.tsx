import { memo } from "react";
function Childhood() {
  return (
    <section className="childhood">
      <div className="text-center text-slate-500 pb-20">+</div>
      <ul className="content">
        <li>
          <div className="text-slate-500">+</div>
          <div>
            <h4>MY IDENTITY</h4>
            <p>
              {`I WAS BORN IN KHARKIV, UKRAINE 'CITY OF IDEAS'`} <span>IS</span>{" "}
              AN INFORMAL NICKNAME FOR KHARKIV <span>EMPHASIZING</span> ITS{" "}
              <span>ROLE</span> AS A CENTER OF SCIENCE, EDUCATION AND
              INNOVATION.
            </p>
          </div>
        </li>
        <li>
          <div className="text-slate-500">+</div>
          <div>
            <h4>MY GROWTH</h4>
            <p>
              SINCE CHILDHOOD I WAS DRAWN TO CREATING - THROUGHT{" "}
              <span>SKETHES</span>, RHYTHM <span>AND</span> LITTLE EXPERIMENTS
              LATER THAT SPARK <span>FOUND</span> {`IT'S VOICE IN MUSIC`}
            </p>
          </div>
        </li>
        <li>
          <div className="text-slate-500">+</div>
          <div>
            <h4>MY HOBBIES</h4>
            <p>
              MY STORY BEGAN WITH MUSIC I PLAYED IN CLUB <span>PRODUCED</span>{" "}
              ELECTRONIC TRACKS. AND EVEN HAD SOME OF THEM FEATURED ON BRITISH
              RADIO FOR <span>EMERGING</span> MUSICIANS.
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default memo(Childhood);
