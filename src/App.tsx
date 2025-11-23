import { useState } from "react";
import './App.css';


export default function App() {
  const [data, setData] = useState<any>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setData(Object.fromEntries(new FormData(e.currentTarget)));
  };

  if (data) {
    return (
      <table border={1} style={{ margin: 20 }}>
        <tbody>
          <tr><td>Imię</td><td>{data.imie}</td></tr>
          <tr><td>Nazwisko</td><td>{data.nazwisko}</td></tr>
          <tr><td>Ulica</td><td>{data.ulica}</td></tr>
          <tr><td>Miasto</td><td>{data.miasto}</td></tr>
        </tbody>
      </table>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 10, width: 200, margin: 20 }}>
      <input name="imie" placeholder="Imię" />
      <input name="nazwisko" placeholder="Nazwisko" />
      <input name="ulica" placeholder="Ulica" />
      <input name="miasto" placeholder="Miasto" />
      <button type="submit">Prześlij</button>
    </form>
  );
}
