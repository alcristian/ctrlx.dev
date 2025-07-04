# CTRLX - Cyberpunk Terminal

A retro-futuristic terminal-style landing page with a cyberpunk aesthetic, inspired by Neuromancer and 90s hacker culture.

![Preview](./preview.png)

## Features

- Retro terminal interface with typewriter effect
- Cyberpunk/90s hacker aesthetic
- Glitch effects and scanlines for authenticity
- Responsive design
- Automatic redirect to your main domain

## Setup & Deployment

1. **GitHub Pages Setup**
   - Create a new repository named `yourusername.github.io` (replace `yourusername` with your GitHub username)
   - Push this code to the `main` branch
   - Go to Repository Settings > Pages
   - Set source to `Deploy from a branch`
   - Set branch to `main` and `/ (root)`
   - Click Save

2. **Custom Domain Setup (Cloudflare)**
   - In your Cloudflare DNS settings, add a CNAME record:
     - Type: CNAME
     - Name: `@` or your subdomain (e.g., `www`)
     - Target: `yourusername.github.io` (your GitHub Pages URL)
   - In your repository settings, under Pages > Custom domain, enter your domain (e.g., `ctrlx.dev`)
   - Check "Enforce HTTPS"

3. **Configuration**
   - Update the redirect URL in `script.js` (line with `window.location.href`)
   - Customize the terminal messages in the `messages` array in `script.js`

## Local Development

1. Clone the repository
2. Open `index.html` in a web browser
3. No build step required - it's just HTML, CSS, and vanilla JavaScript

## Customization

- **Colors**: Edit the CSS variables in `styles.css`
- **Messages**: Update the `messages` array in `script.js`
- **Timing**: Adjust the timing variables in `script.js`

## License

MIT License - feel free to use this for your own projects!