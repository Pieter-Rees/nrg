const barIndexes = [0, 1, 2, 3, 4, 5, 6, 7];

export function Equalizer() {
  function renderBar(index: number) {
    return <span className="eqBar" key={index} />;
  }

  return (
    <div aria-hidden="true" className="equalizer">
      {barIndexes.map(renderBar)}
    </div>
  );
}
