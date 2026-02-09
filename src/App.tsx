// src/App.tsx
import Navbar from "./components/Navbar";
import Portofolio from "./pages/Portofolio";

export default function App() {
  return (
    // This wrapper ensures the background color covers the entire site
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-500">
      <Navbar />
      <Portofolio />
    </div>
  );
}