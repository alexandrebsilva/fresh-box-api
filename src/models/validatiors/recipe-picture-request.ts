import { IsString } from "class-validator";

export class RecipePictureRequest {
  @IsString()
  fileName!: string;

  @IsString()
  alt!: string;

  @IsString()
  path!: number;
}
