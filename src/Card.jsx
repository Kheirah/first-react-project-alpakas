export default function Card({ title, description, image }) {
  return (
    <section>
      <img src={image} alt="squirrel" />
      <h2>I&#39;m {title}</h2>
      <p>{description}</p>
    </section>
  );
}
