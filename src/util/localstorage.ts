export const removeToken = () => {
  localStorage.removeItem("token");
};
export const setToken = (val: string) => {
  localStorage.setItem("token", val);
};

export function tokenLoader() {
  return new Promise((resolve, reject) => {
    const token = localStorage.getItem("token");
    if (!token) {
      // If there's no token, reject the promise
      reject("No token found");
    } else {
      // If there's a token, resolve the promise
      resolve(token);
    }
  });
}

export function getToken(): string {
  const token = localStorage.getItem("token");
  if (token === null) {
    return "";
  }
  return token;
}
