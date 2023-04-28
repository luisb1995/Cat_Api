import { useState, useEffect } from "react";
import "./App.css";

const CAT_PREFIX = "https://cataas.com";
/*Facts Random: https://catfact.ninja/fact

Imagen random: https://cataas.com/cat/says/hello

Recupera un hecho aleatorio de gatos de la primera API

Recuperar la primera palabra del hecho

Muestra una imagen de un gato con la primera palabra.*/

function App() {
  const [factt, setFactt] = useState();
  const [imageUrl, setImageUrl] = useState();

  const getCat = async () => {
    const res = await fetch("https://catfact.ninja/fact");
    const data = await res.json();
    setFactt(data.fact);
  };
  useEffect(() => {
    getCat();
  }, []);

  useEffect(() => {
    if (!factt) return;

    const threeFirstWords = factt.split(" ", 3).join(" ");

    fetch(
      `https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`
    )
      .then((res) => res.json())
      .then((response) => {
        const { url } = response;
        const nuevo = `${CAT_PREFIX}${url}`;
        setImageUrl(nuevo);
      });
  }, [factt]);


  
  const handleClick = () => {

       getCat();
  }
  
 

  return (
    <>
      <h1>Api de Gatos</h1>
      <h2>
        Recuperar primera palabra de un hecho y buscar una imagen con esa
        palabra en otra api
      </h2>
      <button onClick={handleClick}>Nuevo hecho</button>
      <section>
        {factt && <p>{factt}</p>}
        <img
          src={imageUrl}
          alt="extrayendo imagen de gatos con las 3 primeras palabras api cat"
        />
      </section>
    </>
  );
}

export default App;
