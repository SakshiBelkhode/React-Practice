function Features() {

  const features = [
    { id: 1, title: "Fast", desc: "React makes UI fast and smooth." },
    { id: 2, title: "Reusable", desc: "Components save development time." },
    { id: 3, title: "Responsive", desc: "Build apps for all devices." }
  ];

  return (
    <section className="features">

      {features.map((item) => (
        <div key={item.id} className="feature-card">
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
        </div>
      ))}

    </section>
  );
}

export default Features;