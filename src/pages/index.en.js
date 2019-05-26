import React from "react";
import IndexPage from "./index";

const messages = {
  tagline: {
    noun: "I",
    verbs: ["build", "travel", "love", "practice", "am"],
    things: [
      {
        verb: 0,
        name: "websites",
      },
      {
        verb: 0,
        name: "web applications",
      },
      {
        verb: 1,
        name: "the world",
      },
      {
        verb: 2,
        name: "electronic music",
      },
      {
        verb: 2,
        name: "bicycling",
      },
      {
        verb: 3,
        name: "yoga",
      },
      {
        verb: 4,
        name: "Mateus, nice to meet you",
      },
    ],
    button: `Let's talk!`,
  },
  about: {
    title: "About",
    description: (
      <div>
        <p className="lead">Hi 👋</p>
        <p>I'm a software developer, raver, cyclist and yogi.</p>
        <p>
          I've been traveling as a nomad while working remotely
          <br /> and enjoying the what the world has to offer.
        </p>
        <p>Currently in Europe 🇪🇺</p>
      </div>
    ),
    tech: "Tech I like to work with",
  },
  projects: [
    {
      title: "ekādaśi",
      url: "https://ekadasi.dlbn.co",
      description: "Minimalistic Ekadashi calendar and moon visualizer",
    },
    {
      title: "trippr.live",
      url: "https://trippr.live",
      description: "Ridesharing app for music events",
    },
    {
      title: "tripby.org",
      url: "https://tripby.org",
      description: "Psychoactive drug info",
    },
  ],
};

export default (props) => <IndexPage messages={messages} locale="en" />;
