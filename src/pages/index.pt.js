import React from "react";
import IndexPage from "./index";

const messages = {
  tagline: {
    noun: "Eu",
    verbs: ["crio", "viajo", "amo", "pratico", "sou"],
    things: [
      {
        verb: 0,
        name: "websites",
      },
      {
        verb: 0,
        name: "web apps",
      },
      {
        verb: 1,
        name: "o mundo",
      },
      {
        verb: 2,
        name: "musica eletrônica",
      },
      {
        verb: 2,
        name: "pedalar",
      },
      {
        verb: 3,
        name: "yoga",
      },
      {
        verb: 4,
        name: "Mateus, prazer em conhecê-lo",
      },
    ],
    button: "Vamos conversar!",
  },
  about: {
    title: "Sobre",
    description: (
      <div>
        <p className="lead">Olá 👋</p>
        <p>Sou desenvolvedor de software, raver, ciclita e yogi.</p>
        <p>
          Estou viajando como nômade enquanto trabalho remotamente
          <br /> e curtindo o que mundo tem para oferecer.
        </p>
        <p>Atualmente na Europa 🇪🇺</p>
      </div>
    ),
    tech: "Tecnologias que gosto de usar",
  },
  projects: [
    {
      title: "ekādaśi",
      url: "https://ekadasi.dlbn.co",
      description: "Calendário Ekadashi e visualizador da lua",
    },
    {
      title: "trippr.live",
      url: "https://trippr.live",
      description: "App de ridesharing para eventos de música",
    },
    {
      title: "TRIPBY",
      url: "https://tripby.org",
      description: "Informações sobre psicoativos",
    },
  ],
};

export default (props) => <IndexPage messages={messages} locale="pt" />;
