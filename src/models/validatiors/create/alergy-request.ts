import { IsString } from "class-validator";

export class AlergyCreateRequest {
  @IsString()
  name!: string;

  @IsString()
  description!: string;
}
