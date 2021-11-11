import {
  IsArray,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from "class-validator";
import { RecipePictureRequest } from "../recipe-picture-request";
import { RecipeAuxCreateRequest } from "./recipe-aux-request";
import { StepCreateRequest } from "./step-request";

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

  @IsArray()
  ingredients!: RecipeAuxCreateRequest[];

  @IsArray()
  steps?: StepCreateRequest;
}
