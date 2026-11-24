/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Paleta Cromática Norteña (Lambayeque / Costa Norte)
        base: '#FAF8F5',        // Fondo cálido base marfil arquitectónico
        clay: {                 // Tono tierra / Arcilla oscura (Acentos, botones, énfasis)
          DEFAULT: '#864728',
          hover: '#6e381e',
          light: '#9e5632',
          dark: '#582b16'
        },
        ochre: {                // Tono ocre / Algarrobo / Madera dorada
          DEFAULT: '#b58a55',
          light: '#cca675',
          dark: '#936e3c'
        },
        olive: {                // Tono verde oliva seco / Follaje costero
          DEFAULT: '#7c7559',
          light: '#938b6d',
          dark: '#5e5840'
        },
        sand: {                 // Tono arena / Adobe / Piedra lavada (Superficies secundarias)
          DEFAULT: '#d5c8b5',
          light: '#e2d8c9',
          dark: '#b8a994'
        },
        carbon: {               // Carbón oscuro profundo (Textos principales y contrastes)
          DEFAULT: '#2d2d23',
          light: '#424235',
          dark: '#1c1c15'
        },
        // Divisores y bordes sutiles
        hairline: 'rgba(45, 45, 35, 0.12)',
        hairlineDark: 'rgba(250, 248, 245, 0.16)'
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', '"Outfit"', 'system-ui', 'sans-serif'],
        serif: ['"Plus Jakarta Sans"', '"Outfit"', 'system-ui', 'sans-serif'],
        tech: ['"Space Grotesk"', 'monospace'],
        sans: ['"Inter"', 'system-ui', 'sans-serif']
      },
      letterSpacing: {
        technical: '0.14em',
        editorial: '-0.02em'
      },
      maxWidth: {
        screen: '1440px'
      }
    },
  },
  plugins: [],
}
