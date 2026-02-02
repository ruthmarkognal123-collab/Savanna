import Layout from "@/components/Layout";
import TallyEmbed from "@/components/TallyEmbed";

export default function Booking() {
  return (
    <Layout>
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <TallyEmbed
            src="https://tally.so/embed/3lQDYB?alignLeft=1&transparentBackground=1&dynamicHeight=1"
            title="Savanna Ethiopia – Booking Form"
            height={900}
            className="rounded-xl shadow-sm"
          />
        </div>
      </section>
    </Layout>
  );
}
