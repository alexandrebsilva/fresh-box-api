import {
  IsArray,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from "class-validator";
import { RecipePictureRequest } from "../recipe-picture-request";

export class RecipeUpdateRequest {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsNumber()
  difficultyLevel?: number;

  @IsOptional()
  @IsNumber()
  timeToPrepare?: string;

  @IsOptional()
  @IsArray({ each: true })
  alergies?: number[];

  @IsOptional()
  @IsArray()
  tags?: number[];

  @IsOptional()
  @IsArray()
  @ValidateNested()
  pictures?: RecipePictureRequest[];
}
