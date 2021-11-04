import {
  IsArray,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from "class-validator";
import { RecipePictureRequest } from "../recipe-picture-request";

export class RecipeCreateRequest {
  @IsString()
  name!: string;

  @IsString()
  description!: string;

  @IsNumber()
  difficultyLevel!: number;

  @IsNumber()
  timeToPrepare!: string;

  @IsOptional()
  @IsArray()
  alergies?: number[];

  @IsOptional()
  @IsArray()
  tags?: number[];

  @IsOptional()
  @IsArray()
  @ValidateNested()
  pictures?: RecipePictureRequest[];
}
