import { Builder } from "@builder.io/react";

export const Heading = (props) => (
  <div>
    <h1 className="text-alkaligrey-800 font-bold pt-5 text-home md:text-6xl lg:text-7xl max-w-7xl m-auto leading-normal text-center" style={{ color: props.color }}>{props.title}</h1>
    <p className="py-10 text-alkaligrey-800 max-w-4xl m-auto text-xl lg:text-2xl text-center">{props.subheading}</p>
  </div>
)
Builder.registerComponent(Heading, {
  name: "Heading",
  inputs: [
    {
      name: "title",
      type: "text",
      defaultValue: 'I am a heading!'
    },
    {
      name: "subheading",
      type: "text",
      defaultValue: "Example text here"
    },
    {
      name: "color",
      type: "color",
      defaultValue: 'black'
    },
  ],
});
