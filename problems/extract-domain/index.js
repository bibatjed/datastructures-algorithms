function domainName(url) {
  //your code here
  if (!url.includes("https://") && !url.includes("http://")) {
    url = `https://${url}`;
  }

  console.log(url);
  const newUrl = new URL(url);
  let hostname = "";
  if (newUrl.hostname.includes("www")) hostname = newUrl.hostname.split(".")[1];
  else {
    hostname = newUrl.hostname.split(".")[0];
  }
  return hostname;
}

//should equal google
console.log(domainName("www.google.com"));
