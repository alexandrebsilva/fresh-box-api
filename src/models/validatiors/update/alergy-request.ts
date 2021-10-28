import { IsOptional, IsString } from "class-validator";

export class AlergyUpdateRequest {
  @IsOptional()
  @IsString()
  name?: string;
}
