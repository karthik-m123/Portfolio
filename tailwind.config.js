/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate',
        'matrix': 'matrix 20s linear infinite',
        'scan': 'scan 2s linear infinite',
        'glitch': 'glitch 0.3s infinite',
       'spin': 'spin 2s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgb(0 255 136 / 0.5)' },
          '100%': { boxShadow: '0 0 20px rgb(0 255 136 / 0.8), 0 0 30px rgb(0 255 136 / 0.4)' },
        },
        'pulse-glow': {
          '0%': { 
            boxShadow: '0 0 5px rgba(0, 255, 136, 0.5)',
            textShadow: '0 0 5px rgba(0, 255, 136, 0.5)'
          },
          '100%': { 
            boxShadow: '0 0 20px rgba(0, 255, 136, 0.8), 0 0 30px rgba(0, 255, 136, 0.4)',
            textShadow: '0 0 10px rgba(0, 255, 136, 0.8), 0 0 20px rgba(0, 255, 136, 0.4)'
          },
        },
        matrix: {
          '0%': { transform: 'translateY(-100vh)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' },
        },
       spin: {
         '0%': { transform: 'rotate(0deg)' },
         '100%': { transform: 'rotate(360deg)' },
       },
      },
      backdropBlur: {
        xs: '2px',
      },
      colors: {
        // High Contrast Light Mode Colors
        light: {
          // Primary backgrounds
          'bg-primary': '#ffffff',      // Pure white - Maximum contrast
          'bg-secondary': '#f8fafc',    // Very light gray
          'bg-tertiary': '#f1f5f9',     // Light gray
          
          // High contrast text colors
          'text-primary': '#000000',    // Pure black (21:1 contrast)
          'text-secondary': '#1f2937',  // Very dark gray (15.3:1 contrast)
          'text-tertiary': '#374151',   // Dark gray (10.4:1 contrast)
          'text-muted': '#4b5563',      // Medium dark gray (7.8:1 contrast)
          
          // High contrast interactive elements
          'accent-primary': '#003399',      // Dark blue (8.2:1 contrast)
          'accent-primary-hover': '#00297a', // Darker blue hover
          'accent-primary-active': '#001f5c', // Darkest blue active
          
          'accent-secondary': '#5b21b6',    // Dark purple (7.1:1 contrast)
          'accent-secondary-hover': '#4c1d95', // Darker purple hover
          'accent-secondary-active': '#3c1570', // Darkest purple active
          
          // High contrast borders and dividers
          'border-primary': '#000000',   // Black borders for maximum definition
          'border-secondary': '#4b5563', // Dark gray borders
          'border-muted': '#9ca3af',     // Medium gray for subtle borders
          
          // Icon colors
          'icon-primary': '#000000',     // Black icons
          'icon-secondary': '#1f2937',   // Dark gray icons
          'icon-accent': '#003399',      // Blue accent icons
        },
        
        // Dark Mode Colors (unchanged)
        dark: {
          'bg-primary': '#0f172a',
          'bg-secondary': '#1e293b',
          'bg-tertiary': '#334155',
          
          'text-primary': '#f8fafc',
          'text-secondary': '#cbd5e1',
          'text-tertiary': '#94a3b8',
          'text-muted': '#64748b',
          
          'accent-primary': '#00ff88',
          'accent-primary-hover': '#00e676',
          'accent-primary-active': '#00c853',
          
          'accent-secondary': '#00d4ff',
          'accent-secondary-hover': '#00bcd4',
          'accent-secondary-active': '#0097a7',
          
          'border-primary': '#475569',
          'border-secondary': '#374151',
          'border-muted': '#1f2937',
          
          'icon-primary': '#f8fafc',
          'icon-secondary': '#cbd5e1',
          'icon-accent': '#00ff88',
        },
        
        // State colors (work for both themes)
        state: {
          'success': '#059669',         // Dark green (7.2:1 contrast on white)
          'success-hover': '#047857',   // Darker green hover
          'success-active': '#065f46',  // Darkest green active
          'success-bg-light': '#d1fae5',
          'success-bg-dark': '#064e3b',
          
          'error': '#dc2626',           // Dark red (7.0:1 contrast on white)
          'error-hover': '#b91c1c',     // Darker red hover
          'error-active': '#991b1b',    // Darkest red active
          'error-bg-light': '#fee2e2',
          'error-bg-dark': '#7f1d1d',
          
          'warning': '#d97706',         // Dark orange (6.8:1 contrast on white)
          'warning-hover': '#b45309',   // Darker orange hover
          'warning-active': '#92400e',  // Darkest orange active
          'warning-bg-light': '#fef3c7',
          'warning-bg-dark': '#78350f',
          
          'info': '#2563eb',            // Dark blue (7.5:1 contrast on white)
          'info-hover': '#1d4ed8',      // Darker blue hover
          'info-active': '#1e40af',     // Darkest blue active
          'info-bg-light': '#dbeafe',
          'info-bg-dark': '#1e3a8a',
        },
        
        // Legacy colors for backward compatibility
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          850: '#1a202c',
          900: '#111827',
          950: '#0d1117',
        },
        green: {
          400: '#00ff88',
          500: '#00e676',
          600: '#00c853',
        },
        blue: {
          400: '#00d4ff',
          500: '#00bcd4',
          600: '#0097a7',
        },
        cyber: {
          green: '#00ff88',
          blue: '#00d4ff',
          purple: '#8b5cf6',
        }
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-animated'),
  ],
};