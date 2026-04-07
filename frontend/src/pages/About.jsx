import { Link } from "react-router-dom";
import alan2 from "../images/alan2.webp";

const specs = [
  { label: "DISCIPLINA", value: "Diseño Industrial" },
  { label: "EXPERIENCIA", value: "2+ Años" },
  { label: "ESPECIALIDAD", value: "Producto & Mobiliario modular" },
  {
    label: "HERRAMIENTAS",
    value: "SolidWorks, Rhino, V-Ray, Blender, Invetor Autodesk, Photoshop",
  },
  {
    label: "CONOCIMIENTOS",
    value: "Cerámica, Metales, Plásticos, Madera, Joyería",
  },
  {
    label: "HABILIDADES",
    value:
      "Modelado digital, Prototipado, Storytelling, Conceptualización de productos",
  },
];

const awards = [
  { year: "2026", name: "Cactácea. WantedDesign, Manhattan" },
  { year: "2024", name: "Cafar. WantedDesign, Manhattan" },
  { year: "2023", name: "Expo Salón Satélite, Milán" },
];

function About() {
  return (
    <section className="about">
      <div className="about__me-image-container">
        <img className="about__me-image" src={alan2} alt="alan-retrato" />
      </div>
      <div className="about__container">
        <h1 className="about__me">Alan Vásquez Vázquez</h1>

        <p className="about__description">
          Diseñador Industrial egresado de la Universidad Anáhuac Puebla (2025),
          con experiencia en exposiciones y ferias internacionales de diseño en
          ciudades como Milán, Valencia, Nueva York y Ciudad de México. Me
          caracteriza una constante curiosidad por aprender, explorar nuevas
          herramientas y mejorar mis procesos, con el objetivo de seguir
          creciendo profesionalmente para aportar soluciones de diseño bien
          estructuradas, funcionales y visualmente atractivas.
        </p>
        <div className="about__specs">
          {specs.map((spec, i) => (
            <div key={i} className="about__specs-container">
              <span className="about__specs-label">{spec.label}</span>
              <span className="about__specs-value">{spec.value}</span>
            </div>
          ))}
        </div>

        <div className="about__awards">
          <p className="about__awards-title">Logros destacados</p>
          <div className="about__awards-container">
            {awards.map((award, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="about__awards-year ">{award.year}</span>
                <span className="about__awards-name ">{award.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
