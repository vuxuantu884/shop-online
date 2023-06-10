import { CarouselBanner, FooterComponent, HeaderComponent, HomePageComponent } from './components';

function App() {
  return (
    <>
      {/* <BannerComponent /> */}
      <HeaderComponent />
      <div style={{ background: '#fff' }}>
        <CarouselBanner />
        <HomePageComponent />
      </div>
      <FooterComponent />
    </>
  );
}

export default App;
