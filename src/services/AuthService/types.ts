import { RolesType } from "@/constants/Roles";

export interface PostGetCodeData {
  data: {
    code: string;
  };
  message: string;
}

export interface PostLoginData {
  data: {
    token: string;
    user: {
      id: number;
      phone: string;
      userIdentifier: string;
      roles: RolesType;
    };
  };
  message: string;
}
