import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
    	extend: {
    		colors: {
    			primary: {
    				'0': '#FFFFFF',
    				'100': '#D6E4FD',
    				'200': '#AEC8FC',
    				'300': '#85A8F8',
    				'400': '#65BDF1',
    				'500': '#3563E9',
    				'600': '#264BC8',
    				'700': '#1A37A7',
    				'800': '#102587',
    				'900': '#0A196F',
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			success: {
    				'100': '#F5FCD2',
    				'200': '#E8FAA6',
    				'300': '#D3F178',
    				'400': '#BCE455',
    				'500': '#9CD323',
    				'600': '#7FB519',
    				'700': '#659711',
    				'800': '#4C7A0B',
    				'900': '#3B6506'
    			},
    			error: {
    				'100': '#FFE7D3',
    				'200': '#FFC8A6',
    				'300': '#FFA37A',
    				'400': '#FF7F59',
    				'500': '#FF4423',
    				'600': '#DB2719',
    				'700': '#B71112',
    				'800': '#930B16',
    				'900': '#7A0619'
    			},
    			warning: {
    				'100': '#FFF8D7',
    				'200': '#FFF8B0',
    				'300': '#FFE488',
    				'400': '#FFD96B',
    				'500': '#FFC73A',
    				'600': '#DBA32A',
    				'700': '#B7821D',
    				'800': '#936312',
    				'900': '#7A4D0B'
    			},
    			information: {
    				'100': '#DCF3FF',
    				'200': '#BAE5FF',
    				'300': '#98D3FF',
    				'400': '#7EC2FF',
    				'500': '#54A6FF',
    				'600': '#3DB1DB',
    				'700': '#2A60B7',
    				'800': '#1A4393',
    				'900': '#102E7A'
    			},
    			secondary: {
    				'100': '#E0E9F4',
    				'200': '#C3D4E9',
    				'300': '#90A3BF',
    				'400': '#596780',
    				'500': '#1A202C',
    				'600': '#131825',
    				'700': '#0D121F',
    				'800': '#080C19',
    				'900': '#040815',
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			}
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		}
    	}
    },
    plugins: [require("tailwindcss-animate")],
} satisfies Config;
