export const loginWithCreds = async (formData: {
  login: string;
  password: string;
}): Promise<{ ok: boolean; token: string }> => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(
        formData.login === "error"
          ? { ok: false, token: "" }
          : { ok: true, token: "fake-token" },
      );
    }, 1000),
  );
};
