import { IsOptional, IsString } from "class-validator";

export class TagCreateRequest {
  @IsString()
  name!: string;

  @IsOptional()
  @IsString()
  description?: string;
}