import WavyText from "@/feature/global/components/wavy-text";
import Link from "next/link";

function NotFoundPage() {
  return (
    <div className="not-found text-white">
      <section className="flex-col-center gap-20 h-full">
        <div className="top">
          <span>404 ERROR</span>
          <span>PAGE NOT FOUND</span>
        </div>
        <div className="message">SOMETHING WENT WRONG</div>
        <Link href="/">
          <button className="pill border-white">
            <WavyText>BACK TO HOME</WavyText>
          </button>
        </Link>
      </section>
    </div>
  );
}

export default NotFoundPage;
