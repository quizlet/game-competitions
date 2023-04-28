# Resolve Port Conflicts

In cases where NextJS has previously set localhost:3000 (apps/home) and localhost:4001 (apps/game) but failed to terminate, you can resolve the issue by following these steps:

## For Mac

1. Run the command `lsof -i :3000` to identify the process that is occupying port 3000.
2. Note down the <PID> (Process ID) displayed in the output.
3. Execute `kill -9 <PID>` to forcefully terminate the process occupying the port.

## For Windows

1. Open Command Prompt with administrator privileges.
2. Run the command `netstat -ano | findstr :3000` to identify the process that is occupying port 3000. Note the PID (Process ID) displayed at the end of the output line.
3. Execute `taskkill /PID <PID> /F` to forcefully terminate the process occupying the port. Replace `<PID>` with the actual Process ID you noted in step 2.

By completing these steps, you can free up the ports previously set by NextJS and resolve any lingering issues.