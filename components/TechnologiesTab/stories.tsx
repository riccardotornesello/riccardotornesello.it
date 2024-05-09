import type { Meta, StoryObj } from "@storybook/react";
import TechnologiesTab from "./index";

const meta = {
  title: "UI/TechnologiesTab",
  component: TechnologiesTab,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TechnologiesTab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    color: "#ffff00",
    label: "Frontend",
    children: (
      <>
        <span>React</span>
        <span>Next.js</span>
        <span>Typescript</span>
      </>
    ),
  },
};
