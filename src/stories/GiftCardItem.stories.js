import React from "react";

import { GiftGridItem, Footer } from "../components/GiftGridItem";

const initial = [
  {
    title: "Example Small component",
    url:
      "https://media2.giphy.com/media/3orifaQEOagjYJ1EXe/giphy.gif?cid=fa51668c665ogp33nri6ogbmtq3h1i6ymoq9r8xh3pylbht4&rid=giphy.gif",
    small: true,
  },
  {
    title: "Example Medium component",
    url:
      "https://media2.giphy.com/media/3orifaQEOagjYJ1EXe/giphy.gif?cid=fa51668c665ogp33nri6ogbmtq3h1i6ymoq9r8xh3pylbht4&rid=giphy.gif",
    medium: true,
  },
];
const Default = {
  title: "Example/Card",
  component: GiftGridItem,
  subcomponents: { Footer },

  argTypes: {
    title: "Componente",
    url:
      "https://media3.giphy.com/media/6p26sp0YT2LAI/giphy.gif?cid=fa51668chwwa68y4415llkgfzxt82oi1i6jqnn4jy4uireye&rid=giphy.gif",
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <h1>Here doc about your component</h1>
          <p>Here explain about props or details about component</p>
          {initial.map((item) => (
            <GiftGridItem {...item} key={item.url} />
          ))}
        </>
      ),
    },
  },
};
export default Default;
const Template = (args) => <GiftGridItem {...args} />;

export const Main = Template.bind({});
Main.args = {
  title: "Component 800px",
  url:
    "https://media3.giphy.com/media/6p26sp0YT2LAI/giphy.gif?cid=fa51668chwwa68y4415llkgfzxt82oi1i6jqnn4jy4uireye&rid=giphy.gif",
};

export const Small = Template.bind({});
Small.args = {
  title: "Small component",
  small: true,
  url:
    "https://media3.giphy.com/media/SKGo6OYe24EBG/giphy.gif?cid=fa51668chwwa68y4415llkgfzxt82oi1i6jqnn4jy4uireye&rid=giphy.gif",
  hideImage: false,
};

export const Medium = Template.bind({});
Medium.args = {
  title: "Medium component ",
  medium: true,
  url:
    "https://media3.giphy.com/media/SKGo6OYe24EBG/giphy.gif?cid=fa51668chwwa68y4415llkgfzxt82oi1i6jqnn4jy4uireye&rid=giphy.gif",
  hideImage: false,
};
