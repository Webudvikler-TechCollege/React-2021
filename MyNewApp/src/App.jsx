import React from "react";
import "./App.scss";
import { Header } from "./components/Partial/Header/Header";
import { Navigation } from "./components/Layout/Navigation/Navigation";
import { Section } from "./components/Partial/Section/Section";

const Footer = () => {
  return <footer>Nice footer</footer>;
};

const Paragraf = (props) => {
  return (
    <section>
      <p>{props.text}</p>
    </section>
  );
};

const textList = [
  "Text1",
  "Text2",
  "Text3",
  "Text4",
  "Text5",
  "Text6",
  "Text7",
];

const sectionData = {
  headline: "CORONA",
  text: "Vi klarer den!",
  tags: ["corona", "vaccine"],
};

const sectionList = [
  {
    headline: "CORONA",
    text: "Vi klarer den!",
    tags: ["corona", "vaccine"],
  },
  {
    headline: "Jul",
    text: "Det bliver godt!",
    tags: ["mad", "pakker"],
  },
];

function Container(props) {
  console.log("🚀 ~ file: App.jsx ~ line 52 ~ Container ~ props", props);

  return <div style={{ maxWidth: "50vw" }}>{props.children}</div>;
}

function App() {
  return (
    <div className="container">
      <article>
        <Navigation background="#bada55" direction="row" darkMode={true} />
        <Header />
        {/* <Section data={sectionData} /> */}
        {sectionList.map((data, index) => {
          return <Section key={index} data={data} />;
        })}
        {/* <Paragraf text="Testing text test" /> */}
        {textList.map((text, index, array) => {
          return <Paragraf key={index} text={text} />;
        })}
        <Footer />
        <Container>
          <div>hej</div>
          <div>med</div>
          <div>dig</div>
        </Container>
      </article>
    </div>
  );
}

export default App;
