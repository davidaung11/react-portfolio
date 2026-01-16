export default function HeroPage() {
  return (
    <div className="w-full bg-[#F5F1EA]">
      <div className="mx-auto flex h-130 max-w-6xl flex-col items-center justify-center px-6 text-center">
       
        <h1 className="font-serif text-5xl italic tracking-wide sm:text-6xl md:text-7xl">
          <span className="text-[#1E1E1E]">Hello, </span>
          <span className="text-[#A4571A]">I am David!</span>
        </h1>

      
        <p className="mt-10 max-w-2xl text-xl leading-relaxed text-[#2B2B2B]/80 md:text-2xl">
          I believe great software comes from simplicity, clean structure, and user-focused design.
        </p>

        <h2 className="mt-16 text-lg italic text-[#A4571A] underline underline-offset-8 decoration-2">Hire Me</h2>
      </div>
    </div>
  );
}
