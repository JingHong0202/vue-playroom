import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  parameters: {}
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Primary: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    primary: true,
    label: 'Button'
  },
  parameters: {
    playroom: {
      code: `<script setup>
import { ref } from 'vue'
import install from './inject-plugin.js'
install()
</script>

<template>
  <su-button type="primary">button</su-button>
</template>`
    }
  }
};

export const Secondary: Story = {
  args: {
    label: 'Button'
  }
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button'
  },
  parameters: {
    previewTabs: {
      ['storybook/vue-playroom-addon/tab']: {
        hidden: true
      }
    }
  }
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button'
  }
};
