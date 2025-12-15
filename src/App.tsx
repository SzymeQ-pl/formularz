import { useState } from "react";
import "./App.css";

export default function App() {
  type FormItem = { imie: string; nazwisko: string; ulica: string; miasto: string };
  const [items, setItems] = useState<FormItem[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const formDataObj: FormItem = {
      imie: (fd.get("imie") as string) || "",
      nazwisko: (fd.get("nazwisko") as string) || "",
      ulica: (fd.get("ulica") as string) || "",
      miasto: (fd.get("miasto") as string) || "",
    };
    setItems((prev) => [...prev, formDataObj]);
    e.currentTarget.reset();
  };

  return (
    <div className="App">
       <header className="header">React</header>
      <img src="/baner.svg" alt="Baner" className="banner" />
      <form onSubmit={handleSubmit} className="form">
        <input name="imie" placeholder="Imię" />
        <input name="nazwisko" placeholder="Nazwisko" />
        <input name="ulica" placeholder="Ulica" />
        <input name="miasto" placeholder="Miasto" />
        <button type="submit">Prześlij</button>
      </form>

      {items.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th>Imię</th>
              <th>Nazwisko</th>
              <th>Ulica</th>
              <th>Miasto</th>
            </tr>
          </thead>
          <tbody>
            {items.map((row, i) => (
              <tr key={i}>
                <td>{row.imie}</td>
                <td>{row.nazwisko}</td>
                <td>{row.ulica}</td>
                <td>{row.miasto}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <footer className="stopka">React</footer>
    </div>
  );
}
