export default function AboutPage() {
  return (
    <section className="bg-[#F5F1EA]">
      <div className="mx-auto grid min-h-screen max-w-6xl grid-cols-1 items-center gap-12 px-6 py-16 md:grid-cols-2 md:px-10">
       
        <div className="max-w-xl">
        
          <h2 className="relative font-serif text-4xl italic tracking-wide text-[#8B4A1B] sm:text-5xl">
      
            <span className="relative inline-block">
              <span className="relative z-10">About</span>
              <span className="absolute -left-4 top-1/2 h-15.5 w-42.5 -translate-y-1/2 rounded-full border border-[#2B2B2B]/70" />
              <span className="absolute -left-6 top-1/2 h-15.5 w-42.5 -translate-y-[55%] -rotate-6 rounded-full border border-[#2B2B2B]/70" />
            </span>{" "}
            Hein Htet Aung
          </h2>

          
          <p className="mt-10 text-lg leading-9 text-[#2B2B2B]/80">
            Recent ICT graduate with a passion for building clean, modern, and user-focused web interfaces. I enjoy working with teams that value thoughtful UI, good frontend engineering practices, and continuous learning. If you’re looking for a React developer who brings dedication, clarity, and strong frontend skills, I’d love to connect.
          </p>
        </div>

        
        <div className="flex justify-center md:justify-end">
          <div className="relative h-130 w-105 overflow-hidden rounded-t-full rounded-b-2xl">
            <img
              src="/images/1.jpg"
              alt="Hein Htet Aung"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
