
import Header from "@/components/Header";
import MapAndList from "@/components/MapAndList";

export default function Home() {

  return (
    <div>
      <Header />
      <div className="px-5 mt-1">
        <MapAndList />
      </div>
    </div>
  );
}
