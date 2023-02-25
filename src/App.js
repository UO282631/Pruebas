import Dropdown from "./Dropdown";
import Slider from "./Slider";
import "./styles.css";
import * as React from "react";

export default function App() {
  const categorias = [
    {
      slug: "/link1/",
      anchor: "Bibliotecas"
    },
    {
      slug: "/link2/",
      anchor: "Monumentos"
    },
    {
      slug: "/link3/",
      anchor: "Restaurantes"
    }
  ];

  const amigos = [
    {
      slug: "/link1/",
      anchor: "Eloy"
    },
    {
      slug: "/link2/",
      anchor: "Miguel"
    },
    {
      slug: "/link3/",
      anchor: "Lara"
    },
    {
      slug: "/link4/",
      anchor: "Luis Manuel"
    }
  ];

  return (
    <div className="App">
      <h1>Primera versión menú de filtros</h1>
      <div id="menu">
        <Dropdown dropdownTitle="Categorias" items={categorias} />
        <Dropdown dropdownTitle="Amigos" items={amigos} />
        <Slider />
      </div>
    </div>
  );
}
