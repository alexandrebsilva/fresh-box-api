import { IsOptional, IsString } from "class-validator";

export class DifficultyLevelUpdateRequest {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  description?: string;
}
