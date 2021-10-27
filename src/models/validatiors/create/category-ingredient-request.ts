import { IsOptional, IsString } from "class-validator";

export class CategoryIngredientCreateRequest {
  @IsString()
  name!: string;

  @IsString()
  @IsOptional()
  description!: string;
}
