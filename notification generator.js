function sendNotification(email){
    if(typeof email !=="string" || !email.includes("@")){
        return "Invalid Email";
    }
    const parts= email.split("@");
    const userName = parts[0];
    const domainName = parts[1];
    return `${userName} sent you main from ${domainName}`
}
console.log(sendNotification("upo@gmail.com"))