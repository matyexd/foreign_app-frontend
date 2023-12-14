import { RolesItemTypes } from "@/constants/Roles";

export class RolesService {
    

    static setRoles(roles: string[]) {
        localStorage.setItem("roles", JSON.stringify(roles));
    }

    static getRoles(): string[] {
       return localStorage.getItem("roles") ? JSON.parse(localStorage.getItem("roles") ?? "") : "";
    }

    static removeRoles() {
        localStorage.removeItem("roles");
    }

    static checkRoleInRoles(role: RolesItemTypes): boolean {
        const roles = this.getRoles();
        if (roles.indexOf(role.code) !== -1) return true;
        else return false;
    }
}