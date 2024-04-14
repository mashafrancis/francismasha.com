import Script from "next/script";

const TinyBirdScript = () => {
  return (
    <Script
      defer
      src="https://unpkg.com/@tinybirdco/flock.js"
      data-host="https://api.tinybird.co"
      data-token="p.eyJ1IjogIjBjODM0YmYwLTU1NWItNDZmMC1hYjU3LWFkY2IzOTZkMzQ0MSIsICJpZCI6ICJiZDVmMDk1MC0xMTdkLTQ1NDktOGRlZS04MWEwMzgxMDY3MzMifQ.1juNzr4jSbY9VYhKGot7ypVptV_ZIHFsXMESKis0SWw"
    />
  );
};

export default TinyBirdScript;
