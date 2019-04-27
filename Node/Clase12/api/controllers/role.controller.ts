import { Generic } from "./generic.controller";
import Rol from "../models/role.model";

export class RoleController extends Generic {
	constructor() {
		super(Rol)
	}
}