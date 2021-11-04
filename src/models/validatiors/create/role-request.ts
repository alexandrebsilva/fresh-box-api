import { IsOptional, IsString } from "class-validator";

export class RoleCreateRequest {
  @IsString()
  name!: string;

  @IsOptional()
  @IsString()
  description?: string;
}
