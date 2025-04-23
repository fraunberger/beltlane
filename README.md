# Beltlane Hero Banner

A React component that displays the Beltlane logo with an animated ring effect.

## Features

- Responsive SVG logo
- Animated gradient ring
- Text shadow effect
- Accessible with ARIA labels
- Styled with styled-components

## Installation

1. Install the required dependencies:

```bash
npm install styled-components
```

2. Make sure you have the `FPHeadProItalic-Black` font available in your project. If not, you'll need to:
   - Add the font files to your project
   - Import them in your CSS
   - Or replace the font with an alternative in the `StyledSVG` component

## Usage

```tsx
import { HeroBanner } from './components/HeroBanner';

function App() {
  return (
    <div>
      <HeroBanner />
    </div>
  );
}
```

The component will automatically scale to fit its container while maintaining aspect ratio. The maximum width is set to 800px by default.

## Customization

You can modify the following aspects of the banner:

- Background color (currently #ecebe0)
- Maximum width (currently 800px)
- Animation speed (currently 8s)
- Gradient colors
- Text shadow properties
- Font family

Edit the styled-components in `HeroBanner.tsx` to customize these properties.
