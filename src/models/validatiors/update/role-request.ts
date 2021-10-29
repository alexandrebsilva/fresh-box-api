import { IsOptional, IsString } from "class-validator";

export class RoleUpdateRequest {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  description?: string;
}
