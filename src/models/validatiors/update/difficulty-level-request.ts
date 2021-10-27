import { IsOptional, IsString } from "class-validator";

export class CategoryIngredientUpdateRequest {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  description?: string;
}
