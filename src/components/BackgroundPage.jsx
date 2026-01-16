export default function BackgroundPage() {
  return (
    <section className="bg-[#F5F1EA] py-16">
      <div className="mx-auto max-w-6xl px-6">

        <h1 className="text-center font-serif text-5xl text-[#A4571A]">
          Background
        </h1>


        <div className="mt-16 grid grid-cols-1 gap-14 text-center md:grid-cols-3">

          <div>
            <h3 className="font-serif text-3xl text-[#1E1E1E]">
              Rangsit <br /> University
            </h3>

            <div className="mx-auto mt-6 h-0.5 w-3/4 bg-[#A4571A]/70" />

            <p className="mt-6 font-semibold text-[#1E1E1E]">
              Bachelor of Science in Information & <br /> Communication Technology
            </p>
            <p className="mt-2 text-[#1E1E1E]/70">2023–2026</p>
          </div>

          <div>
            <h3 className="font-serif text-3xl text-[#1E1E1E]">
              Sprouting Tech <br />
              (Thailand) Pte.,Ltd.
            </h3>

            <div className="mx-auto mt-6 h-0.5 w-3/4 bg-[#A4571A]/70" />

            <p className="mt-6 font-semibold text-[#1E1E1E]">Internship</p>
            <p className="mt-2 text-[#1E1E1E]/70">Aug 2025 – Dec 2025</p>
          </div>

          <div>
            <h3 className="font-serif text-3xl text-[#1E1E1E]">
              ABC Telecomm Co., Ltd <br />
              Yangon, Myanmar
            </h3>

            <div className="mx-auto mt-6 h-0.5 w-3/4 bg-[#A4571A]/70" />

            <p className="mt-6 font-semibold text-[#1E1E1E]">
              Junior IT Technician
            </p>
            <p className="mt-2 text-[#1E1E1E]/70">July 2021 – Oct 2022</p>
          </div>
        </div>
      </div>
    </section>
  );
}
