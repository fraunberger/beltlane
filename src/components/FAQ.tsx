// components/FAQ.tsx

export default function FAQ() {
  const questions = [
    { q: "What is the Beltane?", a: "The Beltlane is a high-speed lane for wheeled vehicles that  runs parallel and separate from the original Beltline path." },
    { q: "Why now?", a: "The Eastside Beltline is among the most trafficked footpaths in Atlanta, and at times of high usage, the mix of speeds between walkers, joggers, bikers, and motorized vehicles creates a dangerous environment that increases collisions. As the Beltline will only grow more popular in the coming years, it is advantageous to immediately construct a high-speed vehicle lane that will increase overall efficiency and safety for all users" },
    { q: "Does this work against Beltline Rail?", a: "No, while the idea of a separate path has been kicked around for years, Mayor Andre Dickens' move to kill the Streetcar extension leaves a right of way that the Beltlane can be built on. However, our group will support the swift return of the Beltlane right of way for any public transit projects that are approved and constructed." },
  ];

  return (
    <section id="faq" className="max-w-3xl mx-auto my-10">
      <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
      {questions.map(({ q, a }, idx) => (
        <details key={idx} className="border-b py-3">
          <summary className="cursor-pointer font-semibold">{q}</summary>
          <p className="pt-2">{a}</p>
        </details>
      ))}
    </section>
  );
}
