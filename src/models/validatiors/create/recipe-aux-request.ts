import { IsBoolean, IsNumber } from "class-validator";

export class RecipeAuxCreateRequest {
  @IsNumber()
  unitOfMeasurement!: number;

  @IsNumber()
  ingredient!: number;

  @IsNumber()
  amount!: number;

  @IsBoolean()
  isIncluded!: boolean;
}
