export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <nav className="bg-gray-400">Nav</nav>
      {children}
    </div>
  );
}
