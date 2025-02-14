import WoodenBanner from "./components/WoodenBanner";
import Background from "./components/Background";
import MainBoard from "./components/MainBoard";

function App() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <Background />
      {/* Cluster Clash Banner - Ensure it's in front */}
      <div className="flex justify-center pt-10 absolute top-0 left-0 right-0 z-20">
        <WoodenBanner />
      </div>
      {/* Main Board - Set z-10 to keep it behind */}
      <div className="relative z-10">
        <MainBoard />
      </div>
    </div>
  );
}

export default App;