import type { PaletteDesignToken, Preset, Theme } from '@cjdevstudios/bumblevue/themes/types';

export * from '@cjdevstudios/bumbleuix-styled';

export declare const definePreset: (...presets: Preset[]) => Preset;
export declare const updatePreset: (...presets: Preset[]) => Preset;
export declare const updatePrimaryPalette: (palette?: PaletteDesignToken) => Preset;
export declare const updateSurfacePalette: (palette?: PaletteDesignToken) => Preset;
export declare const usePreset: (...presets: Preset[]) => Preset;
export declare const useTheme: (theme: Theme) => Theme;
