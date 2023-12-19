import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import IconSection from "./components/iconSection/IconSection";
import ProductiveSection from "./components/productiveSection/ProductiveSection";
import ReviewSection from "./components/reviewSection/ReviewSection";
import "./style.css";

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
      </main>
      <Footer />
    </div>
  );
}

export default App;
