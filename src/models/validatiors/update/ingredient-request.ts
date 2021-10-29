import { IsOptional, IsString, ValidateNested } from "class-validator";
import { CategoryIngredient } from "../../../entities/category-ingredient";

export class IngredientUpdateRequest {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsOptional()
  @ValidateNested()
  category?: CategoryIngredient;
}
