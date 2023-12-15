import Banner from "./components/Banner";
import Footer from "./components/Footer";
import GetAccessSection from "./components/GetAccessSection";
import Header from "./components/Header";
import IconSection from "./components/IconSection";
import ProductiveSection from "./components/ProductiveSection";
import ReviewSection from "./components/ReviewSection";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <Banner />
      </div>
      <main>
        <IconSection />
        <ProductiveSection />
        <ReviewSection />
        <GetAccessSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
