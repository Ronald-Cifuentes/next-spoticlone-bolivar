import { MySession } from "../types/types";

export const customGet = async (url: string, session: MySession | null) => {
  if (url && session && session.user) {
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${session.user?.accessToken}`,
      },
    }).then((res) => res.json());

    return res;
  }
  return {};
};
