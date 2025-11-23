import { useState } from "react";
import "App.css";

type FormDataType = {
  imie: string;
  nazwisko: string;
  ulica: string;
  miasto: string;
};

export default function App() {
  const [data, setData] = useState<FormDataType | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const formObject = Object.fromEntries(form) as FormDataType;
    setData(formObject);
  };

  if (data) {
    return (
      <table border={1} style={{ margin: 20 }}>
        <tbody>
          <tr>
            <td>Imię</td>
            <td>{data.imie}</td>
          </tr>
          <tr>
            <td>Nazwisko</td>
            <td>{data.nazwisko}</td>
          </tr>
          <tr>
            <td>Ulica</td>
            <td>{data.ulica}</td>
          </tr>
          <tr>
            <td>Miasto</td>
            <td>{data.miasto}</td>
          </tr>
        </tbody>
      </table>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
        width: 200,
        margin: 20,
      }}
    >
      <input name="imie" placeholder="Imię" />
      <input name="nazwisko" placeholder="Nazwisko" />
      <input name="ulica" placeholder="Ulica" />
      <input name="miasto" placeholder="Miasto" />
      <button type="submit">Prześlij</button>
    </form>
  );
}
