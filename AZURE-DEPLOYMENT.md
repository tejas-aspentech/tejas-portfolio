# Azure Static Web Apps Deployment Guide

## Prerequisites

1. Azure account ([Create free account](https://azure.microsoft.com/free/))
2. GitHub account
3. Azure CLI (optional, for CLI deployment)

## Deployment Options

### Option 1: Deploy via Azure Portal (Recommended for Beginners)

1. **Push code to GitHub** 
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo.git
   git push -u origin main
   ```

2. **Create Static Web App in Azure Portal**
   - Go to [Azure Portal](https://portal.azure.com)
   - Click "Create a resource"
   - Search for "Static Web App"
   - Click "Create"

3. **Configure the deployment**
   - **Subscription**: Select your subscription
   - **Resource Group**: Create new or use existing
   - **Name**: Choose a unique name (e.g., my-portfolio)
   - **Plan type**: Free (for personal projects)
   - **Region**: Choose closest to your location
   - **Deployment source**: GitHub
   - **Organization**: Your GitHub username
   - **Repository**: Select your portfolio repository
   - **Branch**: main
   - **Build Presets**: Next.js
   - **App location**: /
   - **Output location**: out

4. **Complete deployment**
   - Click "Review + create"
   - Click "Create"
   - Azure will automatically set up GitHub Actions workflow
   - Your site will be live in a few minutes!

### Option 2: Deploy via Azure CLI

1. **Install Azure CLI**
   ```bash
   # Windows (via Chocolatey)
   choco install azure-cli

   # Or download from: https://aka.ms/installazurecliwindows
   ```

2. **Login to Azure**
   ```bash
   az login
   ```

3. **Create Static Web App**
   ```bash
   # Create resource group
   az group create --name portfolio-rg --location eastus

   # Create static web app
   az staticwebapp create \
     --name my-portfolio \
     --resource-group portfolio-rg \
     --source https://github.com/yourusername/your-repo \
     --location eastus \
     --branch main \
     --app-location "/" \
     --output-location "out" \
     --login-with-github
   ```

## Post-Deployment Steps

### 1. Custom Domain (Optional)

1. In Azure Portal, go to your Static Web App
2. Click "Custom domains" in the left menu
3. Click "Add"
4. Follow instructions to verify domain ownership
5. Add CNAME record pointing to your Azure URL

### 2. Environment Variables

If you need environment variables:

1. In Azure Portal, go to your Static Web App
2. Click "Configuration" in the left menu
3. Add your environment variables
4. Restart the app

### 3. Monitor Deployment

- Go to your GitHub repository
- Click "Actions" tab
- Watch the workflow run
- Once complete, your site is live!

## Updating Your Site

Simply push changes to your main branch:

```bash
git add .
git commit -m "Update portfolio"
git push
```

GitHub Actions will automatically rebuild and redeploy!

## Troubleshooting

### Build fails in GitHub Actions

- Check the Actions log in GitHub
- Ensure all dependencies are listed in package.json
- Verify next.config.mjs has `output: 'export'`

### Site shows 404 errors

- Ensure `staticwebapp.config.json` is present
- Check that output location is set to "out"

### Dark mode not working

- Clear browser cache
- Check if system dark mode preference is set

## Cost

Azure Static Web Apps Free tier includes:
- 100 GB bandwidth per month
- Unlimited APIs
- Custom domain with free SSL
- Global distribution

Perfect for personal portfolios!

## Useful Commands

```bash
# Build locally
npm run build

# Test production build locally
npx serve out

# View Azure resources
az staticwebapp list --output table

# View deployment logs
az staticwebapp show --name my-portfolio --resource-group portfolio-rg
```

## Additional Resources

- [Azure Static Web Apps Docs](https://docs.microsoft.com/en-us/azure/static-web-apps/)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
- [GitHub Actions for Azure](https://github.com/Azure/actions)
