import Navbar from "@/components/Layout/Navbar";

export default function IndexLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="max-w-[1440px] w-full px-4">
      <Navbar />
      {children}
    </main>
  );
}