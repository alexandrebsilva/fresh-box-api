import { IsNumber, IsOptional, IsString } from "class-validator";

export class IngredientCreateRequest {
  @IsString()
  name!: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsNumber()
  category!: number;
}
