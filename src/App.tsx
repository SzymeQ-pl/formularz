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
    <>
      <img src="/baner.svg" alt="Baner" style={{ width: "100%", marginBottom: 20 }} />
      <div style={{ margin: 20 }}>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            width: 200,
            marginBottom: 30,
          }}
        >
          <input name="imie" placeholder="Imię" />
          <input name="nazwisko" placeholder="Nazwisko" />
          <input name="ulica" placeholder="Ulica" />
          <input name="miasto" placeholder="Miasto" />
          <button type="submit">Prześlij</button>
        </form>

        {items.length > 0 && (
          <table border={1} cellPadding={5}>
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
      </div>
    </>
  );
}
