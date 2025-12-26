import Header from "@/components/Header";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "About | The Holy Land - By Zahi Shaked",
  description: "Learn about Zahi Shaked, a licensed Israeli tour guide with over 25 years of experience guiding visitors through the Holy Land.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#3d3529] flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white via-[#faf8f5] to-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[2fr_1.2fr] gap-10 lg:gap-12 items-start">
              <div className="min-w-0">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#1a1612]">
                  Hi, I'm Zahi
                </h1>
                <div className="mt-6 space-y-4 text-base md:text-lg text-[#3d3529] leading-relaxed">
                  <p>
                    For more than 25 years, I've been guiding visitors through the Holy Land, weaving together history, Scripture, archaeology, and the rhythms of everyday life. Along the way, I earned two university degrees in the religious history of Israel, a foundation that continues to shape how I teach, guide, and tell these stories. Learning, for me, never really stopped.
                  </p>
                  <p>
                    What began as a simple way to help my guests remember their tours gradually found its way online. My YouTube channel has since grown into one of the largest Holy Land travel archives, with thousands of videos filmed on location.
                  </p>
                  <p>
                    Over time, something unexpected happened. A global community formed. Today, people from all over the world walk the streets of Jerusalem, the Galilee, and the desert with me every week, right from their homes.
                  </p>
                  <p>
                    Now, I split my time between guiding private groups on the ground and creating free educational content for anyone who loves the Holy Land as deeply as I do.
                  </p>
                </div>
              </div>

              <div className="mt-8 lg:mt-0 lg:pt-[4.5rem]">
                <div className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-[#e5ddd4] bg-[#f5f2ed]">
                  <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                    <iframe
                      src="https://www.youtube.com/embed/Z4DChZ7rpjk?rel=0"
                      className="absolute top-0 left-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      title="Zahi Shaked - About The Holy Land"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

