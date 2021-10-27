import { IsOptional, IsString } from "class-validator";

export class TagUpdateRequest {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  description?: string;
}
