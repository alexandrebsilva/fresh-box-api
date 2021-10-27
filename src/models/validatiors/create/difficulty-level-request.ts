import { IsOptional, IsString } from "class-validator";

export class DifficultyLevelCreateRequest {
  @IsString()
  name!: string;

  @IsOptional()
  @IsString()
  description?: string;
}
