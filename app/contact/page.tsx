export const metadata = {
  title: "Contact | The Holy Land - By Zahi Shaked",
  description: "Get in touch with Zahi Shaked. Have a question about a video, thinking about supporting his work, or planning a future trip to Israel?",
};

export default function ContactPage() {
  return (
    <div className="h-full flex flex-col overflow-hidden">
      <main className="flex-1 overflow-hidden flex flex-col">
        <section className="py-4 md:py-6 lg:py-8 flex-1 min-h-0 overflow-y-auto">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-[#1a1612]">
              Get in touch with Zahi
            </h1>
            <p className="mt-2 text-sm md:text-base text-[#3d3529] max-w-3xl leading-relaxed">
              Have a question about a video, thinking about supporting his work, or planning a future trip to Israel? Feel free to reach out.
            </p>

            <div className="mt-6 max-w-3xl w-full space-y-3 text-sm md:text-base">
              <div className="flex items-center justify-between py-3 border-b border-[#e5ddd4]">
                <span className="text-[#3d3529]">WhatsApp</span>
                <span className="font-semibold text-[#1a1612]">+972-54-690-5522</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-[#e5ddd4]">
                <span className="text-[#3d3529]">Email</span>
                <a
                  href="mailto:zahishaked@gmail.com"
                  className="font-semibold text-[#1a1612] hover:text-[#c2410c]"
                >
                  zahishaked@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-between py-3">
                <span className="text-[#3d3529]">Based in</span>
                <span className="font-semibold text-[#1a1612]">Jerusalem & Tel Aviv</span>
              </div>
              <div className="pt-4 border-t border-[#e5ddd4] space-y-2 text-sm md:text-base">
                <p className="font-semibold text-[#1a1612]">Follow Zahi</p>
                <div className="flex flex-wrap gap-3 text-[#c2410c]">
                  <a href="https://www.youtube.com/@zahishaked" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    YouTube
                  </a>
                  <a href="https://www.facebook.com/zahishakedisraelitourguide" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    Facebook
                  </a>
                  <a href="https://www.instagram.com/zahi_shaked_israeli_tour_guide" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    Instagram
                  </a>
                  <a href="https://linktr.ee/zahishakedtourguide" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    Linktree
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

