"use client";

import Link from "next/link";
import type React from "react";

export default function FollowSupportBlock() {
  const SocialButton = ({
    href,
    label,
    bg,
    iconColor,
    children,
    roundedClass = "rounded-full",
  }: {
    href: string;
    label: string;
    bg: string;
    iconColor: string;
    children: React.ReactNode;
    roundedClass?: string;
  }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center focus-visible:outline-2 focus-visible:outline-[#c2410c] focus-visible:outline-offset-2 ${roundedClass}`}
      aria-label={label}
      title={label}
    >
      <span
        className={`inline-flex h-11 w-11 items-center justify-center ${roundedClass} shadow-sm ring-1 ring-black/10 transition-all duration-200 ease-out group-hover:-translate-y-0.5 group-hover:shadow-md group-hover:ring-black/20 group-hover:scale-[1.04] active:translate-y-0 active:scale-[0.98]`}
        style={{ background: bg, color: iconColor }}
        aria-hidden="true"
      >
        {children}
      </span>
    </a>
  );

  return (
    <div className="bg-white">
      <div className="px-4 md:px-6 lg:px-8 py-4">
        <div className="mx-auto w-full max-w-3xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-4 items-center">
            {/* Left: Follow */}
            <div className="flex flex-col items-center justify-center text-center">
              <div className="flex items-center justify-center gap-2">
                <img
                  src="/icons/follow_journey.webp"
                  alt=""
                  width={54}
                  height={54}
                  className="h-[clamp(34px,4vw,48px)] w-[clamp(34px,4vw,48px)] object-contain"
                  aria-hidden="true"
                />
                <p className="font-cormorant font-bold tracking-tight text-[#1a1612] text-[clamp(16px,1.8vw,22px)]">
                  Stories from the road
                </p>
              </div>

              <div className="mt-3 flex items-center justify-center gap-4">
                <SocialButton
                  href="https://www.youtube.com/@zahishaked"
                  label="YouTube"
                  bg="#FF0000"
                  iconColor="#FFFFFF"
                >
                  {/* from public/brands/youtube.svg */}
                  <svg viewBox="0 0 24 24" className="h-6 w-6 drop-shadow-[0_1px_0_rgba(0,0,0,0.15)]" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </SocialButton>

                <SocialButton
                  href="https://www.facebook.com/zahishakedisraelitourguide"
                  label="Facebook"
                  bg="#1877F2"
                  iconColor="#FFFFFF"
                >
                  {/* from public/brands/facebook.svg */}
                  <svg viewBox="0 0 24 24" className="h-6 w-6 drop-shadow-[0_1px_0_rgba(0,0,0,0.15)]" fill="currentColor">
                    <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
                  </svg>
                </SocialButton>

                <SocialButton
                  href="https://www.instagram.com/zahi_shaked_israeli_tour_guide"
                  label="Instagram"
                  bg="radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)"
                  iconColor="#FFFFFF"
                >
                  {/* from public/brands/instagram.svg */}
                  <svg viewBox="0 0 24 24" className="h-6 w-6 drop-shadow-[0_1px_0_rgba(0,0,0,0.15)]" fill="currentColor">
                    <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" />
                  </svg>
                </SocialButton>

                <SocialButton
                  href="https://www.tiktok.com/@zahishaked"
                  label="TikTok"
                  bg="#000000"
                  iconColor="#FFFFFF"
                >
                  {/* from public/brands/tiktok.svg with brand shadows */}
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                    fill="currentColor"
                    style={{
                      filter:
                        "drop-shadow(-1px 1px #25F4EE) drop-shadow(1px -1px #FE2C55)",
                    }}
                  >
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                  </svg>
                </SocialButton>
              </div>
            </div>

            {/* Right: Support */}
            <div className="flex flex-col items-center justify-center text-center">
              <div className="flex items-center justify-center gap-2">
                <img
                  src="/icons/support_journey.webp"
                  alt=""
                  width={54}
                  height={54}
                  className="h-[clamp(34px,4vw,48px)] w-[clamp(34px,4vw,48px)] object-contain"
                  aria-hidden="true"
                />
                <p className="font-cormorant font-bold tracking-tight text-[#1a1612] text-[clamp(16px,1.8vw,22px)]">
                  Support the path
                </p>
              </div>

              <div className="mt-3 flex items-center justify-center gap-4">
                <Link
                  href="/support"
                  className="group inline-flex items-center focus-visible:outline-2 focus-visible:outline-[#c2410c] focus-visible:outline-offset-2 rounded-full"
                  aria-label="Support the path"
                  title="Support"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#c2410c] shadow-sm ring-1 ring-black/10 transition-all duration-200 ease-out group-hover:-translate-y-0.5 group-hover:shadow-md group-hover:ring-black/20 group-hover:scale-[1.04] active:translate-y-0 active:scale-[0.98]" aria-hidden="true">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-6 w-6 text-white drop-shadow-[0_1px_0_rgba(0,0,0,0.15)]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 11.5l-3.2-3.2a2.4 2.4 0 0 0-3.4 0l-1.3 1.3a2.4 2.4 0 0 1-3.4 0L8.4 8.3a2.4 2.4 0 0 0-3.4 0L2.8 10.5" />
                      <path d="M8.2 12.2l2.1 2.1a2.4 2.4 0 0 0 3.4 0l2.1-2.1" />
                      <path d="M6.3 10.2l-2.2 2.2a1.6 1.6 0 0 0 0 2.3l1 1" />
                      <path d="M17.7 10.2l2.2 2.2a1.6 1.6 0 0 1 0 2.3l-1 1" />
                      <path d="M9.2 14.2l-1 1a1.6 1.6 0 0 0 0 2.3" />
                      <path d="M14.8 14.2l1 1a1.6 1.6 0 0 1 0 2.3" />
                    </svg>
                  </span>
                </Link>

                <SocialButton
                  href="https://theholyland.tours/shop"
                  label="The Holy Land Shop"
                  bg="#111827"
                  iconColor="#FFFFFF"
                  roundedClass="rounded-full"
                >
                  <img
                    src="/icons/holy_land_shop_logo.png"
                    alt=""
                    className="h-8 w-8 rounded-full object-cover"
                    aria-hidden="true"
                  />
                </SocialButton>

                <SocialButton
                  href="https://buymeacoffee.com/zahishaked"
                  label="Buy Me a Coffee"
                  bg="#FFDD00"
                  iconColor="#111827"
                  roundedClass="rounded-full"
                >
                  {/* from public/brands/buymeacoffee.svg */}
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
                    <path d="M20.216 6.415l-.132-.666c-.119-.598-.388-1.163-1.001-1.379-.197-.069-.42-.098-.57-.241-.152-.143-.196-.366-.231-.572-.065-.378-.125-.756-.192-1.133-.057-.325-.102-.69-.25-.987-.195-.4-.597-.634-.996-.788a5.723 5.723 0 00-.626-.194c-1-.263-2.05-.36-3.077-.416a25.834 25.834 0 00-3.7.062c-.915.083-1.88.184-2.75.5-.318.116-.646.256-.888.501-.297.302-.393.77-.177 1.146.154.267.415.456.692.58.36.162.737.284 1.123.366 1.075.238 2.189.331 3.287.37 1.218.05 2.437.01 3.65-.118.299-.033.598-.073.896-.119.352-.054.578-.513.474-.834-.124-.383-.457-.531-.834-.473-.466.074-.96.108-1.382.146-1.177.08-2.358.082-3.536.006a22.228 22.228 0 01-1.157-.107c-.086-.01-.18-.025-.258-.036-.243-.036-.484-.08-.724-.13-.111-.027-.111-.185 0-.212h.005c.277-.06.557-.108.838-.147h.002c.131-.009.263-.032.394-.048a25.076 25.076 0 013.426-.12c.674.019 1.347.067 2.017.144l.228.031c.267.04.533.088.798.145.392.085.895.113 1.07.542.055.137.08.288.111.431l.319 1.484a.237.237 0 01-.199.284h-.003c-.037.006-.075.01-.112.015a36.704 36.704 0 01-4.743.295 37.059 37.059 0 01-4.699-.304c-.14-.017-.293-.042-.417-.06-.326-.048-.649-.108-.973-.161-.393-.065-.768-.032-1.123.161-.29.16-.527.404-.675.701-.154.316-.199.66-.267 1-.069.34-.176.707-.135 1.056.087.753.613 1.365 1.37 1.502a39.69 39.69 0 0011.343.376.483.483 0 01.535.53l-.071.697-1.018 9.907c-.041.41-.047.832-.125 1.237-.122.637-.553 1.028-1.182 1.171-.577.131-1.165.2-1.756.205-.656.004-1.31-.025-1.966-.022-.699.004-1.556-.06-2.095-.58-.475-.458-.54-1.174-.605-1.793l-.731-7.013-.322-3.094c-.037-.351-.286-.695-.678-.678-.336.015-.718.3-.678.679l.228 2.185.949 9.112c.147 1.344 1.174 2.068 2.446 2.272.742.12 1.503.144 2.257.156.966.016 1.942.053 2.892-.122 1.408-.258 2.465-1.198 2.616-2.657.34-3.332.683-6.663 1.024-9.995l.215-2.087a.484.484 0 01.39-.426c.402-.078.787-.212 1.074-.518.455-.488.546-1.124.385-1.766zm-1.478.772c-.145.137-.363.201-.578.233-2.416.359-4.866.54-7.308.46-1.748-.06-3.477-.254-5.207-.498-.17-.024-.353-.055-.47-.18-.22-.236-.111-.71-.054-.995.052-.26.152-.609.463-.646.484-.057 1.046.148 1.526.22.577.088 1.156.159 1.737.212 2.48.226 5.002.19 7.472-.14.45-.06.899-.13 1.345-.21.399-.072.84-.206 1.08.206.166.281.188.657.162.974a.544.544 0 01-.169.364zm-6.159 3.9c-.862.37-1.84.788-3.109.788a5.884 5.884 0 01-1.569-.217l.877 9.004c.065.78.717 1.38 1.5 1.38 0 0 1.243.065 1.658.065.447 0 1.786-.065 1.786-.065.783 0 1.434-.6 1.499-1.38l.94-9.95a3.996 3.996 0 00-1.322-.238c-.826 0-1.491.284-2.26.613z" />
                  </svg>
                </SocialButton>

                <SocialButton
                  href="https://www.paypal.com/paypalme/zahishaked"
                  label="PayPal"
                  bg="#FFFFFF"
                  iconColor="#003087"
                  roundedClass="rounded-full"
                >
                  {/* from public/brands/paypal.svg */}
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
                    <path d="M15.607 4.653H8.941L6.645 19.251H1.82L4.862 0h7.995c3.754 0 6.375 2.294 6.473 5.513-.648-.478-2.105-.86-3.722-.86m6.57 5.546c0 3.41-3.01 6.853-6.958 6.853h-2.493L11.595 24H6.74l1.845-11.538h3.592c4.208 0 7.346-3.634 7.153-6.949a5.24 5.24 0 0 1 2.848 4.686M9.653 5.546h6.408c.907 0 1.942.222 2.363.541-.195 2.741-2.655 5.483-6.441 5.483H8.714Z" />
                  </svg>
                </SocialButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


