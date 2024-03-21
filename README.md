## Steps

- create new backend project, add simple routes, push to github
- create and setup new VM
- login to ssh using standard username and password e.g. `ssh root@123.123.123.123`
- run ubuntu update with these commands, `sudo apt update && sudo apt upgrade`
- install node.js using these commands

```
    cd ~
    curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash
    sudo apt install nodejs -y
```

- clone your repo to VM, and run `npm install`
- go to your new repo, click tab Actions, choose Node.js
- write the workflow, you can take a look at `.github/workflows/node.js.yml` for your reference.
- Now we need to setup our environment variables. Go to settings, Secrets and variables, Actions. Then click New repository secret.
- Create 3 variables, HOST, PASSWORD, USERNAME. You can copy those details from your VM informations.
- Then try to re-run the workflow

- go back to your vm, login with ssh. then install pm2 `npm install pm2 -g`
- then go to your project folder, run this command `pm2 start index.js --watch`
- try to add more routes to see the changes
- (OPTIONAL) run `pm2 monit` to see the process
- (OPTIONAL) if you would like to run the app to custom port, install `ufw` and allow custom port on that.
