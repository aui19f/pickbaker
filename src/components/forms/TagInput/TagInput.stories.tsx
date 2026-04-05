import type { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "storybook/internal/preview-api";
import TagInput from "./TagInput";

const meta: Meta<typeof TagInput> = {
  title: "Forms/TagInput",
  component: TagInput,
  tags: ["autodocs"],
  argTypes: {
    sizing: { control: "select", options: ["sm", "md", "lg"] },
  },
};

export default meta;
type Story = StoryObj<typeof TagInput>;

export const Default: Story = {
  args: {
    tags: ["베이킹", "초코"],
    placeholder: "태그 입력 후 Enter",
    sizing: "md",
  },
  render: (args) => {
    const [{ tags }, updateArgs] = useArgs();
    return (
      <TagInput
        {...args}
        tags={tags}
        onTagsChange={(newTags) => updateArgs({ tags: newTags })}
      />
    );
  },
};
