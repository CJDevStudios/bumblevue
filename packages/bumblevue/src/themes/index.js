import * as Styled from '@cjdevstudios/bumblevue/styled';

export const definePreset = (...presets) => Styled.definePreset(...presets);
export const updatePreset = (...presets) => Styled.updatePreset(...presets);
export const updatePrimaryPalette = (palette) => Styled.updatePrimaryPalette(palette);
export const updateSurfacePalette = (palette) => Styled.updateSurfacePalette(palette);
export const usePreset = (...presets) => Styled.usePreset(...presets);
export const useTheme = (theme) => Styled.useTheme(theme);

export * from '@cjdevstudios/bumblevue/styled';
