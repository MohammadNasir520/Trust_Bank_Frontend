export const getBaseUrl = (): any => {
  const environment = process.env.NODE_ENV;
  console.log({ environment })
  switch (environment) {
    case "development":
      return "https://trust-bank-backend.vercel.app/api/v1"; // Replace with your development API URL
    // return "http://localhost:5000/api/v1"; // Replace with your development API URL
    case "production":
      return "https://trust-bank-server.onrender.com/api/v1"; // Replace with your production API URL
    default:
      return "https://trust-bank-server.onrender.com/api/v1"; // Replace with a default API URL
  }
};
