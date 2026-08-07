function SpecialsCard({ image, title, price, description }) {
  return (
    <article className="special-card">
      <img src={image} alt={title} />

      <div className="special-card-content">
        <div className="special-card-header">
          <h3>{title}</h3>
          <span className="price">{price}</span>
        </div>

        <p>{description}</p>

        <button aria-label={`Order ${title}`}>
          Order Delivery
        </button>
      </div>
    </article>
  );
}

export default SpecialsCard;