import { type User } from "~/types/";
import defaultUsers from "../data/users.json";
export const useUser = () => {
  const userLoggedIn = useState<User | null>("userLoggedIn", () => null);
  //@ts-ignore
  const users = useState<User[]>("user", () => defaultUsers);
  const createUser = (user: User) => {
    users.value.push(user);
  };

  const redirectUser = (user: User) => {
    if (
      user?.roles.includes("admin") &&
      user.email === "marialuisa.pes@retexspa.com" &&
      user.password === "retex"
    ) {
      userLoggedIn.value = user;
      navigateTo("/users/list");
    } else if (
      user?.roles.includes("user") &&
      user.email === "carolina.goitre@retexspa.com" &&
      user.password === "retex"
    ) {
      userLoggedIn.value = user;
      navigateTo("/users/");
    }
  };

  const login = async (user: User) => {
    await new Promise((r) => setTimeout(r, 1000));
    if (user?.email) {
      redirectUser(user);
    }
  };

  return {
    users,
    createUser,
    login,
    userLoggedIn,
    redirectUser,
  };
};
