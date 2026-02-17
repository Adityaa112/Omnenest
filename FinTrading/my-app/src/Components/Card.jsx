function Card({ children }) {
  return (
    <div>
      <fieldset>
        {children}
      </fieldset>
    </div>
  );
}

export default Card;
