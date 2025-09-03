import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Recruitment = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="pt-24 pb-16 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Recruitment
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {/* This page will soon link to our recruitment website. */}
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Recruitment;