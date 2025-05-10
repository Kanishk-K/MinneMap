import Navbar from "@/components/Layout/Navbar";

export default function IndexLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col items-center">
      <main className="max-w-[1440px] w-full px-4">
        <Navbar />
        {children}
      </main>
    </div>
  );
}