export default function ContactPage(){
    return(
     <section className="bg-[#9C4A1A] py-20 text-[#F5F1EA]">
      <div className="mx-auto max-w-7xl px-8">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          
          <div>
            <h2 className="font-serif text-5xl leading-tight md:text-6xl">
              Reach out if you’d like <br />
              to build something <br />
              meaningful{" "}
              <span className="relative inline-block">
                together.
              
                <span className="absolute -left-8 top-1/2 h-19.5 w-70 -translate-y-1/2 rounded-full border border-[#F5F1EA]/80" />
                <span className="absolute -left-12 top-1/2 h-19.5 w-70 -translate-y-[55%] -rotate-6 rounded-full border border-[#F5F1EA]/80" />
                <span className="absolute -left-2 top-[75%] h-0.5 w-50 rotate-[-8deg] bg-[#F5F1EA]/70" />
              </span>
            </h2>

            <div className="mt-10 h-0.5 w-full max-w-2xl bg-[#F5F1EA]/40" />

          
            <p className="mt-10 text-sm tracking-[0.2em] opacity-90">
              TO SEE MORE OF MY WORK, VISIT MY GITHUB:
            </p>

            <a
              href="https://github.com/davidaung11/davidaung11"
              target="_blank"
              rel="noreferrer"
              className="mt-4 block font-serif text-2xl italic underline underline-offset-8  text-white"
            >
              https://github.com/davidaung11/davidaung11
            </a>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col justify-end gap-10 md:items-end">
            {/* Phone */}
            <div className="flex items-center gap-5 md:w-90">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#F5F1EA]/80">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="h-7 w-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a1.5 1.5 0 001.5-1.5v-2.25a1.5 1.5 0 00-1.5-1.5h-3.75a1.5 1.5 0 00-1.5 1.5v.375c0 .621-.504 1.125-1.125 1.125a12.375 12.375 0 01-12.375-12.375c0-.621.504-1.125 1.125-1.125h.375a1.5 1.5 0 001.5-1.5V3a1.5 1.5 0 00-1.5-1.5H3.75a1.5 1.5 0 00-1.5 1.5v2.25z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm tracking-[0.25em] opacity-80">PHONE</p>
                <p className="font-serif text-xl">+66 82 152 6261</p>
              </div>
            </div>

            
            <div className="flex items-center gap-5 md:w-90">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#F5F1EA]/80">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="h-7 w-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5A2.25 2.25 0 0119.5 19.5H4.5A2.25 2.25 0 012.25 17.25V6.75A2.25 2.25 0 014.5 4.5h15a2.25 2.25 0 012.25 2.25z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 7.5l7.8 5.2a2.25 2.25 0 002.4 0L21 7.5"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm tracking-[0.25em] opacity-80">EMAIL</p>
                <p className="font-serif text-xl">heinhtetaung5698@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
}