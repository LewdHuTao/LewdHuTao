"use client";

import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#0C1219] flex flex-col justify-center items-center select-none">
      <section className="flex flex-col gap-4 md:flex-row items-center justify-center mt-20 px-4 pb-20">
        <div className="flex flex-col items-center">
          <h2 className="text-9xl font-bold text-white">404</h2>
          <p className="text-2xl font-normal text-[#A59DAD] text-center pt-3 pb-4">
            Oops! We haven't found any pixels around here
          </p>
          <button
            className="w-32 h-14 rounded-lg bg-white text-gray-800 hover:bg-gray-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
            onClick={() => router.push("/")}
          >
            Return Home
          </button>
        </div>
      </section>
    </div>
  );
}
