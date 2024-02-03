function server() {
  return process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000/api/";
}

export const ApiConfigs = {
  base_url: server(),
  /* -------------------------------- */

  apis: {
    auth: {
      user: { register: "users" },
      collector: { register: "collector" },
      enterprise: { register: "entreprise" },
      login: "users/login",
    },
    collector: {
      store: "collector/AddCollector",
    },
    enterprise: {
      store: "entreprise/AddEntreprise",
    }

  },
};
