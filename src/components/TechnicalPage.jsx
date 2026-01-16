export default function TechnicalPage() {
  return (
    <section className="bg-[#2F3D2A] py-24">
      <div className="mx-auto max-w-6xl px-6 text-center">
        
        {/* Title */}
        <h1 className="font-serif text-5xl text-[#F5F1EA]">
          Technical Skills
        </h1>
        <div className="mx-auto mt-3 h-0.5 w-40 bg-[#C9A15A]" />

        {/* 3 Columns */}
        <div className="mt-20 grid grid-cols-1 gap-16 md:grid-cols-3">

          {/* Frontend */}
          <div>
            <h2 className="font-serif text-2xl italic text-[#F5F1EA]">
              Front-end Development
            </h2>
            <div className="mx-auto mt-4 h-0.5 w-48 bg-[#C9A15A]" />

            <p className="mt-8 space-y-2 text-lg text-[#F5F1EA]/90">
              React, Next.js,<br />
              TypeScript, JavaScript,<br />
              Tailwind CSS,<br />
              Responsive UI & Component Design
            </p>
          </div>

          {/* Backend */}
          <div>
            <h2 className="font-serif text-2xl italic text-[#F5F1EA]">
              Backend & Database
            </h2>
            <div className="mx-auto mt-4 h-0.5 w-48 bg-[#C9A15A]" />

            <p className="mt-8 space-y-2 text-lg text-[#F5F1EA]/90">
              Node.js, REST APIs,<br />
              Supabase (PostgreSQL),<br />
              Authentication (JWT),<br />
              Row-Level Security (RLS),<br />
              Database schema design
            </p>
          </div>

         
          <div>
            <h2 className="font-serif text-2xl italic text-[#F5F1EA]">
              Tools & Technologies
            </h2>
            <div className="mx-auto mt-4 h-0.5 w-48 bg-[#C9A15A]" />

            <p className="mt-8 space-y-2 text-lg text-[#F5F1EA]/90">
              Git, GitHub,<br />
              VS Code, Postman,<br />
              Figma,<br />
              Docker (basic),<br />
              CI/CD (basic understanding)
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
