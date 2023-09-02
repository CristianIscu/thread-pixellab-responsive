export default function ProductTile() {
  return (
    <article className="product-tile">
      <header className="product-tile-header">
        <a href="/" tile="Thread Affair Monochrome Suit">
          <picture>
            <img
              src="/images/products/product-01a.jpg"
              alt="Thread Affair Monochrome Suit"
            />
          </picture>
        </a>

        <span className="badge badge-primary">%</span>

        <h1 className="product-tile-title">
          <a href="/" title="Thread Affair Monochrome Suit">
            <span>Thread Affair</span> Monochrome <span>Suit</span>
          </a>
        </h1>

        <h2 className="product-tile-subtitle">
          <a href="" title="Thread Affair Monochrome Suit">
            London fit semi-slim
          </a>
        </h2>
      </header>

      <section className="product-tile-content">
        <span class="product-catalog-price">399</span>

        <span class="product-price">
          USD<span> 270.00</span>
        </span>
      </section>

      <footer className="product-tile-footer">
        <button className="button button-primary">Add to Cart</button>
      </footer>
    </article>
  );
}
