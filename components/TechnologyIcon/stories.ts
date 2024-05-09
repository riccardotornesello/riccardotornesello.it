import type { Meta, StoryObj } from "@storybook/react";
import TechnologyIcon from "./index";

const meta = {
  title: "UI/TechnologyIcon",
  component: TechnologyIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TechnologyIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-plain.svg",
    children: "Python",
  },
};
