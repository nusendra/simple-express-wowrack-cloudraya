## Instructions

1. **Create New Backend Project**
   - Begin by creating a new backend project.
   - Add simple routes to your project.
   - Push the project to GitHub.

2. **Create and Setup New Virtual Machine (VM)**
   - Set up a new VM for your project.

3. **SSH Login to VM**
   - Use the standard username and password to SSH into your VM. For instance: `ssh root@123.123.123.123`

4. **Run Ubuntu Update**
   - Update Ubuntu using the following commands:
     ```
     sudo apt update && sudo apt upgrade
     ```

5. **Install Node.js**
   - Install Node.js using the following commands:
     ```
     cd ~
     curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash
     sudo apt install nodejs -y
     ```

6. **Clone Repository to VM and Install Dependencies**
   - Clone your GitHub repository to the VM.
   - Run `npm install` to install project dependencies.

7. **Configure GitHub Actions**
   - Navigate to your repository on GitHub.
   - Go to the Actions tab.
   - Choose Node.js.
   - Write the workflow, referring to `.github/workflows/node.js.yml` for guidance.

8. **Setup Environment Variables**
   - Navigate to Settings.
   - Go to Secrets and variables, then Actions.
   - Click New repository secret.
   - Create three variables: HOST, PASSWORD, and USERNAME, using details from your VM.
   - Re-run the workflow.

9. **Install PM2 and Start Application**
   - Log in to your VM via SSH.
   - Install PM2 globally using `npm install pm2 -g`.
   - Navigate to your project folder.
   - Start your application with the following command:
     ```
     pm2 start index.js --watch
     ```

10. **Add More Routes and Monitor**
    - Experiment by adding more routes to your application.
    - Optionally, run `pm2 monit` to monitor the processes.

11. **Customize Port (Optional)**
    - If you wish to run the app on a custom port, install `ufw`.
    - Allow the custom port using `ufw`.

Follow these steps to set up your backend project efficiently, ensuring smooth development and deployment processes.

