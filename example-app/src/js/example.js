import { CapacitorPersistentAccount } from '@capgo/capacitor-persistent-account';

window.testEcho = () => {
    const inputValue = document.getElementById("echoInput").value;
    CapacitorPersistentAccount.echo({ value: inputValue })
}
