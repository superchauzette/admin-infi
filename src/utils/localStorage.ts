type Data = {
  idToken: string;
  refreshToken: string;
  token: string;
  user: {
    _id: string;
    email: string;
    firstname: string;
    lastname: string;
    _partitionKey: string;
    role: "titulaire" | "admin" | "remplacant" | "super-admin";
  };
  username: string;
};

export function getLocalStorageAccessToken(): Data["token"] {
  return localStorage.getItem("token");
}

export function setLocalStorageAccessToken(token: Data["token"]) {
  return localStorage.setItem("token", token);
}

export function getRefreshToken(): Data["refreshToken"] {
  return localStorage.getItem("refresh-token");
}

export function setRefreshToken(refreshToken: Data["refreshToken"]) {
  return localStorage.setItem("refresh-token", refreshToken);
}

export function getLocalStorageUser(): Data["user"] {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
}

export function setLocalStorageUser(user: Data["user"]) {
  return localStorage.setItem("user", JSON.stringify(user));
}

export function saveInLocalStorage(data: Data) {
  setRefreshToken(data.refreshToken);
  setLocalStorageAccessToken(data.token);
  setLocalStorageUser(data.user);
}
