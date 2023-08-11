import { MySession } from "../../types/types";

export interface HeaderProps {
  dataTestId?: string;
}

export interface UseSession {
  data: MySession | null;
}
