# cPanel Deployment Guide for Tafy Tax Website

## Prerequisites
- cPanel hosting account with access to File Manager
- Node.js installed locally for building
- FTP/SFTP access or cPanel File Manager access

## Build Process

### 1. Build for Production
```bash
# Install dependencies
npm install

# Build for cPanel
npm run build
```

This will create a `dist` folder with static files ready for deployment.

### 2. Upload to cPanel

#### Method 1: Using cPanel File Manager
1. Log into your cPanel account
2. Open File Manager
3. Navigate to `public_html`
4. Create a new folder called `tafytax`
5. Upload all files from the `dist` folder to `public_html/tafytax`
6. Upload the `.htaccess` file to `public_html/tafytax`

#### Method 2: Using FTP/SFTP
1. Connect to your hosting account
2. Navigate to `public_html`
3. Create `tafytax` folder
4. Upload all files from `dist` folder to `public_html/tafytax`
5. Upload `.htaccess` to `public_html/tafytax`

### 3. Configure Domain
Your website will be accessible at:
`https://yourdomain.com/tafytax`

### 4. Test the Deployment
- Visit `https://yourdomain.com/tafytax`
- Check that all pages load correctly
- Verify the Calendly button appears
- Test navigation between pages

## Important Notes

### Base Path Configuration
The site is configured to work in a subdirectory (`/tafytax`). If you want to deploy to the root domain:

1. Update `next.config.mjs`:
```javascript
assetPrefix: undefined,
basePath: undefined,
```

2. Update `.htaccess`:
```apache
RewriteRule ^(.*)$ /$1 [L]
RewriteRule ^ /index.html [L]
```

### Static Site Limitations
- No server-side functionality (API routes won't work)
- No dynamic routing with parameters
- Contact forms need to be handled by external services
- Image optimization is disabled

### Troubleshooting

#### 404 Errors
- Check that `.htaccess` is uploaded correctly
- Verify `mod_rewrite` is enabled on your server
- Ensure file permissions are correct (755 for folders, 644 for files)

#### Styles Not Loading
- Check that CSS files are uploaded
- Verify paths in the HTML are correct
- Clear browser cache

#### Calendly Button Not Showing
- Check browser console for errors
- Verify Calendly script is loading
- Ensure no ad-blockers are blocking the script

## Alternative: Root Domain Deployment
If you want the site to be the main domain (not in `/tafytax`):

1. Update `next.config.mjs`:
```javascript
assetPrefix: undefined,
basePath: undefined,
```

2. Upload files directly to `public_html` instead of `public_html/tafytax`

3. Update `.htaccess` to remove `/tafytax` references

## Maintenance
- To update the site, rebuild locally and re-upload the `dist` folder contents
- Keep a backup of your `dist` folder before uploading new versions
- Test thoroughly after each deployment
