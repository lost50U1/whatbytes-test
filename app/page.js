import Header from "@/components/common/Header";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* header section */}
      <Header />
      {/* main content section */}
      <div className="flex flex-row">
        {/* sidebar section */}
        <div>
          <h2>Sidebar</h2>
        </div>
        {/* content section */}
        <div>
          <h2>Content</h2>
        </div>
      </div>
    </main>
  );
}
